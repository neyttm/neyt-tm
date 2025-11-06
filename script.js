// Заранее подготовленные "реакции" Фредди на ингредиенты
const reactions = {
    pepperoni: {
        text: "Отлично! Пепперони... Хм, а где же я возьму салями? А, знаю! *достаёт из своего механизма что-то похожее на салями* Ой, это же оказался кусок гидравлического шланга! Ну и ладно, сойдёт!",
        image: "https://i.imgur.com/hydraulic_hose.png" // Заглушка
    },
    mushrooms: {
        text: "Грибы! Как мило! *Фредди заглядывает под сцену* О, тут какие-то интересные грибочки выросли... Они немного светятся, но это наверно нормально?",
        image: "https://i.imgur.com/glowing_mushrooms.png"
    },
    pineapple: {
        text: "Ананасы! Спорный выбор, но я уважаю твой вкус! *Фредди пытается почистить ананас когтями* Ой... теперь он больше похож на мочалку...",
        image: "https://i.imgur.com/pineapple_sponge.png"
    },
    cheese: {
        text: "Сыр! Классика! *Фредди пытается натереть сыр, но у него вместо тёрки выдвигается пильный диск* Эмм... сыр теперь в виде опилок. Вкусно же?",
        image: "https://i.imgur.com/cheese_sawdust.png"
    },
    fish: {
        text: "Рыба?! На пиццу?! Ну ладно... *Фредди ныряет под стол и достаёт дохлую рыбину* Я её ещё с прошлой вечеринки припрятал! Пахнет... интересно.",
        image: "https://i.imgur.com/dead_fish.png"
    }
};

let attempts = 0;

function chooseIngredient(ingredient) {
    attempts++;
    const reaction = reactions[ingredient];
    const resultDiv = document.getElementById('result');
    const freddyImg = document.getElementById('freddy-img');
    const pizzaImg = document.getElementById('pizza-img');
    const speechBubble = document.getElementById('speech-bubble');
    
    // Показываем результат
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Фредди пытается добавить ингредиент...</h3>
        <p>${reaction.text}</p>
        <p><em>Пицца выглядит... своеобразно.</em></p>
    `;
    
    // "Ломаем" Фредди
    freddyImg.style.transform = 'rotate(5deg) scale(1.1)';
    pizzaImg.style.transform = 'rotate(-10deg)';
    
    // Меняем речь Фредди
    speechBubble.textContent = getRandomFreddyPhrase();
    
    // Через секунду возвращаем к нормальному состоянию, но с увеличением "поломки"
    setTimeout(() => {
        freddyImg.style.transform = `rotate(${attempts * 2}deg) scale(${1 + attempts * 0.1})`;
        
        // После 3 попыток - Фредди "сбегает"
        if (attempts >= 3) {
            finalEscape();
        }
    }, 1500);
}

function getRandomFreddyPhrase() {
    const phrases = [
        "Ой, кажется, у меня что-то заклинило!",
        "Мои шестерёнки немного протестуют...",
        "Кажется, кулинария - не моё призвание...",
        "Почему все ингредиенты выглядят так странно?",
        "Может, лучше вернуться к пуганию людей?",
        "У меня в механизме застрял кусок сыра!",
        "Пицца пахнет бензином... это нормально?"
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function finalEscape() {
    const freddyImg = document.getElementById('freddy-img');
    const speechBubble = document.getElementById('speech-bubble');
    const resultDiv = document.getElementById('result');
    
    speechBubble.textContent = "Всё, я не могу больше это выносить! Я возвращаюсь к своей настоящей работе!";
    
    // Анимация побега
    freddyImg.classList.add('escape');
    
    // Финальное сообщение
    setTimeout(() => {
        resultDiv.innerHTML = `
            <h2>ФРЕДДИ СБЕЖАЛ!</h2>
            <p>Кажется, карьера пиццей-шефа не для него...</p>
            <p>Но он благодарит вас за попытку помочь!</p>
            <button onclick="location.reload()">Попробовать снова (бесполезно)</button>
        `;
    }, 2500);
}
