import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller('text')
export class TextController {
  constructor() {}

  @Get()
  redirect(
    @Res() res,
    @Query('phone') phone: string,
    @Query('body') body: string,
  ) {
    return res.redirect(`sms:${phone}&body=${body}`);
  }
}
