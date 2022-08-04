import logger from "../misc/logger";
import Success from "../domain/Success";
// import * as UserModel from "../models/UserModel";
import UserModalV2 from "../modelsV2/UserAccount";
import PostModel from "../modelsV2/Post";
import User, { UserToInsert } from "../domain/User";
import IPost from "../domain/Post";

/**
 * Get all the users.
 * @returns {Promise<Success<User[]>>}
 */
export const getAllUsers = async (): Promise<Success<User[]>> => {
  logger.info("Getting all users");

  const users = await UserModalV2.getAllUsers();

  // const users = await UserModel.getAllUsers();

  return {
    data: users,
    message: "Users fetched successfully",
  };
};

/**
 * Get a single user by id.
 * @param {number} userId
 * @returns {Promise<Success<User>>}
 */
export const getUser = async (userId: number): Promise<Success<User>> => {
  logger.info(`Getting user with id: ${userId}`);
  // const user = await UserModel.getUser(userId);

  const user = await UserModalV2.getUser(userId);

  return {
    data: user,
    message: "User fetched successfully",
  };
};

/**
 * Get posts for single user by userId.
 * @param {number} userId
 * @returns {Promise<Success<User>>}
 */
export const getUserPosts = async (
  userId: number
): Promise<Success<IPost[]>> => {
  logger.info(`Getting posts for user with id: ${userId}`);
  // const user = await UserModel.getUser(userId);

  const posts = await PostModel.getUserPosts(userId);

  return {
    data: posts,
    message: "User fetched successfully",
  };
};

/**
 * Create a new User.
 * @param {UserToInsert} user
 * @returns {Promise<Success<User>>}
 */
export const createUser = async (
  user: UserToInsert
): Promise<Success<User>> => {
  const insertedUser = await UserModalV2.createUser(user);

  // const insertedUser = await UserModel.createUser(user);
  logger.info("User created successfully");

  return {
    data: insertedUser,
    message: "User created successfully",
  };
};

/**
 * Update an existing user.
 * @param {User} user
 * @returns {Promise<Success<User>>}
 */
export const updateUser = async (user: User): Promise<Success<User>> => {
  // const updatedUser = await UserModel.updateUser(user);
  const updatedUser = await UserModalV2.updateUser(user);
  logger.info("User updated successfully");

  return {
    data: updatedUser,
    message: "User updated successfully",
  };
};

/**
 * Delete an existing user.
 * @param {number} userId
 * @returns {Promise<Success<User>>}
 */
export const deleteUser = async (userId: number): Promise<Success<User>> => {
  // await UserModel.deleteUser(userId);

  await UserModalV2.deleteUser(userId);

  logger.info("User deleted successfully");

  return {
    message: "User deleted successfully",
  };
};
