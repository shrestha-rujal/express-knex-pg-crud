import db from "../db/db";
import User, { UserToInsert } from "../domain/User";

class UserAccount {
  public static table = "user_account";

  public static async getAllUsers() {
    const users = await db(UserAccount.table).select();

    return users;
  }

  public static async createUser(user: UserToInsert) {
    const newUser = await db(UserAccount.table).insert(user, [
      "id",
      "name",
      "email",
    ]);

    return newUser;
  }

  public static async getUser(userId: number): Promise<User> {
    const user = await db(UserAccount.table)
      .where({ id: userId })
      .select()
      .first();

    return user;
  }

  public static async updateUser(user: User): Promise<User> {
    const [updatedUser] = await db(UserAccount.table)
      .where({ id: user.id })
      .update(user)
      .returning(["id", "name", "email"]);

    return updatedUser;
  }

  public static async deleteUser(userId: number): Promise<void> {
    await db(UserAccount.table).where({ id: userId }).delete();
  }
}

export default UserAccount;
