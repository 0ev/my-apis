import { Test, TestingModule } from '@nestjs/testing';
import { KakaobankService } from './kakaobank.service';

describe('KakaobankService', () => {
  let service: KakaobankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KakaobankService],
    }).compile();

    service = module.get<KakaobankService>(KakaobankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
