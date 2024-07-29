$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})
const music = document.getElementById("background-music");

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}

function setVolume(value) {
    music.volume = value;
}

function createFirework() {
    const fireworkContainer = document.getElementById('fireworks');
    const firework = document.createElement('div');
    firework.classList.add('firework');
    
    const size = Math.random() * 20 + 30; // Tamaño aleatorio entre 30 y 50px
    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;

    const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Color aleatorio
    firework.style.backgroundColor = color;
    
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;

    fireworkContainer.appendChild(firework);

    setTimeout(() => {
        fireworkContainer.removeChild(firework);
    }, 1500); // Duración de la animación
}

// Generar fuegos artificiales cada 300ms
setInterval(createFirework, 300);