document.addEventListener("DOMContentLoaded", function () {
    const softSlider = document.querySelector(".soft-skills-slider");
    const hardSlider = document.querySelector(".hard-skills-slider");

    // Clone the icons to create a seamless infinite loop
    function duplicateItems(slider) {
        const items = [...slider.children];
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            slider.appendChild(clone);
        });
    }

    duplicateItems(softSlider);
    duplicateItems(hardSlider);
});
