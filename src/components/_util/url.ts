export function isUrl(url: string): boolean {
  if (url && url.toLowerCase().match(/^(https?:\/\/)/gi)) {
    return true;
  }
  return false;
}
