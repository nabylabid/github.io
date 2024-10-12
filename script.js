const canvas = document.getElementById('confetti');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = Array.from({ length: 300 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 1,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
}));

function renderConfetti() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach(piece => {
        context.fillStyle = piece.color;
        context.fillRect(piece.x, piece.y, piece.size, piece.size);
        piece.x += piece.speedX;
        piece.y += piece.speedY;

        if (piece.y > canvas.height) piece.y = 0;
        if (piece.x > canvas.width) piece.x = 0;
        if (piece.x < 0) piece.x = canvas.width;
    });
    requestAnimationFrame(renderConfetti);
}

renderConfetti();
