import { Controller, Get, Query, Res } from '@nestjs/common';

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Copy and Redirect</title>
    <script>
        async function copyAndRedirect() {
            try {
                // Check if we have permission to use the clipboard
                const permissionResult = await navigator.permissions.query({ name: "clipboard-write" });
                
                if (permissionResult.state === "granted" || permissionResult.state === "prompt") {
                    // Copy text to the clipboard
                    await navigator.clipboard.writeText("카카오뱅크 3333195294882");
                    console.log('Text copied to clipboard');
                } else {
                    console.error('Clipboard permission denied');
                    return; // Exit the function if permission is denied
                }
            } catch (error) {
                console.error('Error in copying text: ', error);
                return; // Exit the function in case of an error
            }

            // Redirect after copying
            window.location.href = 'kakaotalk://kakaopay/money/to/bank';
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
