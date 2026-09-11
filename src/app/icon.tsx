import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: '#111215',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: '7px',
          fontWeight: 700,
          fontFamily: 'monospace',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
      >
        PR
      </div>
    ),
    {
      ...size,
    }
  );
}
