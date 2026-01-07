'use client';

interface MountainBackdropProps {
  className?: string;
  opacity?: number;
  variant?: 'hero' | 'footer' | 'section';
}

export default function MountainBackdrop({ 
  className = '', 
  opacity = 0.15,
  variant = 'hero' 
}: MountainBackdropProps) {
  const colors = {
    distant: '#c4a77d',
    mid: '#8b7355',
    close: '#6b5a45',
  };

  if (variant === 'footer') {
    return (
      <div className={`absolute inset-x-0 top-0 overflow-hidden pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ opacity }}
        >
          <path
            d="M0 120V80L180 60L360 75L480 45L600 70L720 35L840 55L960 40L1080 65L1200 50L1320 70L1440 55V120H0Z"
            fill={colors.distant}
          />
          <path
            d="M0 120V90L120 75L240 85L360 65L480 80L600 55L720 70L840 60L960 75L1080 55L1200 70L1320 60L1440 75V120H0Z"
            fill={colors.mid}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <path
          d="M0 320V220L60 200L120 210L180 180L240 195L300 160L360 175L420 140L480 155L540 120L600 135L660 100L720 115L780 80L840 95L900 60L960 75L1020 40L1080 55L1140 20L1200 35L1260 50L1320 30L1380 45L1440 25V320H0Z"
          fill={colors.distant}
        />
        <path
          d="M0 320V250L80 235L160 245L240 215L320 230L400 195L480 210L560 175L640 190L720 155L800 170L880 135L960 150L1040 115L1120 130L1200 95L1280 110L1360 75L1440 90V320H0Z"
          fill={colors.mid}
        />
        <path
          d="M0 320V280L100 268L200 275L300 255L400 265L500 240L600 250L700 225L800 235L900 210L1000 220L1100 195L1200 205L1300 180L1440 195V320H0Z"
          fill={colors.close}
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-desert via-desert/50 to-transparent" />
    </div>
  );
}
