import { NextResponse } from "next/server";

const DISCORD_API = "https://discord.com/api/v10";
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID!;
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN!;

export async function GET() {
  const res = await fetch(`${DISCORD_API}/channels/${CHANNEL_ID}/messages?limit=10`, {
    headers: {
      Authorization: `Bot ${BOT_TOKEN}`,
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: res.status });
  }

  const messages = await res.json();

  const formatted = messages.map((msg: {
    id: string;
    content: string;
    timestamp: string;
    author: { username: string; avatar: string | null; id: string };
    attachments: { url: string; content_type?: string }[];
  }) => ({
    id: msg.id,
    content: msg.content,
    timestamp: msg.timestamp,
    author: {
      name: msg.author.username,
      avatar: msg.author.avatar
        ? `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
        : null,
    },
    images: msg.attachments
      .filter((a) => a.content_type?.startsWith("image/"))
      .map((a) => a.url),
  }));

  return NextResponse.json(formatted);
}
