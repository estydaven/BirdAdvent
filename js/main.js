// Calendar script

const messages = [
	// 17.12
	["Чтобы самому быть счастливым, иногда очень важно делать чуточку счастливее других😊 Сегодня предлагаю поучаствовать в любой птичьей благотворительности🤗"],
	// 18.12
	["Сделайте любое фото птицы, не важно какое оно будет - важно, что именно эта птица попала к вам в кадр!🥰 Может, вы сфотографируете пролетающую мимо окна стайку дроздов, или деловито копошащуюся в траве серую ворону?😏 <br><br> <p class='popup_subtext'> По желанию вы можете опубликовать своё фото в чатике Ціў-Ціў с хештегом #птичийадвент😇</p>"],
	// 19.12
	["Понаблюдайте за птицами в своем дворе или парке🌳 Какие виды птиц остаются в холодное время года? А какие в это время, наоборот, появляются?🤔"],
	// 20.12
	["Художественных фильмов про птиц (или так или иначе связанных с птицами) не очень много, но все же, они есть💫 Вот небольшой список фильмов, из которых можно выбрать один на сегодняшний вечер:<br><br><div class='popup_list'><div>🎬Мой пингвин (2024)</div><div>🎬Большой год (2011)</div><div>🎬Мой друг мистер Персиваль (2019)</div><div>🎬Расправь крылья (2019)</div><div>🎬Братья ветра (2015)</div><div>🎬История семьи Блум (2020)</div><div>🎬Город глазами кота (2018)</div><div>🎬Мальчик и птица (2024)</div><div>🎬Дикий робот (2024)</div></div>"],
	// 21.12
	["Какая ваша любимая зимняя птица? Придумайте про нее историю😊 <br><br> <p class='popup_subtext'> По желанию вы можете опубликовать свою историю в чатике Ціў-Ціў с хештегом #птичийадвент😇</p>"],
	// 22.12
	["Самое время сходить в прогуляться в парк и покормить птичек👐🦆"],
	// 23.12
	["🌟Порадуйте себя перед праздниками - купите себе какую-нибудь вещь с птичками (например, книгу о птицах, посуду, одежду, ёлочную игрушку или просто милую маленькую мелочь)🌟"],
	// 24.12
	["Иногда нам снятся птичьи сны, или мы просто фантазируем о птицах😴 Устройте конкурс на лучшее птичье имя для вымышленной птицы, которую вы придумаете🤗"],
	// 25.12
	["Вспомните свои интересные встречи с птицами в этом году, какие вам запомнились больше всего?🦩 <br><br> <p class='popup_subtext'> По желанию вы можете опубликовать свои истории в чатике Ціў-Ціў с хештегом #птичийадвент😇</p>"],
	// 26.12
	["Узнайте что-то новое из мира научных исследованиий птиц - возможно, у вас есть свои источники орнитологической информации, которыми вы пользуетесь?😎 Если таких нету, позвольте дать вам несколько вариантов на выбор😊<br><br><div class='popup_list'><a href='https://birdwatch.by/' target='_blank'>✔️birdwatch.by</a><br><a href='https://naked-science.ru/tags/ornitologiya' target='_blank'>✔️naked-science.ru</a><br><a href='https://t.me/idemlesom' target='_blank'>✔️ТГ паблик 'Идём лесом'</a><br><a href='https://academy.allaboutbirds.org/articles/' target='_blank'>✔️academy.allaboutbirds.org</a><br><a href='https://habr.com/ru/search/?target_type=posts&order=relevance&q=[%D0%BF%D1%82%D0%B8%D1%86%D1%8B]' target='_blank'>✔️Статьи на Хабре о птицах</a><br><a href='https://t.me/ornis_updates' target='_blank'>✔️ТГ паблик 'Русский орнитологический журнал'</a><br><a href='https://t.me/scienceandlife' target='_blank'>✔️ТГ паблик 'Наука и жизнь'(поиск по слову Птица)</a></div>"],
	// 27.12
	["Снимите любую птицу на видео, встреченную сегодня🎥 Кто станет героем вашего дня?💥<br><br> <p class='popup_subtext'> По желанию вы можете опубликовать своё видео в чатике Ціў-Ціў с хештегом #птичийадвент😇</p>"],
	// 28.12
	["Понаблюдайте за кормушкой дома или в парке некоторое время, запишите птиц, которые к ней прилетели📔"],
	// 29.12
	["Начните читать любую художественную книгу о птицах📚 Может, у вас есть список отложенных историй? Если нет, то в прикреплённом архиве я подготовила для вас несколько книг - возможно, что-то вы захотите почитать или приобрести себе и в бумажной версии😉"],
	// 30.12
	["Пришло время подвести свои птичьи итоги года🤩 Составьте список птиц, встреченных вами в этом году.❄️✨❄️<br><br> <p class='popup_subtext'> По желанию вы можете опубликовать свой список в чатике Ціў-Ціў с хештегом #птичийадвент😇</p>"],
    // 31.12
	["Вот и Канун Нового года!🥂 Наш адевент почти завершен, да и год тоже🤗 Пожелайте что-то особенное тем, кто разделяет ваше увлечение птицами🌟 А может, вы захотите сказать что-то хорошее коммьюнити чатика Ціў-Ціў?😍"]
];

