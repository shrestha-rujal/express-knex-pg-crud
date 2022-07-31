import { StatusCodes } from 'http-status-codes';

import logger from '../misc/logger';
import CustomError from '../misc/CustomError';
import { writeDataToFile } from '../utils/common';
import User, { UserToInsert } from '../domain/User';
import { USERS_LIST_FILE } from '../constants/common';

import users from '../users.json';

/**
 * Get all the users.
 * @returns {Promise<User[]>}
 */
export const getAllUsers = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

/**
 * Get a single user by id.
 * @param {number} id
 * @returns {Promise<User>}
 */
export const getUser = async (id: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    const requiredUser = users.find((user) => user.id === id);
    if (requiredUser) {
      resolve(requiredUser);
    } else {
      logger.error(`User with id: ${id} not found`);
      reject(new CustomError('User not found', StatusCodes.NOT_FOUND));
    }
  });
};

/**
 * Create a new User.
 * @param {UserToInsert} user
 * @returns {Promise<User>}
 */
export const createUser = async (user: UserToInsert): Promise<User> => {
  return new Promise((resolve, reject) => {
    const newUser = { id: Date.now(), ...user };
    users.push(newUser);
    writeDataToFile(USERS_LIST_FILE, users);

    resolve(newUser);
  });
};

/**
 * Update an existing user.
 * @param {User} user
 * @returns {Promise<User>}
 */
export const updateUser = async (user: User): Promise<User> => {
  return new Promise((resolve, reject) => {
    const otherUsers = users.filter((u) => u.id !== user.id);
    const newUsersList = [...otherUsers, user];
    writeDataToFile(USERS_LIST_FILE, newUsersList);

    resolve(user);
  });
};

/**
 * Delete an existing user.
 * @param {number} userId
 * @returns {Promise<number>}
 */
export const deleteUser = async (userId: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    const otherUsers = users.filter((u) => u.id !== userId);
    writeDataToFile(USERS_LIST_FILE, otherUsers);

    resolve(userId);
  });
};
