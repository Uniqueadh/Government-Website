// =======================
// MOBILE MENU TOGGLE
// =======================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {
    // Open / Close Menu
    mobileMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        }
    });

    // Close menu when any link is clicked
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        });
    });
}



// =======================
// ACTIVE NAVIGATION (Current Page Highlight)
// =======================
const currentPage = window.location.pathname.split("/").pop().split("?")[0] || "index.html";

document.querySelectorAll(".nav-menu a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    link.classList.toggle("active", linkPage === currentPage);
});



// =======================
// SAFE SMOOTH SCROLL (Does NOT break page links)
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Only scroll if link is ONLY "#section"
        if (href.startsWith("#") && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});



// =======================
// CONTACT FORM VALIDATION
// =======================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        alert("Thank you for contacting us! We will get back to you soon.");
        contactForm.reset();
    });
}
