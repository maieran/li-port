document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".soft-skills-slider");

    // Clone the icons to create a seamless infinite loop
    const items = [...slider.children];
    items.forEach((item) => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });
});
