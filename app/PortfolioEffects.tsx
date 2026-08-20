"use client";

import { useEffect } from "react";

export default function PortfolioEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    root.classList.add("js-enhanced");

    let scrollFrame = 0;
    const updateScrollState = () => {
      scrollFrame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      progress?.style.setProperty("--scroll-progress", amount.toString());
      header?.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let revealObserver: IntersectionObserver | undefined;
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.13, rootMargin: "0px 0px -7% 0px" },
      );
      revealNodes.forEach((node) => revealObserver?.observe(node));
    }

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"),
    );
    const setActiveLink = (sectionId: string) => {
      navLinks.forEach((link) => {
        const isActive = link.dataset.navLink === sectionId;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    };
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const activeObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              const activeEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
              if (activeEntry) setActiveLink(activeEntry.target.id);
            },
            { rootMargin: "-26% 0px -62% 0px", threshold: [0.08, 0.35, 0.65] },
          )
        : undefined;
    sections.forEach((section) => activeObserver?.observe(section));

    const cleanupPointerEffects: Array<() => void> = [];
    if (!reducedMotion.matches && finePointer.matches) {
      const tiltCards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
      tiltCards.forEach((card) => {
        const move = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          card.style.setProperty("--pointer-x", `${x * 100}%`);
          card.style.setProperty("--pointer-y", `${y * 100}%`);
          card.style.setProperty("--tilt-x", `${(0.5 - y) * 3.2}deg`);
          card.style.setProperty("--tilt-y", `${(x - 0.5) * 3.2}deg`);
        };
        const leave = () => {
          card.style.removeProperty("--tilt-x");
          card.style.removeProperty("--tilt-y");
        };
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanupPointerEffects.push(() => {
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });

      const magneticButtons = Array.from(
        document.querySelectorAll<HTMLElement>("[data-magnetic]"),
      );
      magneticButtons.forEach((button) => {
        const move = (event: PointerEvent) => {
          const bounds = button.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          button.style.setProperty("--magnet-x", `${x * 7}px`);
          button.style.setProperty("--magnet-y", `${y * 7}px`);
        };
        const leave = () => {
          button.style.removeProperty("--magnet-x");
          button.style.removeProperty("--magnet-y");
        };
        button.addEventListener("pointermove", move);
        button.addEventListener("pointerleave", leave);
        cleanupPointerEffects.push(() => {
          button.removeEventListener("pointermove", move);
          button.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      root.classList.remove("js-enhanced");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      revealObserver?.disconnect();
      activeObserver?.disconnect();
      cleanupPointerEffects.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div className="scroll-progress" data-scroll-progress aria-hidden="true" />;
}
