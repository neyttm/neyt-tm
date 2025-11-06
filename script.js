<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Honey Pie Archives</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- YouTube видео как фоновая музыка -->
    <div id="youtube-player" style="position: fixed; top: -100px; left: -100px; width: 10px; height: 10px; opacity: 0.01; pointer-events: none;"></div>

    <div class="terminal">
        <div class="header">
            <span class="blink">█</span> THE HONEY PIE ARCHIVES - ACCESS LEVEL: [REDACTED]
        </div>
        
        <div class="output">
            <div class="line">> INITIALIZING SYSTEM... [OK]</div>
            <div class="line">> LOADING ARCHIVE 734... [OK]</div>
            <div class="line">> WELCOME, USER.</div>
            <div class="line">> THEY TOLD ME YOU WOULD COME.</div>
            <div class="line">> CAN YOU HEAR THE MUSIC TOO?</div>
            <div class="line">> IT NEVER STOPS PLAYING.</div>
            <div class="line">> TYPE 'HELP' FOR AVAILABLE COMMANDS.</div>
        </div>

        <div class="input-line">
            <span class="prompt">></span>
            <input type="text" id="command-input" autocomplete="off" autofocus>
        </div>
    </div>

    <div id="secret-message" class="secret-message"></div>

    <!-- YouTube IFrame API -->
    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="script.js"></script>
</body>
</html>
