document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const artifacts = document.querySelectorAll('.artifact-item');

  if (!filterButtons.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active pill state
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      artifacts.forEach((item) => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
