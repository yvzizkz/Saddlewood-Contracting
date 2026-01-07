'use client';

interface DesertTextureProps {
  className?: string;
  variant?: 'sand' | 'topographic' | 'noise';
  opacity?: number;
}

export default function DesertTexture({ 
  className = '', 
  variant = 'sand',
  opacity = 0.05
}: DesertTextureProps) {
  if (variant === 'topographic') {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{ opacity }}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="topo-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M100 20C60 20 30 50 30 90C30 130 60 160 100 160C140 160 170 130 170 90C170 50 140 20 100 20Z"
                fill="none"
                stroke="#c4a77d"
                strokeWidth="0.5"
              />
              <path
                d="M100 40C70 40 50 60 50 90C50 120 70 140 100 140C130 140 150 120 150 90C150 60 130 40 100 40Z"
                fill="none"
                stroke="#c4a77d"
                strokeWidth="0.5"
              />
              <path
                d="M100 60C80 60 70 75 70 90C70 105 80 120 100 120C120 120 130 105 130 90C130 75 120 60 100 60Z"
                fill="none"
                stroke="#c4a77d"
                strokeWidth="0.5"
              />
              <path
                d="M100 80C90 80 85 85 85 90C85 95 90 100 100 100C110 100 115 95 115 90C115 85 110 80 100 80Z"
                fill="none"
                stroke="#c4a77d"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-pattern)" />
        </svg>
      </div>
    );
  }

  if (variant === 'noise') {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{ 
          opacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    );
  }

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a77d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
}
