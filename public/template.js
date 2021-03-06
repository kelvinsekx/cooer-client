const TEMPLATE = function ({markup, styles, context, where}) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' ">

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ONstreet</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
        <style>body,*{
            margin:0;padding:0;box-sizing: border-box;font-family: 'Raleway', sans-serif;
        }
        </style>
        ${styles}
    </head>
    <body>
        <div id="___root">${markup}</div>
        <script>
            window.APP = {
                ${where}: ${context}
            }
        </script>
        <script
            type="text/javascript"
            src="/dist/bundle.js"
        >
        </script>
    </body>
    </html>
    `
};

export default TEMPLATE;