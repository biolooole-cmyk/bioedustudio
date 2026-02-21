// js/simulations-search.js
// Реализация поиска по симуляциям (title, description, filename/url).
// Работает на фронтенде, в реальном времени, без сторонних библиотек.

document.addEventListener('DOMContentLoaded', function () {
  // DOM-элементы
  const input = document.getElementById('sim-search');
  const container = document.getElementById('cards-container');
  if (!input || !container) return; // безопасный выход, если структура другая

  // Массив карточек, будет обновляться если содержимое контейнера изменится
  let cards = Array.from(container.querySelectorAll('.card'));

  // Элемент "Ничего не найдено"
  const noResults = document.createElement('p');
  noResults.id = 'no-results';
  noResults.textContent = 'Ничего не найдено';
  noResults.style.display = 'none';
  noResults.style.marginTop = '1rem';
  noResults.setAttribute('aria-live', 'polite');
  container.parentNode.insertBefore(noResults, container.nextSibling);

  // Нормализация строки: приводим к нижнему регистру, убираем лишние пробелы
  function normalize(str) {
    return (str || '').toString().trim().toLowerCase();
  }

  // Получаем имя файла из URL (последняя часть пути) для поиска по имени
  function extractFilename(url) {
    try {
      // Если это относительный путь, создаём объект URL относительно текущей страницы
      const u = new URL(url, window.location.href);
      const parts = u.pathname.split('/').filter(Boolean);
      return parts.length ? parts[parts.length - 1] : u.hostname || url;
    } catch (e) {
      return url.split('/').pop() || url;
    }
  }

  // Обновить массив карточек (на случай, если скрипт, рендерящий карточки, сделал это после нас)
  function updateCardsList() {
    cards = Array.from(container.querySelectorAll('.card'));
  }

  // Проверка — соответствует ли карточка всем поисковым терминам
  function cardMatches(card, terms) {
    const title = card.querySelector('.card-title')?.textContent || '';
    const desc = card.querySelector('.card-description')?.textContent || '';
    const link = card.querySelector('.card-link')?.getAttribute('href') || '';
    const filename = extractFilename(link || '');

    const haystack = normalize([title, desc, filename, link].join(' '));

    return terms.every(function (term) {
      return haystack.indexOf(term) !== -1;
    });
  }

  // Основная функция фильтрации
  function filterCards() {
    const raw = normalize(input.value);
    const terms = raw.length ? raw.split(/\s+/).filter(Boolean) : [];

    let visibleCount = 0;

    cards.forEach(function (card) {
      const shouldShow = terms.length === 0 || cardMatches(card, terms);
      card.style.display = shouldShow ? '' : 'none';
      if (shouldShow) visibleCount += 1;
    });

    noResults.style.display = visibleCount === 0 ? '' : 'none';
  }

  // Слушаем ввод пользователя в реальном времени
  input.addEventListener('input', filterCards);

  // Наблюдатель за изменением контейнера: если карточки будут отрисованы позже, обновим список
  const mo = new MutationObserver(function (mutationsList) {
    let changed = false;
    for (const m of mutationsList) {
      if (m.type === 'childList' && (m.addedNodes.length || m.removedNodes.length)) {
        changed = true;
        break;
      }
    }
    if (changed) {
      updateCardsList();
      filterCards();
    }
  });

  mo.observe(container, { childList: true, subtree: false });

  // Фильтруем сразу, если в поле уже есть значение
  updateCardsList();
  if (input.value && input.value.trim()) filterCards();
});
