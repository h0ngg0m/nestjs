import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  async onModuleInit() {
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'testdb',
      waitForConnections: true,
      connectionLimit: 10,
    });
  }

  async query<T = any>(sql: string, params?: any[]): Promise<T[]> {
    const [rows] = await this.pool.query(sql, params);
    return rows as T[];
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
