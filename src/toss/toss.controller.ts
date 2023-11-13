import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller('toss')
export class TossController {
  @Get()
  redirect(
    @Res() res,
    @Query('amount') amount: string,
    @Query('bankCode') bankCode: string,
    @Query('accountNo') accountNo: string,
  ) {
    return res.redirect(
      `supertoss://send?amount=${amount}&title=송금&bankCode=${bankCode}&accountNo=${accountNo}`,
    );
  }
}
