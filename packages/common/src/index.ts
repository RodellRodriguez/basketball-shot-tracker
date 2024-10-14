export interface Shot {
    id: string;
    madeShot: boolean;
    position: {
      x: number;
      y: number;
    };
    timestamp: Date;
  }
  
  export function calculateShootingPercentage(shots: Shot[]): number {
    const madeShots = shots.filter(shot => shot.madeShot).length;
    return (madeShots / shots.length) * 100;
  }