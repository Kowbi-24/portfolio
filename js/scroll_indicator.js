function checkScroll() {
    const indicator = document.getElementById("scrollIndicator");

    if (!indicator) {
        window.removeEventListener('scroll', checkScroll);
        return; 
    }

    if (window.scrollY > 30) {
        indicator.classList.add("hidden");
    }
    else {
        indicator.classList.remove("hidden");
    }
}

window.addEventListener('scroll', checkScroll)