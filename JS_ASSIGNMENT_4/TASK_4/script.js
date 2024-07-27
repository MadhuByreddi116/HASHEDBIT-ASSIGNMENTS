document.getElementById("fontsize").addEventListener("input", (event) => {
    const fontSize = event.target.value + "px";
    document.getElementById("text-container").style.fontSize = fontSize;
  });

  function changeFontFamily() {
    const fontFamily = document.getElementById("list").value;
    const textContainer = document.getElementById("text-container");
    textContainer.style.fontFamily = fontFamily;
  }

  function changeColor() {
    const color = document.getElementById("colorbox").value;
    const textContainer = document.getElementById("text-container");
    textContainer.style.color = color;
  }

  function addStyle(property, value) {
    const textContainer = document.getElementById("text-container");
    textContainer.style[property] = value;
  }

  function getCSSProperties(){
  document.getElementById("getstyle").addEventListener("click", () => {
const textContainer = document.getElementById("text-container");
const styles = window.getComputedStyle(textContainer);
const cssProps = [
    'color', 'text-decoration', 'font-style', 'font-weight', 'font-family', 'font-size'
].map(prop => `${prop}: ${styles.getPropertyValue(prop).trim()};`).join('\n');
document.getElementById("css-props").textContent = cssProps;
});}