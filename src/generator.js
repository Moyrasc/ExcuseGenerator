import "bootstrap";
import "./style.css";



document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".subtitle").textContent = generatorExcuse();
});

 function generatorExcuse() {
  let pronombre = ["Mi", "Un"];
  let sujeto = ["cactus", "gato", "payaso"];
  let accion = ["ha mordido", "me tiro", "me grito"];
  let lugar = ["mis zapatos", "mi coche"];
  let donde = ["en la calle", "en mi casa"];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    lugar[lugarIndex] +
    " " +
    donde[dondeIndex]
  );
}
