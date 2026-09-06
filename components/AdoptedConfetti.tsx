import React from 'react';

interface ConfettiPieceProps {
  type: 'ribbon' | 'circle' | 'star';
  color: string;
  top: string;
  left: string;
  animClass: string;
  delay?: string;
  size?: string;
  rotation?: string;
  isSilver?: boolean;
}

const PIECES: ConfettiPieceProps[] = [
  // Oro champagne suave pastel
  { type: 'ribbon', color: '#fef08a', top: '12%', left: '16%', animClass: 'animate-confetti-a', delay: '0s', rotation: '16deg' },
  // Plateado perlado delicado
  { type: 'circle', color: '#e2e8f0', top: '20%', left: '82%', animClass: 'animate-confetti-b', delay: '0.4s', size: '4.5px', isSilver: true },
  // Estrella plateada luminosa
  { type: 'star',   color: '#cbd5e1', top: '34%', left: '12%', animClass: 'animate-confetti-twinkle', delay: '0.8s', isSilver: true },
  // Celeste pastel claro
  { type: 'ribbon', color: '#bae6fd', top: '28%', left: '74%', animClass: 'animate-confetti-a', delay: '1.2s', rotation: '-22deg' },
  // Rosa empolvado pastel
  { type: 'circle', color: '#fbcfe8', top: '48%', left: '88%', animClass: 'animate-confetti-b', delay: '0.6s', size: '4px' },
  // Estrella oro champagne pastel
  { type: 'star',   color: '#fef3c7', top: '14%', left: '52%', animClass: 'animate-confetti-twinkle', delay: '1.5s' },
  // Cinta plateada fina
  { type: 'ribbon', color: '#e2e8f0', top: '52%', left: '18%', animClass: 'animate-confetti-b', delay: '1.8s', rotation: '32deg', isSilver: true },
  // Verde menta pastel
  { type: 'circle', color: '#a7f3d0', top: '62%', left: '80%', animClass: 'animate-confetti-a', delay: '2.1s', size: '4px' },
  // Estrella lavanda pastel
  { type: 'star',   color: '#ddd6fe', top: '42%', left: '84%', animClass: 'animate-confetti-twinkle', delay: '1.0s' }
];

export const AdoptedConfetti: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10" 
      aria-hidden="true"
    >
      {PIECES.map((piece, index) => {
        const style: React.CSSProperties = {
          top: piece.top,
          left: piece.left,
          animationDelay: piece.delay,
        };

        const shadowColor = piece.isSilver ? 'rgba(203, 213, 225, 0.7)' : `${piece.color}70`;

        if (piece.type === 'ribbon') {
          return (
            <span
              key={index}
              className={`absolute block w-1.5 h-3 rounded-full ${piece.animClass} opacity-85`}
              style={{
                ...style,
                backgroundColor: piece.color,
                transform: `rotate(${piece.rotation || '0deg'})`,
                boxShadow: `0 1px 3px ${shadowColor}`,
                border: piece.isSilver ? '0.5px solid rgba(255, 255, 255, 0.8)' : undefined
              }}
            />
          );
        }

        if (piece.type === 'circle') {
          return (
            <span
              key={index}
              className={`absolute block rounded-full ${piece.animClass} opacity-90`}
              style={{
                ...style,
                width: piece.size || '4.5px',
                height: piece.size || '4.5px',
                backgroundColor: piece.color,
                boxShadow: `0 1px 3px ${shadowColor}`,
                border: piece.isSilver ? '0.5px solid rgba(255, 255, 255, 0.9)' : undefined
              }}
            />
          );
        }

        // 4-pointed gentle star
        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className={`absolute w-3 h-3 ${piece.animClass} opacity-90`}
            style={{
              ...style,
              filter: piece.isSilver ? 'drop-shadow(0 1px 2px rgba(203, 213, 225, 0.8))' : `drop-shadow(0 1px 2px ${piece.color}60)`
            }}
            fill={piece.color}
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        );
      })}
    </div>
  );
};
