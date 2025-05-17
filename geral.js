// menu 
const menu = document.getElementById("menu");
const menuOverlay = document.getElementById("espaco-vazio");
const toggleButton = document.getElementById("side-bar");
const menuLinks = document.querySelectorAll("#menu a");

// Alterna o menu ao clicar no botão do sidebar
toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuOverlay.style.display = menu.classList.contains("active") ? "block" : "none";
});

// Fecha o menu ao clicar fora dele
menuOverlay.addEventListener("click", () => {
    menu.classList.remove("active");
    menuOverlay.style.display = "none";
});

// seção links footer
function playSound() {
  const sound = document.getElementById("click-sound");
  
  if (sound) {
    sound.play().catch(error => console.error("Erro ao reproduzir áudio:", error));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const audioElement = document.getElementById("click-sound");

  if (audioElement) {
    audioElement.addEventListener("canplaythrough", () => {
      console.log("Áudio carregado e pronto para reprodução.");
    });
  }
});

// formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("formulario");
    const mensagem = document.createElement("p");
    mensagem.innerText = "Muito obrigado por sua avaliação! 😋";
    mensagem.id = "mensagem-agradecimento";
    mensagem.style.display = "none";
    form.parentNode.appendChild(mensagem);

    const ultimoEnvio = localStorage.getItem("ultimaAvaliacao");
    const agora = new Date().getTime();
    const vinteQuatroHoras = 24 * 60 * 60 * 1000;

    if (ultimoEnvio && agora - ultimoEnvio < vinteQuatroHoras) {
        form.style.display = "none";
        mensagem.style.display = "block";
    }

    // Evento de envio do formulário
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                localStorage.setItem("ultimaAvaliacao", agora);
                form.style.display = "none";
                mensagem.style.display = "block";
            } else {
                alert("Erro ao enviar o formulário. Tente novamente!");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Ocorreu um problema ao enviar sua avaliação.");
        });
    });
});
