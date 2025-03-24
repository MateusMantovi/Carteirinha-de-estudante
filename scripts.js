const meuPrimeiroApp = Vue.createApp({
  data() {
    return {
      mensagemInicial: "Bem-vindo ao Vue.js",
      msgInicial: "Esta é uma mensagem inicial",
      verMsg: false,
      corMsg: "",
      cores: [{ ptbr: "AZUL" }, { ptbr: "VERDE" }, { ptbr: "VERMELHO" }],
    };
  },
});

const mountedApp = meuPrimeiroApp.mount("#divPrincipal");
