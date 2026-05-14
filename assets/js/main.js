const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.nav-link');
const revealElements = document.querySelectorAll('[data-reveal]');
const sections = document.querySelectorAll('section[id], footer[id]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  {
    rootMargin: "-120px 0px -40% 0px"
  }
);

sections.forEach((section) => navObserver.observe(section));