// Criação da aplicação Vue
const app = Vue.createApp({
  // Data: define as variáveis reativas do componente
  data() {
    return {
      titulo: "Carteira de Estudante Virtual",
      estudante: {
        nome: "João da Silva",
        matricula: "20230001",
        curso: "Análise e Desenvolvimento de Sistemas",
        foto: "https://via.placeholder.com/150",
        ativo: true,
      },
      // Array de disciplinas para demonstrar v-for
      disciplinas: [
        { codigo: "ADS001", nome: "Programação Front-end" },
        { codigo: "ADS002", nome: "Banco de Dados" },
        { codigo: "ADS003", nome: "Lógica de Programação" },
      ],
    };
  },
  // Observação: Não incluímos methods, computed ou template conforme solicitado
});

// Monta a aplicação Vue na div com id="app"
const mountedApp = app.mount("#app");