const calendar = document.querySelector('.calendar');
const calendarList = document.querySelectorAll('.calendar__item');
const currentDate = new Date();

const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');
const popupNumber = document.querySelector('.popup__number');
const popupText = document.querySelector('.popup__text');
const popupBtn = document.querySelector('.popup__link');

function closePopup() {
    popup.classList.add('hidden');
}
popupCloseBtn.addEventListener('click', closePopup);

calendarList.forEach(item => {
	const itemNumber = item.dataset.number;

	if ((currentDate.getDate() - 16) === +itemNumber || (currentDate.getDate() - 16) > +itemNumber) {
		item.classList.remove('used');
	} else {
		item.classList.add('used');
	}
})

calendar.addEventListener('click', (event) => {
	popup.classList.remove('hidden');
	const elemNumber = Number(event.target.dataset.number);

    if (event.target.classList.contains('calendar__item_books')) {
        popupBtn.classList.remove('hidden');
    } else {
        popupBtn.classList.add('hidden');
    }

	if (event.target.classList.contains('used')) {
		closePopup();
	}
	for (let i = 0; i < messages.length; i++) {
		if (elemNumber === i) {
			popupText.innerHTML = messages[i - 1];
			popupNumber.innerText = i;
		}
	}
});

// Background script

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomNum(1, 8);

function setBg() {
    const bgNum = String(randomNum);
    const body = document.body;
	body.style.backgroundImage = `url(images/backgrounds/bg${bgNum}.jpg)`;
}

setBg();

// Audio player
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.audio__icon');
let isPlay = false;
let randomAudio = +getRandomNum(1, 6);
audio.src = `audio/${randomAudio}.mp3`;

function playAudio() {
    // Если аудио не проигрывается, начинаем воспроизведение
    if (!isPlay) {
        // Проверяем, может ли аудио начать воспроизведение
        audio.play().then(() => {
            isPlay = true;
            playBtn.classList.remove('pause');
        }).catch(err => {
            console.error("Ошибка при воспроизведении аудио:", err);
        });
    } else {
        // Если аудио уже играет, ставим его на паузу
        audio.pause();
        isPlay = false;
        playBtn.classList.add('pause');
    }
}
playBtn.addEventListener('click', playAudio);

// Change text bird
const littleBird = document.querySelector('.bird_second');
const textBird = document.querySelector('.bird-text');

function changeTextBird() {
    littleBird.classList.add('active');
    textBird.innerHTML = 'Привет!';
    textBird.style.right = '-65px';
}
littleBird.addEventListener('mouseenter', changeTextBird);
littleBird.addEventListener('click', changeTextBird);