import { useEffect } from 'react';

export const useUIInteractions = () => {
  useEffect(() => {
    // Scroll to top functionality
    const scrollUp = document.querySelector("#scroll-up");
    scrollUp?.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    // Mobile menu functionality
    const burger = document.querySelector("#burger-menu");
    const ul = document.querySelector("nav ul");
    
    burger?.addEventListener("click", () => {
      ul?.classList.toggle("show");
    });

    // Close mobile menu when link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        ul?.classList.remove("show");
      })
    );

    // Project scroll buttons
    const prevBtn = document.querySelector("#prev-btn");
    const nextBtn = document.querySelector("#next-btn");
    const projectsContainer = document.querySelector(".projects-container");
    const scrollStep = 300;

    prevBtn?.addEventListener("click", () => {
      projectsContainer?.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      });
    });

    nextBtn?.addEventListener("click", () => {
      projectsContainer?.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      });
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle?.setAttribute('data-mode', 'light');
    }

    darkModeToggle?.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
      darkModeToggle.setAttribute('data-mode', isDarkMode ? 'light' : 'dark');
    });

    // Cleanup event listeners
    return () => {
      scrollUp?.removeEventListener("click", () => {});
      burger?.removeEventListener("click", () => {});
      navLinks.forEach((link) => link.removeEventListener("click", () => {}));
      prevBtn?.removeEventListener("click", () => {});
      nextBtn?.removeEventListener("click", () => {});
      darkModeToggle?.removeEventListener("click", () => {});
    };
  }, []);
};