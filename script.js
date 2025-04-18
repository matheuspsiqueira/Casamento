// script.js

document.addEventListener("DOMContentLoaded", function() {
    const dataCasamento = new Date("2026-04-05T15:30:00").getTime();
  
    const atualizarContador = () => {
      const agora = new Date().getTime();
      const distancia = dataCasamento - agora;
  
      if (distancia < 0) {
        document.getElementById("countdown").innerHTML = "Já estamos casados! 💍";
        return;
      }
  
      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  
      document.getElementById("dias").innerText = dias;
      document.getElementById("horas").innerText = horas;
      document.getElementById("minutos").innerText = minutos;
    };
  
    atualizarContador();
    setInterval(atualizarContador, 60000); // Atualiza a cada minuto
  });