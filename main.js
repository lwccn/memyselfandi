document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  const railLinks = document.querySelectorAll('aside a[href^="#"]');

  const setActive = (id) => {
    [...navLinks, ...railLinks].forEach((link) => {
      const target = link.getAttribute('href');
      if (target === `#${id}`) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActive(id);
          entry.target.classList.add('section-visible');
        }
      });
    },
    {
      root: document.querySelector('.snap-container'),
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

