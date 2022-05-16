import { Injectable } from '@nestjs/common';
import { RedisCommandArgument } from '@node-redis/client/dist/lib/commands';
import { UserInfo } from 'os';
import { createClient } from 'redis';
import { UserDto } from 'src/db/dtos/user.dto';
import { COOKIE_EXPIRE } from 'src/utils/vars';

const client = createClient({
  url: process.env.REDIS_URL,
});
client.connect();
client.on('error', (err) => console.log('Redis Client Error', err));

@Injectable()
export class RedisService {
  // * --------- 字符串 ---------
  async set(key: RedisCommandArgument, value: string) {
    return client.set(key, value);
  }

  // * expire(s): 过期时间
  async setEx(key: RedisCommandArgument, value: string, expire: number) {
    return await client.setEx(key, expire, value);
  }

  async get(key: RedisCommandArgument) {
    return await client.get(key);
  }

  async del(key: RedisCommandArgument) {
    return await client.del(key);
  }

  async setUserInfo(cookie: string, userInfo: UserDto) {
    return await this.setEx(
      `${cookie}_userInfo`,
      JSON.stringify(userInfo),
      COOKIE_EXPIRE,
    );
  }

  async getUserInfo(cookie: string) {
    return await this.get(`${cookie}_userInfo`);
  }
}
