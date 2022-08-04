import db from "../db/db";

import IPost from "../domain/Post";

class Post {
  public static table = "post";

  public static async getUserPosts(userId: number): Promise<IPost[]> {
    const posts = await db(Post.table)
      .where("user_account_id", userId)
      .join("user_account AS ua", "ua.id", "=", "user_account_id")
      .select("title", "content", "ua.name");

    return posts;
  }
}

export default Post;
