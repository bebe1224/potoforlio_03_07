const cursor = document.querySelector(".mouse-curcle");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  cursor.style.transform = `translate(${x}px, ${y}px)`;
});
