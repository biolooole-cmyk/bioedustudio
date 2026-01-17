const DATA = [
    {
        title: 'Фотороботи здобувачів освіти',
        description: 'Добірка фоторобіт здобувачів освіти, створених у межах навчальних, проєктних та творчих ініціатив з біології та екології. Роботи відображають спостереження за природою, екологічні мотиви та формування дбайливого ставлення до довкілля.',
        url: 'https://drive.google.com/drive/folders/1LLTnEj9bYYrkQ_GFhh4P_kFttF-lzvLs?usp=drive_link',
        cover: 'images/Фото.jpeg'
    },
    {
        title: 'Колажі та конкурсні роботи здобувачів освіти',
        description: 'Добірка колажів і конкурсних робіт здобувачів освіти, створених у межах освітніх, екологічних і STEM-проєктів. Матеріали поєднують творчий підхід, візуальне мислення та навчальний зміст.',
        url: 'https://drive.google.com/drive/folders/1oZOhOKWN7B-GMHxUs0fdkCjy40Qfvx67?usp=drive_link',
        cover: 'images/Колажі.jpeg'
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
    card.setAttribute('data-type', 'visual');
    
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