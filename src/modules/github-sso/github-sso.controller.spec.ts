import { Test, TestingModule } from '@nestjs/testing';
import { GithubSsoController } from './github-sso.controller';

describe('GithubSsoController', () => {
  let controller: GithubSsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubSsoController],
    }).compile();

    controller = module.get<GithubSsoController>(GithubSsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
