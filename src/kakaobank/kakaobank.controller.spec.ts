import { Test, TestingModule } from '@nestjs/testing';
import { KakaobankController } from './kakaobank.controller';

describe('KakaobankController', () => {
  let controller: KakaobankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KakaobankController],
    }).compile();

    controller = module.get<KakaobankController>(KakaobankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
