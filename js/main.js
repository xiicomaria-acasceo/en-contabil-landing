(function () {
  "use strict";
  var cfg = window.ENC_CONFIG || {};

  var ICONS = {
    mei: "M12 2 2 7v2h20V7L12 2zm-8 9v8h4v-6h8v6h4v-8H4z",
    simples: "M4 4h16v16H4z M8 8h8v2H8z M8 12h8v2H8z M8 16h5v2H8z",
    das: "M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0z M12 7v5l3 3",
    ir: "M6 3h9l3 3v15H6z M9 12h6 M9 16h6",
    gestao: "M3 17l6-6 4 4 8-8 M13 4h8v8",
  };

  function iconSvg(key) {
    var path = ICONS[key] || ICONS.gestao;
    return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + path + '"/></svg>';
  }

  function waLinkFor(number, message) {
    if (number) {
      return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    }
    return cfg.brand && cfg.brand.instagramUrl ? cfg.brand.instagramUrl : "#contato";
  }

  function waLink(message) {
    return waLinkFor(cfg.contact && cfg.contact.whatsapp, message);
  }

  function renderCopy() {
    var setText = function (id, value) {
      var el = document.getElementById(id);
      if (el && value) el.textContent = value;
    };
    var setHtml = function (id, value) {
      var el = document.getElementById(id);
      if (el && value) el.innerHTML = value;
    };

    if (cfg.hero) {
      setText("heroEyebrow", cfg.hero.eyebrow);
      setHtml("heroHeadline", cfg.hero.headline);
      setText("heroSubheadline", cfg.hero.subheadline);
    }
    if (cfg.brand) {
      setText("heroCoverage", cfg.brand.coverage);
      setText("footerTagline", cfg.brand.tagline);
    }
    if (cfg.about) {
      setText("aboutEyebrow", cfg.about.eyebrow);
      setText("aboutHeading", cfg.about.heading);
      setText("aboutLede", cfg.about.lede);
      setText("aboutBody", cfg.about.body);
    }
    if (cfg.audience) {
      setText("audienceEyebrow", cfg.audience.eyebrow);
      setText("audienceHeading", cfg.audience.heading);
      setText("audienceDescription", cfg.audience.description);
    }
    if (cfg.ctaBanner) {
      setText("ctaBannerHeading", cfg.ctaBanner.heading);
      setText("ctaBannerSubheading", cfg.ctaBanner.subheading);
    }
  }

  function renderTeam() {
    var grid = document.getElementById("teamGrid");
    if (!grid || !cfg.team || !cfg.team.length) return;
    grid.innerHTML = cfg.team
      .map(function (person) {
        var msg = cfg.whatsappMessages && cfg.whatsappMessages.team
          ? cfg.whatsappMessages.team(person.name)
          : "Olá, " + person.name + "!";
        return (
          '<div class="team-card reveal">' +
            "<h3>" + person.name + "</h3>" +
            (person.role ? "<p>" + person.role + "</p>" : "") +
            '<a class="btn btn--primary btn--block" href="' + waLinkFor(person.whatsapp, msg) + '" target="_blank" rel="noopener">Falar com ' + person.name.split(" ")[0] + " no WhatsApp</a>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderServices() {
    var grid = document.getElementById("servicesGrid");
    if (!grid || !cfg.services) return;
    grid.innerHTML = cfg.services
      .map(function (s) {
        var msg = cfg.whatsappMessages && cfg.whatsappMessages.service
          ? cfg.whatsappMessages.service(s.name)
          : s.name;
        return (
          '<article class="service-card reveal">' +
            '<div class="service-card__icon">' + iconSvg(s.icon) + "</div>" +
            "<h3>" + s.name + "</h3>" +
            "<p>" + s.description + "</p>" +
            '<p class="service-card__benefit">' + s.benefit + "</p>" +
            '<a class="service-card__cta" href="' + waLink(msg) + '" target="_blank" rel="noopener" data-cta="service">Falar sobre isso</a>' +
          "</article>"
        );
      })
      .join("");
  }

  function renderDifferentiators() {
    var grid = document.getElementById("diffGrid");
    if (!grid || !cfg.differentiators) return;
    grid.innerHTML = cfg.differentiators
      .map(function (d) {
        return (
          '<div class="diff-card reveal"><h3>' + d.title + "</h3><p>" + d.description + "</p></div>"
        );
      })
      .join("");
  }

  function renderFaq() {
    var list = document.getElementById("faqList");
    if (!list || !cfg.faq) return;
    list.innerHTML = cfg.faq
      .map(function (item) {
        return (
          '<details class="faq-item reveal"><summary>' + item.q + "</summary><p>" + item.a + "</p></details>"
        );
      })
      .join("");
  }

  function renderContactExtras() {
    var contactList = document.getElementById("contactList");
    var note = document.getElementById("whatsappFallbackNote");
    if (!cfg.contact) return;

    var extras = [];
    if (cfg.contact.phone) extras.push("Telefone — " + cfg.contact.phone);
    if (cfg.contact.email) extras.push('E-mail — <a href="mailto:' + cfg.contact.email + '">' + cfg.contact.email + "</a>");
    if (cfg.contact.address) extras.push("Endereço — " + cfg.contact.address);
    if (cfg.contact.hours) extras.push("Horário — " + cfg.contact.hours);

    if (extras.length && contactList) {
      extras.forEach(function (html) {
        var li = document.createElement("li");
        li.innerHTML = html;
        contactList.appendChild(li);
      });
    }

    if (cfg.contact.whatsapp && note) {
      note.remove();
    }
  }

  function wireWhatsappCtas() {
    var defaultMsg = (cfg.whatsappMessages && cfg.whatsappMessages.default) || "Olá!";
    document.querySelectorAll('[data-cta^="whatsapp"]').forEach(function (el) {
      el.setAttribute("href", waLink(defaultMsg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  function setupNav() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  function setupHeaderScrollState() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupScrollReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) { observer.observe(el); });
  }

  function setYear() {
    var el = document.getElementById("anoAtual");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderCopy();
    renderServices();
    renderDifferentiators();
    renderTeam();
    renderFaq();
    renderContactExtras();
    wireWhatsappCtas();
    setupNav();
    setupHeaderScrollState();
    setupScrollReveal();
    setYear();
  });
})();
