interface User {
  id: number;
  name: string;
  email: string;
}

export type UserToInsert = Omit<User, 'id'>;

export default User;
