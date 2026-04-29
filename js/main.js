const burger = document.getElementById('burger');
const nav = document.querySelector('.nav-links'); // Make sure your <ul> has this class

burger.addEventListener('click', () => {
    // Toggle the Nav
    nav.classList.toggle('nav-active');

    // Burger Animation (Optional: if you want the lines to cross)
    burger.classList.toggle('toggle');
});


const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top function
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function forceDownload(url, filename) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}