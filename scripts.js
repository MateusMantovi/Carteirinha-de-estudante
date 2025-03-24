const meuPrimeiroApp = Vue.createApp({
  data() {
    return {
      // Dados originais mantidos
      mensagemInicial: "Bem-vindo ao Vue.js",
      msgInicial: "Esta é uma mensagem inicial",
      verMsg: false,
      corMsg: "",
      cores: [{ ptbr: "AZUL" }, { ptbr: "VERDE" }, { ptbr: "VERMELHO" }],

      // Novos dados para a funcionalidade 2.0
      novoItem: "",
      itens: [],
      darkMode: false,
    };
  },
  methods: {
    adicionarItem() {
      if (this.novoItem.trim() !== "") {
        this.itens.push(this.novoItem);
        this.novoItem = "";
      }
    },
    removerItem(index) {
      this.itens.splice(index, 1);
    },
  },
  watch: {
    darkMode(newVal) {
      // Garante que a classe seja aplicada ao body também se necessário
      if (newVal) {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    },
  },
});

const mountedApp = meuPrimeiroApp.mount("#divPrincipal");
