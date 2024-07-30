export type TypeCard =
  | 'Work'
  | 'Play'
  | 'Study'
  | 'Exercise'
  | 'Social'
  | 'Self Care';

export interface TimeFrame {
  daily: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
}

export type DisplayType = 'weekly' | 'monthly' | 'daily';

export interface Time {
  title: TypeCard;
  timeframes: TimeFrame;
}

export interface User {
  firstName: string;
  lastName: string;
}
