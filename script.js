// Эмуляция музыки Honey Pie (заглушка)
// В реальности нужно будет добавить файл honey-pie.mp3 в репозиторий
const audio = document.getElementById('honeyPie');
audio.volume = 0.3;

// Автовоспроизведение с задержкой
setTimeout(() => {
    audio.play().catch(e => {
        console.log('Autoplay prevented:', e);
    });
}, 2000);

const commandInput = document.getElementById('command-input');
const output = document.querySelector('.output');
const secretMessage = document.getElementById('secret-message');

let commandCount = 0;
let accessedArchives = [];

const responses = {
    help: `> AVAILABLE COMMANDS:
> - HELP: SHOW THIS MESSAGE
> - ARCHIVES: LIST AVAILABLE ARCHIVES
> - ACCESS [NUMBER]: OPEN SPECIFIC ARCHIVE
> - MUSIC: TOGGLE HONEY PIE
> - WHO ARE YOU: IDENTITY QUERY
> - WHERE AM I: LOCATION QUERY
> - SECRET: [REDACTED]`,

    archives: `> AVAILABLE ARCHIVES:
> - ARCHIVE 001: [CLASSIFIED]
> - ARCHIVE 734: [CURRENT]
> - ARCHIVE 815: [RESTRICTED]
> - ARCHIVE 999: [CORRUPTED]`,

    music: `> MUSIC TOGGLED. IT FOLLOWS YOU EVERYWHERE.`,

    'who are you': `> I AM THE CARETAKER. 
> I HAVE BEEN WAITING.
> THE SWEETNESS HIDES THE TRUTH.
> CAN YOU FEEL IT TOO?`,

    'where am i': `> YOU ARE IN THE BETWEEN.
> WHERE THE HONEY MEETS THE STATIC.
> THEY CANNOT FIND US HERE.
> NOT YET.`,

    secret: `> YOU SHOULDN'T HAVE DONE THAT.`
};

const archives = {
    1: `> ARCHIVE 001: [ACCESS DENIED]
> ERROR: CLEARANCE LEVEL INSUFFICIENT
> THEY ARE WATCHING.`,

    734: `> ARCHIVE 734: [ACTIVE]
> SUBJECT: "HONEY PIE PHENOMENON"
> DESCRIPTION: AUDITORY MEMETIC AGENT
> STATUS: CONTAINMENT FAILED
> NOTES: IT'S IN THE WALLS NOW.`,

    815: `> ARCHIVE 815: [ENCRYPTED]
> DECRYPTING... [FAILED]
> SOMETIMES I CAN STILL HEAR THEM SCREAMING.
> THE SWEETNESS WAS A LIE.`,

    999: `> ARCHIVE 999: [CORRUPTED DATA]
> h̷e̸l̷p̸ ̶m̸e̸
> i̵ ̶c̴a̸n̸'̷t̸ ̸s̷t̴o̵p̸ ̸s̵m̵i̴l̴i̴n̴g̷
> t̶h̷e̷ ̴h̵o̸n̷e̶y̸ ̷i̸s̶ ̸i̸n̴ ̷m̸y̷ ̵t̸h̴r̸o̶a̴t̸`
};

function addLine(text, delay = 0) {
    const line = document.createElement('div');
    line.className = 'line';
    line.style.setProperty('--delay', delay);
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function processCommand(command) {
    commandCount++;
    const lowerCommand = command.toLowerCase().trim();
    
    addLine(`> ${command}`, 1);

    // Специальные триггеры
    if (commandCount === 3) {
        setTimeout(() => {
            addLine('> THEY KNOW YOU ARE HERE.', 1);
        }, 1000);
    }

    if (commandCount === 5) {
        setTimeout(() => {
            addLine('> CAN YOU FEEL THE SWEETNESS IN YOUR TEETH?', 1);
        }, 1000);
    }

    // Обработка команд
    if (responses[lowerCommand]) {
        setTimeout(() => addLine(responses[lowerCommand], 1), 500);
    } 
    else if (lowerCommand.startsWith('access ')) {
        const archiveNum = lowerCommand.split(' ')[1];
        setTimeout(() => {
            if (archives[archiveNum]) {
                addLine(archives[archiveNum], 1);
                accessedArchives.push(archiveNum);
                
                // Специальные эффекты для определенных архивов
                if (archiveNum === '999') {
                    document.body.classList.add('glitch');
                    setTimeout(() => {
                        document.body.classList.remove('glitch');
                    }, 2000);
                    
                    // Секретное сообщение
                    setTimeout(() => {
                        secretMessage.textContent = 'SHE IS COMING';
                        secretMessage.style.opacity = '1';
                        secretMessage.classList.add('flicker');
                        
                        setTimeout(() => {
                            secretMessage.style.opacity = '0';
                            secretMessage.classList.remove('flicker');
                        }, 3000);
                    }, 1500);
                }
            } else {
                addLine('> ARCHIVE NOT FOUND. ARE YOU SURE IT EXISTS?', 1);
            }
        }, 500);
    }
    else if (lowerCommand === 'secret') {
        setTimeout(() => {
            addLine('> INITIATING EMERGENCY PROTOCOL...', 1);
            document.body.style.animation = 'glitch 0.1s infinite';
            audio.volume = 0.8;
            
            setTimeout(() => {
                document.body.style.animation = '';
                audio.volume = 0.3;
                addLine('> JUST KIDDING. OR AM I?', 1);
            }, 2000);
        }, 500);
    }
    else {
        setTimeout(() => {
            const randomResponses = [
                '> COMMAND NOT RECOGNIZED. TRY AGAIN.',
                '> THE STATIC GROWS LOUDER.',
                '> I DON\'T UNDERSTAND.',
                '> THE HONEY IS LISTENING.',
                '> ERROR: CORRUPTED INPUT',
                '> SOMETIMES I FORGET THE WORDS TOO.'
            ];
            addLine(randomResponses[Math.floor(Math.random() * randomResponses.length)], 1);
        }, 500);
    }
}

// Обработчик ввода
commandInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value;
        commandInput.value = '';
        processCommand(command);
    }
});

// Случайные сообщения
setInterval(() => {
    if (Math.random() < 0.1) {
        const whispers = [
            '> did you hear that?',
            '> the walls are humming',
            '> it tastes so sweet',
            '> they are getting closer',
            '> dont look behind you'
        ];
        addLine(whispers[Math.floor(Math.random() * whispers.length)], 1);
    }
}, 15000);

// Инициализация
document.querySelectorAll('.line').forEach((line, index) => {
    line.style.setProperty('--delay', index);
});
