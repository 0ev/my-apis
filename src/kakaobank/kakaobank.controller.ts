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
            background-color: yellow;
            color: black;
            font-size: 20px;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            height: 100px; /* Adjust the height as needed */
            box-sizing: border-box;
        }

        body, html {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
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
    <button id="copyButton" onclick="copyToClipboard('카카오뱅크 3333195294882')">kakaopay로 가기</button>
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
