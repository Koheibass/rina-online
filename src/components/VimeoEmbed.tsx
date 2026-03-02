interface VimeoEmbedProps {
  src: string;
  title: string;
}

export function VimeoEmbed({ src, title }: VimeoEmbedProps) {
  return (
    <div className="aspect-video w-full rounded-2xl shadow-card overflow-hidden">
      <iframe
        className="w-full h-full"
        src={src}
        allow="autoplay; fullscreen; picture-in-picture"
        title={title}
      />
    </div>
  );
}
