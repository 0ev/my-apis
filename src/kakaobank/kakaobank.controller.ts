import { Controller, Get, Query, Res } from '@nestjs/common';

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=kakaotalk://kakaopay/money/to/bank">
    <title>Redirect</title>
    <script>
        function copyText() {
            const text = "카카오뱅크 3333195294882";
            navigator.clipboard.writeText(text).then(() => {
                console.log('Text copied to clipboard');
            }).catch(err => {
                console.error('Error in copying text: ', err);
            });
        }
    </script>
</head>
<body onload="copyText()">
</body>
</html>
`;

@Controller('kakaobank')
export class KakaobankController {
  @Get()
  redirect() {
    return html;
  }
}
