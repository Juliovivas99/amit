(function () {
  'use strict';

  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  var progressBar = document.querySelector('.nav-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var doc = document.documentElement;
      var pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      progressBar.style.width = Math.min(100, pct) + '%';
    }, { passive: true });
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealEls = document.querySelectorAll('.section.reveal, .hub-card, .dashboard-card');
    if (revealEls.length && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    }
  } else {
    document.querySelectorAll('.section.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  var sidebarLinks = document.querySelectorAll('.sidebar-nav a, .mobile-section-nav a');
  var sections = document.querySelectorAll('.page-content .section[id], main .section[id]');

  if (sidebarLinks.length && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          sidebarLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  var resourceBars = document.querySelectorAll('.resource-row .bar-fill');
  if (resourceBars.length && 'IntersectionObserver' in window) {
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var w = entry.target.getAttribute('data-width');
          if (w) entry.target.style.width = w;
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    resourceBars.forEach(function (bar) {
      bar.style.width = '0';
      barObserver.observe(bar);
    });
  }
})();
