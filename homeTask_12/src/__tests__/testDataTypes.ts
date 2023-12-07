export type Add = {
  nums: number[];
  expected: number | null;
};

export type Multiply = Add;

export type Substract = {
  reduced: number | null;
  subtrahend: number | null;
  expected: number | string | null;
};

export type Division = Substract;

export type Exponential = {
  num: number | null;
  expected: number | null;
};
