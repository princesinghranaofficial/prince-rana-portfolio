import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 68,
          background: '#111215',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: '40px',
          fontWeight: 800,
          fontFamily: 'monospace',
          border: '2px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        PSR
      </div>
    ),
    {
      ...size,
    }
  );
}
