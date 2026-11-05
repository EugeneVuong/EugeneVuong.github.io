// Small touches: a live Pacific-time clock and reveal-on-scroll.
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Live clock in Santa Barbara time.
  const clock = document.getElementById("clock");
  if (clock) {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles", hour: "numeric", minute: "2-digit",
    });
    const tick = () => { clock.textContent = fmt.format(new Date()) + " PT"; };
    tick();
    setInterval(tick, 30 * 1000);
  }

  // Reveal sections as they scroll into view.
  if (!reduce && "IntersectionObserver" in window) {
    const els = document.querySelectorAll(".section__head, .rcard, .pub, .timeline li, .pcard, .mini, .log__card, .contact__title");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }
})();
