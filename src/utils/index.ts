export * from "./triple_click_detection"

export const checkPublicIcon = (
  url: string,
  default_url = "/assets/link.svg"
) =>
  url !== default_url && url.indexOf("https") > 0
    ? default_url
    : "/assets/link.svg"
