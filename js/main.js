"use strict";

const navigationLinks = document.querySelectorAll('.nav-list a');
const sections = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver((entries) => {
  const visibleSection = entries.find((entry) => entry.isIntersecting);

  if (!visibleSection) return;

  navigationLinks.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${visibleSection.target.id}`;
    link.setAttribute('aria-current', String(isCurrent));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));
