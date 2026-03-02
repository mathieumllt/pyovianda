/* PYOV — main.js — jQuery + Parallax + Filters */

$(function () {

  // ── CUSTOM CURSOR ──
  const $cursor = $('#cursor');
  const $trail = $('#cursorTrail');

  $(document).on('mousemove', function (e) {
    $cursor.css({ left: e.clientX, top: e.clientY });
    setTimeout(function () {
      $trail.css({ left: e.clientX, top: e.clientY });
    }, 80);
  });

  $('a, button, .grid-item, .filter-btn').on('mouseenter', function () {
    $cursor.css({ transform: 'translate(-50%, -50%) scale(2)' });
    $trail.css({ transform: 'translate(-50%, -50%) scale(1.5)', opacity: 0.2 });
  }).on('mouseleave', function () {
    $cursor.css({ transform: 'translate(-50%, -50%) scale(1)' });
    $trail.css({ transform: 'translate(-50%, -50%) scale(1)', opacity: 0.5 });
  });


  // ── PARALLAX ──
  $(window).on('scroll', function () {
    const scrollY = $(window).scrollTop();

    $('.parallax-bg').each(function () {
      const speed = parseFloat($(this).data('speed')) || 0.3;
      $(this).css('transform', 'translateY(' + (scrollY * speed) + 'px)');
    });
  });


  // ── SCROLL REVEAL ──
  function checkReveal() {
    const wH = $(window).height();
    $('.reveal').each(function () {
      const top = $(this)[0].getBoundingClientRect().top;
      if (top < wH - 60) {
        $(this).addClass('visible');
      }
    });
  }

  // Add reveal class to target elements
  $('.grid-item, .about-grid, .contact-form, .section-header, .stat').addClass('reveal');

  $(window).on('scroll', checkReveal);
  checkReveal();


  // ── GALLERY FILTER ──
  $('.filter-btn').on('click', function () {
    const filter = $(this).data('filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.grid-item').fadeIn(300);
    } else {
      $('.grid-item').each(function () {
        if ($(this).hasClass(filter)) {
          $(this).fadeIn(300);
        } else {
          $(this).fadeOut(200);
        }
      });
    }
  });


  // ── LIGHTBOX ──
  $('.grid-item').on('click', function () {
    const $art = $(this).find('.art-svg').clone();
    const title = $(this).find('.art-title').text();
    const meta = $(this).find('.art-meta').html();

    $('#lightboxArt').html($art);
    $('#lightboxInfo').html(
      '<div class="art-title" style="margin-top:20px;font-size:16px;">' + title + '</div>' +
      '<div class="art-meta" style="margin-top:8px;">' + meta + '</div>'
    );

    $('#lightbox').addClass('open').hide().fadeIn(200);
    $('body').css('overflow', 'hidden');
  });

  $('#lightbox .lightbox-close, #lightbox .lightbox-overlay').on('click', function () {
    $('#lightbox').fadeOut(200, function () {
      $(this).removeClass('open');
    });
    $('body').css('overflow', '');
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('#lightbox').fadeOut(200, function () {
        $(this).removeClass('open');
      });
      $('body').css('overflow', '');
    }
  });


  // ── SMOOTH SCROLL NAV ──
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if ($(target).length) {
      $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 600, 'swing');
    }
  });


  // ── NAV SCROLL EFFECT ──
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $('.nav').css('border-bottom-color', 'rgba(255,45,45,0.3)');
    } else {
      $('.nav').css('border-bottom-color', 'rgba(255,45,45,0.15)');
    }
  });


  // ── SUBTLE HERO MOUSE PARALLAX ──
  $(document).on('mousemove', function (e) {
    const cx = $(window).width() / 2;
    const cy = $(window).height() / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    $('.hero-title').css('transform', 'translate(' + (dx * 6) + 'px, ' + (dy * 4) + 'px)');
    $('.glitch-grid').css('transform', 'translate(' + (dx * 12) + 'px, ' + (dy * 8) + 'px)');
  });

});
