import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E2E2E" />
              <stop offset="100%" stopColor="#555555" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#bg)" />
          <circle cx="50" cy="22" r="4" fill="#C9A96E" />
          <line x1="50" y1="26" x2="50" y2="72" stroke="#C9A96E" strokeWidth="5" strokeLinecap="round" />
          <line x1="27" y1="34" x2="73" y2="34" stroke="#C9A96E" strokeWidth="5" strokeLinecap="round" />
          <line x1="27" y1="34" x2="20" y2="53" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" />
          <line x1="27" y1="34" x2="34" y2="53" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 53 Q27 66 38 53" stroke="#C9A96E" strokeWidth="4" strokeLinecap="round" fill="none" />
          <line x1="73" y1="34" x2="66" y2="53" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" />
          <line x1="73" y1="34" x2="80" y2="53" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round" />
          <path d="M62 53 Q73 66 84 53" stroke="#C9A96E" strokeWidth="4" strokeLinecap="round" fill="none" />
          <polygon points="39,72 61,72 68,81 32,81" fill="#C9A96E" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
