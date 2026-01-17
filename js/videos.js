const DATA = [
    {
        title: 'Інвазійні види Дніпропетровщини',
        description: 'Відео розкриває проблему інвазійних видів, нехарактерних для регіону, та їхній вплив на місцеві екосистеми. Акцент зроблено на загрозах для ендемічних видів і біорізноманіття.',
        url: 'https://drive.google.com/file/d/1NCF4GYihml1EPiZXolDGPAkb79DwbSUy/view',
        cover: 'images/Інвазійні види Дніпропетровщини.jpeg'
    },
    {
        title: 'Тютюнопаління. Чи варто починати?',
        description: 'Профілактичне мотиваційне відео, що спонукає замислитися над наслідками тютюнопаління для здоров\'я людини та її майбутнього.',
        url: 'https://drive.google.com/file/d/14eojntni9IT_MJW5nJTW887C51o7pEW_/view',
        cover: 'images/Тютюнопаління. Чи варто починати.jpeg'
    },
    {
        title: 'Ти не один! Що робити коли стикаєшся з насильством',
        description: 'Соціально важливе відео, спрямоване на профілактику насильства та формування навичок безпечної поведінки й звернення по допомогу.',
        url: 'https://drive.google.com/file/d/1HfRyi6Lpf6FaFPl4H8qpCp-I2BM7Ux6T/view',
        cover: 'images/Ти не один! Що робити коли стикаєшся з насильством.jpeg'
    },
    {
        title: 'Дім, що дихає розумом. Енергоефективність у дії',
        description: 'Відео демонструє приклади енергоефективних рішень і технологій, які можна впроваджувати у повсякденному житті для збереження ресурсів.',
        url: 'https://drive.google.com/file/d/1xf2viz_BVpRBDTDMupgbCN-WWEwwdRGj/view',
        cover: 'images/Дім, що дихає розумом. Енергоефективність у дії.jpeg'
    },
    {
        title: 'Надія для пташки',
        description: 'Агітаційне відео-пісня, присвячене захисту зимуючих птахів та формуванню дбайливого ставлення до природи.',
        url: 'https://drive.google.com/file/d/11geUfN9ivHhwuOFb3on6s2poYqnwasJ0/view',
        cover: 'images/Надія для пташки.jpeg'
    },
    {
        title: 'Хто хоче стати гуру здорового харчування?',
        description: 'Інтерактивне відео у форматі вебгри, яке допомагає перевірити знання про раціональне та здорове харчування.',
        url: 'https://drive.google.com/file/d/17KU6RugXMO1srhQhTx2naHLbZPZbEj6L/view',
        cover: 'images/Хто хоче стати гуру здорового харчування.jpeg'
    },
    {
        title: 'Квітучий Кривий Ріг',
        description: 'Надихаюче відео, що демонструє красу квітучого міста Кривого Рогу та формує естетичне сприйняття довкілля.',
        url: 'https://drive.google.com/file/d/1VuTh5y0QP26aVUe6Xkt5d2yJRHF1OMCL/view',
        cover: 'images/Квітучий Кривий Ріг.jpeg'
    },
    {
        title: 'Лиш крок...',
        description: 'Соціальне агітаційне відео, спрямоване на підвищення рівня безпеки пішоходів і усвідомлення відповідальності на дорозі.',
        url: 'https://drive.google.com/file/d/1JCm2Qf6jQVPWSroojaVKAkj9JF1D-J2u/view?usp=drive_link',
        cover: 'images/Лиш крок....jpeg'
    },
    {
        title: 'Годівничку ти змайструй...',
        description: 'Відео-вірш із закликом до виготовлення годівничок і турботи про зимуючих птахів.',
        url: 'https://drive.google.com/file/d/199TQ5YWfeZB4aQW6mXQfqQbeQp0udGHp/view',
        cover: 'images/Годівничку ти змайструй....jpeg'
    },
    {
        title: 'Шкода тютюнопаління',
        description: 'Профілактичне відео, яке розкриває негативний вплив тютюнопаління на здоров\'я людини.',
        url: 'https://drive.google.com/file/d/1IcdY9gO79o9nqvGyGsttfoHxMruu_FsQ/view',
        cover: 'images/Шкода тютюнопаління.jpeg'
    },
    {
        title: 'Весняне диво природи. Первоцвіти Криворіжжя',
        description: 'Пізнавальне відео про весняні первоцвіти Криворіжжя та необхідність їх збереження.',
        url: 'https://drive.google.com/file/d/1z9wk11yZoh6fSFLOSTlpPlnyPO2rU0kt/view',
        cover: 'images/Весняне диво природи. Первоцвіти Криворіжжя.jpeg'
    },
    {
        title: 'Голоси весни. Збережемо первоцвіти Дніпропетровщини',
        description: 'Агітаційне відео, у якому представлено первоцвіти Дніпропетровщини та акцентовано увагу на їх охороні.',
        url: 'https://drive.google.com/file/d/1J5IWG5gW7CCwQr4udq7g4J8DwTShaSaz/view',
        cover: 'images/Голоси весни. Збережемо первоцвіти Дніпропетровщини.jpeg'
    },
    {
        title: 'Символ миру під загрозою! Захисти лелек сьогодні!',
        description: 'Відео, спрямоване на захист популяції лелек та формування екологічної свідомості.',
        url: 'https://drive.google.com/file/d/1Y1mDilf0snwwGSY02Pj4iznvZ81AdqkI/view',
        cover: 'images/Символ миру під загрозою! Захисти лелек сьогодні!.jpeg'
    },
    {
        title: 'Земля... Майбутнє в наших руках...',
        description: 'Мотиваційне відео до Тижня Землі, що закликає замислитися над відповідальністю людини за майбутнє планети.',
        url: 'https://drive.google.com/file/d/1h6_atcdAl-c69fjvJIAvSOlptKuIa5zk/view',
        cover: 'images/Земля... Майбутнє в наших руках....jpeg'
    },
    {
        title: 'Енергоефективні технології. Наш шлях до сталого майбутнього',
        description: 'Відео про сучасні енергоефективні технології та їх роль у формуванні сталого розвитку.',
        url: 'https://drive.google.com/file/d/1Xzuycst1uepbTMGqliQvRsykx9_g9rT8/view',
        cover: 'images/Енергоефективні технології. Наш шлях до сталого майбутнього.jpeg'
    },
    {
        title: 'Горобець хатній. Роль у природі та важливість збереження',
        description: 'Пізнавальне відео про роль хатнього горобця в екосистемах і необхідність його збереження.',
        url: 'https://drive.google.com/file/d/1m8qGNezjpEWYLPmoUiBMFhrEXruE8SIQ/view',
        cover: 'images/Горобець хатній. Роль у природі та важливість збереження.jpeg'
    },
    {
        title: 'Сміх та лапи',
        description: 'Легке та позитивне відео про домашніх улюбленців, яке формує емпатію та гуманне ставлення до тварин.',
        url: 'https://drive.google.com/file/d/1Okb7iGNJRHe0P6_0ndd7IMFfOuZH0dPd/view',
        cover: 'images/Сміх та лапи.jpeg'
    },
    {
        title: 'Здоров\'я дитини. Здорове харчування',
        description: 'Навчальна вебгра для перевірки знань про раціональне харчування дітей.',
        url: 'https://drive.google.com/file/d/1WcD9n-NopDvdWDA0x_4ygFKG1COeSFsC/view',
        cover: 'images/Здоров\'я дитини. Здорове харчування.jpeg'
    },
    {
        title: 'Весняне диво природи',
        description: 'Відео про весняні зміни в природі та різноманіття первоцвітів, що з\'являються після зими.',
        url: 'https://drive.google.com/file/d/1GH1WD-zMiHsuT3_D-4k3Wxns8KMJhGxa/view',
        cover: 'images/Весняне диво природи.jpeg'
    }
];

