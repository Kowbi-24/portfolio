window.onload = function() {
  particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Number of particles
            "density": {"enable": true, "value_area": 800}
        },
        "color": {"value": "#93b0ff"}, // Color of the individual dots (your accent color)
        "size": {"value": 3, "random": true},
        "line_linked": {
            "enable": true,
            "distance": 150, // How close particles must be to link
            "color": "#ffffff", // Color of the connecting lines
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6, // Movement speed
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "grab"}, // Lines connect when user hovers
            "onclick": {"enable": true, "mode": "push"}, // Particles are pushed away on click
            "resize": true
        },
        "modes": {
            "grab": {"distance": 200, "line_linked": {"opacity": 1}},
            "push": {"particles_nb": 4}
        }
    },
    "retina_detect": true
});
}

