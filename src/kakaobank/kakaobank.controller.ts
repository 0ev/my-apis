import { Controller, Get, Query, Res } from '@nestjs/common';

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Copy and Redirect</title>
    <script>
        function copyAndRedirect() {
            const text = "카카오뱅크 3333195294882";
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Text copied to clipboard');
                    window.location.href = 'kakaotalk://kakaopay/money/to/bank';
                })
                .catch(err => {
                    console.error('Error in copying text: ', err);
                });
        }
    </script>
</head>
<body onload="copyAndRedirect()">
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