function getYouTubeThumbnail(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/.*[?&]v=([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
        }
    }
    return null;
}

function getCoverImage(item) {
    if (item.cover) {
        return item.cover;
    }
    
    const youtubeThumb = getYouTubeThumbnail(item.url);
    if (youtubeThumb) {
        return youtubeThumb;
    }
    
    return null;
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-type', 'video');
    
    const link = document.createElement('a');
    link.className = 'card-link';
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'card-image';
    
    const coverImage = getCoverImage(item);
    if (coverImage) {
        const img = document.createElement('img');
        img.src = coverImage;
        img.alt = item.title;
        img.loading = 'lazy';
        img.onerror = function() {
            this.style.display = 'none';
            imageDiv.classList.add('placeholder');
        };
        imageDiv.appendChild(img);
    } else {
        imageDiv.classList.add('placeholder');
    }
    
    link.appendChild(imageDiv);
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'card-content';
    
    const titleElement = document.createElement('h3');
    titleElement.className = 'card-title';
    titleElement.textContent = item.title;
    contentDiv.appendChild(titleElement);
    
    if (item.description) {
        const descElement = document.createElement('p');
        descElement.className = 'card-description';
        descElement.textContent = item.description;
        contentDiv.appendChild(descElement);
    }
    
    link.appendChild(contentDiv);
    card.appendChild(link);
    
    return card;
}

function renderCards() {
    const container = document.getElementById('cards-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (DATA.length === 0) {
        container.innerHTML = '<div class="loading">Немає матеріалів</div>';
        return;
    }
    
    DATA.forEach((item, index) => {
        const card = createCard(item);
        if (card) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 50);
            container.appendChild(card);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderCards);
} else {
    renderCards();
}