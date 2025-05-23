import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@/common/db/database.service';
import { User } from '@/domain/user/user';

@Injectable()
export class UserRepository {
  constructor(private readonly db: DatabaseService) {}

  async create(
    email: string,
    username: string,
    password: string,
  ): Promise<void> {
    await this.db.query(
      `INSERT INTO user (email, username, password)
       VALUES (?, ?, ?)`,
      [email, username, password],
    );
  }

  async findById(id: number): Promise<User | null> {
    const result = await this.db.query<User>(
      `SELECT id, email, username FROM user WHERE id = ?`,
      [id],
    );
    if (result.length === 0) {
      return null;
    } else {
      return {
        id: result[0].id,
        email: result[0].email,
        username: result[0].username,
      };
    }
  }

  async findAll(): Promise<User[]> {
    const result = await this.db.query<User>(
      `SELECT id, email, username FROM user`,
    );
    return result.map((user) => ({
      id: user.id,
      email: user.email,
      username: user.username,
    }));
  }

  async delete(id: number): Promise<void> {
    await this.db.query(`DELETE FROM user WHERE id = ?`, [id]);
  }
}
