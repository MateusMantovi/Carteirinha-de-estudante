# Carteira de Estudante - Versão 3.0

Aplicação Vue.js que simula uma carteira de estudante interativa com funcionalidades dinâmicas e tema escuro/claro.

## Funcionalidades

### Seção Original

- Mensagem inicial dinâmica com controle de visibilidade
- Mudança de cor de texto conforme entrada do usuário
- Exibição condicional de mensagens baseadas na cor selecionada
- Lista de cores usando v-for
- Sistema para adicionar/remover itens de uma lista
- Alternador de tema escuro/claro

### Carteirinha de Estudante

- Formulário para preenchimento dos dados do estudante:
  - Nome
  - Matrícula
  - Curso
  - Validade (com formatação automática)
  - URL da foto
- Visualização em tempo real da carteirinha
- Design estilizado com aparência profissional

## Tecnologias Utilizadas

- Vue.js 3
- HTML5
- CSS3 (com transições e variáveis)

## Como Usar

1. Preencha os campos do formulário na seção "Dados do Estudante"
2. A carteirinha será atualizada automaticamente
3. Use o checkbox "Ativar Tema Escuro" para alternar entre os temas
4. Na seção original, experimente:
   - Mostrar/ocultar mensagens
   - Mudar cores dinamicamente
   - Adicionar/remover itens da lista

## Estrutura do Código

- `index.html`: Estrutura principal com template Vue
- `styles.css`: Estilos CSS para toda a aplicação
- `scripts.js`: Lógica Vue com dados, métodos e watchers
