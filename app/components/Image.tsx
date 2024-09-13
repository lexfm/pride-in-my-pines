import path from 'path';

export function withBasePrefix(location?: string): string  {
  if (!location) {
    return "";
  }

  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return path.join(process.env.NEXT_PUBLIC_BASE_PATH, location);
  }

  return location;
}
