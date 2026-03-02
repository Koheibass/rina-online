export const EXTERNAL_LINKS = {
  discord: "https://discord.com/invite/ccrhMDAuM2",
  discordApp: "https://discord.com/",
  iosApp: "https://apple.co/3w8XwWC",
  androidApp:
    "https://play.google.com/store/apps/details?id=com.discord&hl=ja&gl=US&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
  squareOtoNakama:
    "https://checkout.square.site/merchant/MLEBAD16WCXRP/checkout/2RSMC3DZGZ6MDCATZEXDNDS4",
  squareOtoManabi:
    "https://checkout.square.site/merchant/MLEBAD16WCXRP/checkout/IMTLCOASL3W2653EUJOTW6BX",
  email: "mailto:info@rina-akaboshi.com",
  vimeoVideo: "https://player.vimeo.com/video/904759768?h=afafd305c7&badge=0&autopause=0&player_id=0&app_id=58479",
} as const;

export const COURSES = {
  otoNakama: {
    name: "おとなかまコース",
    planName: "♪おとなかまコース",
    price: "980円",
    priceUnit: "/月",
  },
  otoManabi: {
    name: "おとまなびコース",
    planName: "♪おとまなびコース",
    price: "3,900円",
    priceUnit: "/月",
  },
} as const;

export const NAV_ITEMS = [
  { href: "#friends", label: "おとなかまコース" },
  { href: "#study", label: "おとまなびコース" },
  { href: "#join", label: "ご参加の流れ" },
  { href: "#thought", label: "オーナーの想い" },
  { href: "#notes", label: "注意事項" },
] as const;
