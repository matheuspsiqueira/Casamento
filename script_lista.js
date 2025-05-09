window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('.card-title');

      // Verifica se o título tem mais de duas linhas
      const lineHeight = parseFloat(getComputedStyle(title).lineHeight);
      const lines = title.scrollHeight / lineHeight;

      if (lines > 2) {
        card.classList.add('expandable');
      }
    });
  });