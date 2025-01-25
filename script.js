const logos = document.querySelectorAll('.slow, .up, .middle, .up2');

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const logoSize = 100;
const minSpacing = logoSize * 2;

const placedLogos = [];

function isOverlapping(x, y) {
  return placedLogos.some(([px, py]) => {
    const distance = Math.sqrt((px - x) ** 2 + (py - y) ** 2);
    return distance < minSpacing;
  });
}

logos.forEach((logo) => {
  let randomX, randomY;

  do {
    randomX = Math.random() * (screenWidth - logoSize);
    randomY = Math.random() * (screenHeight - logoSize);
  } while (isOverlapping(randomX, randomY));

  placedLogos.push([randomX, randomY]);
  logo.style.left = `${randomX}px`;
  logo.style.top = `${randomY}px`;
});