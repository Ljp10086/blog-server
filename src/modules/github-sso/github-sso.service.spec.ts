import { Test, TestingModule } from '@nestjs/testing';
import { GithubSsoService } from './github-sso.service';

describe('GithubSsoService', () => {
  let service: GithubSsoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubSsoService],
    }).compile();

    service = module.get<GithubSsoService>(GithubSsoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
