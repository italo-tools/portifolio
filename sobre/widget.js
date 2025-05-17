 const themes = [
      {
        backgroundColor: "black",
        borderColor: "darkred",
        jpTitleColor: "darkred",
        enTitleColor: "#00008b",
        progressColor: "royalblue",
        wrapperColor1: "aquamarine",
        wrapperColor2: "cyan",
        textColor: "white"
      },
      {
        backgroundColor: "white",
        borderColor: "black",
        jpTitleColor: "blue",
        enTitleColor: "#ff8c00",
        progressColor: "orange",
        wrapperColor1: "lightgray",
        wrapperColor2: "gray",
        textColor: "black"
      },
      {
        backgroundColor: "#111",
        borderColor: "#555",
        jpTitleColor: "#9400d3",
        enTitleColor: "#2f4f4f",
        progressColor: "teal",
        wrapperColor1: "#333",
        wrapperColor2: "#444",
        textColor: "#eee"
      }
    ];

    let index = 0;

    function aplicarTema(theme) {
      const root = document.querySelector(':root');
      root.style.setProperty('--bg-card', theme.backgroundColor);
      root.style.setProperty('--border-card', theme.borderColor);
      root.style.setProperty('--cor-jp', theme.jpTitleColor);
      root.style.setProperty('--cor-en', theme.enTitleColor);
      root.style.setProperty('--cor-progress', theme.progressColor);
      root.style.setProperty('--cor-wrapper1', theme.wrapperColor1);
      root.style.setProperty('--cor-wrapper2', theme.wrapperColor2);
      root.style.setProperty('--cor-texto', theme.textColor);
    }

    document.getElementById("card").addEventListener("click", function () {
      this.classList.add("fade");
      setTimeout(() => {
        index = (index + 1) % themes.length;
        aplicarTema(themes[index]);
        this.classList.remove("fade");
      }, 500);
    });

    aplicarTema(themes[0]);