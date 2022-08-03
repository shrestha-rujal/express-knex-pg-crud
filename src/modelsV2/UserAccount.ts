import db from "../db/db";
import { UserToInsert } from "../domain/User";

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
}

export default UserAccount;
