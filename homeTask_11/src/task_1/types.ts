interface Man {
  name: string;
  age: number;
}

export interface User extends Man {
  occupation: string;
  car?: string;
  children?: number;
}

interface Admin extends Man {
  role: string;
}

export type Person = User | Admin;
