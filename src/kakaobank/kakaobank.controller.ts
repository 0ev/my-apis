import { Controller, Get, Query, Res } from '@nestjs/common';

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Copy and Redirect</title>
    <style>
        #copyButton {
            display: none;
        }
    </style>
    <script>
        function copyToClipboard(text) {
            if (!navigator.clipboard) {
                // Fallback for browsers without clipboard API support
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('Text copied. Please manually close this page.');
            } else {
                navigator.clipboard.writeText(text)
                    .then(() => {
                        console.log('Text copied to clipboard');
                        window.location.href = 'kakaotalk://kakaopay/money/to/bank';
                    })
                    .catch(err => {
                        console.error('Error in copying text: ', err);
                        alert('Error copying text. Please manually close this page.');
                    });
            }
        }

        function handleUserInteraction() {
            document.getElementById('copyButton').style.display = 'block';
        }

        window.onload = handleUserInteraction;
    </script>
</head>
<body>
    <button id="copyButton" onclick="copyToClipboard('카카오뱅크 3333195294882')">Click to Copy & Redirect</button>
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
