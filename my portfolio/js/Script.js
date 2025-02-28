document.addEventListener('DOMContentLoaded', function() {
    const { motion } = window['framer-motion'];

    // Header Animation
    motion.animate("header", { y: [-100, 0], opacity: [0, 1] }, { duration: 0.8 });

    // Hero Text Animation
    motion.animate("#home h2", { opacity: [0, 1], y: [20, 0] }, { duration: 1, delay: 0.3 });
    motion.animate("#home p", { opacity: [0, 1], y: [20, 0] }, { duration: 1, delay: 0.5 });

    // Button Hover Animation
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Skills Cards Animation
    document.querySelectorAll("#skills .bg-gray-800").forEach((card, index) => {
        motion.animate(card, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: 0.3 * index });
    });
});