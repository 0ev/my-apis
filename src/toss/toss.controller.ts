import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller('toss')
export class TossController {
  @Get()
  redirect(
    @Res() res,
    @Query('bankCode') bankCode: string,
    @Query('accountNo') accountNo: string,
  ) {
    return res.redirect(
      `supertoss://send?title=송금&bankCode=${bankCode}&accountNo=${accountNo}`,
    );
  }
}
