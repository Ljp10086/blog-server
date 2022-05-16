import { RedisCommandArgument } from '@node-redis/client/dist/lib/commands';
import { UserDto } from 'src/db/dtos/user.dto';
export declare class RedisService {
    set(key: RedisCommandArgument, value: string): Promise<string>;
    setEx(key: RedisCommandArgument, value: string, expire: number): Promise<string>;
    get(key: RedisCommandArgument): Promise<string>;
    del(key: RedisCommandArgument): Promise<number>;
    setUserInfo(cookie: string, userInfo: UserDto): Promise<string>;
    getUserInfo(cookie: string): Promise<string>;
}
