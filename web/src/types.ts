export interface User {
  id: number;
  name: string;
  email: string;
}

export interface RootState {
  user: User | null;
}
