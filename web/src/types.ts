export interface User {
  id: number;
  name: string;
  email: string;
}

export interface RootState {
  user: {
    user: User | null;
  };
}
