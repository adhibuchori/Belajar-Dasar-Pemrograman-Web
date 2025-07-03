export function initTypingEffect() {
  const text = "Segarkan Hidupmu, Nyalakan Harimu!";
  const element = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index <= text.length) {
      element.innerHTML = text.substring(0, index);
      index++;
      setTimeout(type, 40);
    } else {
      setTimeout(() => {
        element.innerHTML = "";
        index = 0;
        type();
      }, 5000);
    }
  }

  type();
}
