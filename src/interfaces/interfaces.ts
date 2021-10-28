// -------interface Car
export interface Car {
  readonly make: string;
  readonly model: string;
  readonly year: number;
  readonly madeInGermany: boolean;
  damaged: boolean;
}

// -------interface Button + extend
export interface Button {
  text: string;
  action(): void;
}

// ---------interface IconButton
export interface IconButton extends Button {
  icon: string;
}
