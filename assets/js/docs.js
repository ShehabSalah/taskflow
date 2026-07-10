const footerYearEl = document.getElementById("footer-year");
if (footerYearEl) footerYearEl.textContent = String(new Date().getFullYear());

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".docs-nav a")];
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
);
sections.forEach((section) => observer.observe(section));


