'use strict';

const headerEl = document.querySelector('.header');
const nav = document.querySelector('.nav');
const sectionHeroEl = document.querySelector('.section-hero');

//////////////////////////////////////////////////
// mobile navigation

const btnNavEl = document.querySelector('.btn-mobile-nav');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//////////////////////////////////////////////////
// Sticky Navigation 
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[ 0 ];
  if (!ent.isIntersecting) {
    headerEl.classList.add('sticky');
  } else {
    headerEl.classList.remove('sticky');
  }
},
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-75px',
  });
obs.observe(sectionHeroEl);

// get year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////
// Smooth scrolling animation 
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (link.classList.contains('nav_link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});


//////////////////////////////////////////////////
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    // Remove background color from all links
    document.querySelectorAll('.nav_link').forEach(function (link) {
      link.classList.remove('active');
    });

    // Add background color to the clicked link
    link.classList.add('active');
  });
});
