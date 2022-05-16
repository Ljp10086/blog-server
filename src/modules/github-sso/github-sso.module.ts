import { HttpModule, Module } from '@nestjs/common';
import { GithubSsoService } from './github-sso.service';
import { GithubSsoController } from './github-sso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/db/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
    HttpModule,
  ],
  providers: [GithubSsoService],
  controllers: [GithubSsoController],
})
export class GithubSsoModule {}
