/**
 * In-memory storage implementation for development and testing
 * This serves as a fallback when database connections fail
 */
import { InsertUser, type User } from '@/shared/schema';

// Extended user type for in-memory storage
type MemUser = {
  id: number;
  username: string;
  password: string;
  name: string | null;
  createdAt: Date;
}

// In-memory users collection
const users: MemUser[] = [
  {
    id: 1,
    username: 'admin',
    name: 'Admin User',
    password: '$2a$10$xQvD7BWfr5e/jOJGpwYbOuLzLIm76iXTB9y.wvvIf6fUOJ.YqVHXu', // admin1234
    createdAt: new Date()
  }
];

// Keep track of the next ID to assign
let nextId = 2;

export class MemStorage {
  async getUser(id: number): Promise<User | undefined> {
    return users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return users.find(user => user.username === username);
  }

  async createUser(userData: InsertUser): Promise<User> {
    const newUser: MemUser = {
      id: nextId++,
      username: userData.username,
      password: userData.password,
      name: userData.name || userData.username,
      createdAt: new Date()
    };
    
    users.push(newUser);
    return newUser as User;
  }

  async getAllUsers(): Promise<User[]> {
    return [...users].map(user => {
      // Don't expose password in list
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    });
  }
}

// Create singleton instance
export const memStorage = new MemStorage();