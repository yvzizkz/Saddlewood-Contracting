'use client';

interface MountainDividerProps {
  className?: string;
  flip?: boolean;
  variant?: 'wave' | 'peaks' | 'gentle';
  color?: string;
}

export default function MountainDivider({ 
  className = '', 
  flip = false,
  variant = 'wave',
  color = '#f5f0e8'
}: MountainDividerProps) {
  const transform = flip ? 'rotate(180deg)' : 'none';
  
  if (variant === 'peaks') {
    return (
      <div className={`w-full overflow-hidden ${className}`} style={{ transform }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V60L180 40L360 55L480 25L600 45L720 15L840 35L960 20L1080 45L1200 30L1320 50L1440 35V80H0Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'gentle') {
    return (
      <div className={`w-full overflow-hidden ${className}`} style={{ transform }}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V40C240 20 480 30 720 25C960 20 1200 35 1440 30V60H0Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ transform }}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 100V70C120 60 240 75 360 65C480 55 600 70 720 60C840 50 960 65 1080 55C1200 45 1320 60 1440 50V100H0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
