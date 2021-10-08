interface EncodeDataNetlifyProps {
  [x: string]: string;
}

export function encodeDataNetlify(data: EncodeDataNetlifyProps): string {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}
