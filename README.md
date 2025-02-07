
# Sportify-React

**Sportify-React** é uma aplicação desenvolvida com **React.js** que simula uma interface do Spotify. O projeto foi criado para aprender os conceitos fundamentais do React, como componentes, props e estados, além de trabalhar com a estrutura de pastas e arquivos típicos de um projeto React.

![Sportify-React](src/assets/icons/logo-spotify.png)

## 🛠 Tecnologias Usadas

- **React.js**: A biblioteca JavaScript utilizada para construir a interface do usuário.
- **JavaScript**: Linguagem de programação que faz a lógica do app funcionar.
- **HTML5 & CSS3**: Para estruturar e estilizar a página.
- **API do Spotify** (futuramente pode ser integrada para buscar playlists e músicas reais).

## 🎯 Funcionalidades

- **Interface similar ao Spotify**: Navegação por playlists, categorias, e busca.
- **Componentes Dinâmicos**: O uso de componentes React como Header, Sidebar, Main, e Footer.
- **Responsividade**: Design responsivo com media queries, para se adaptar em dispositivos móveis e desktop.

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/SeuUsuario/Sportify-React.git
cd Sportify-React
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute o projeto localmente:**

```bash
npm start
```

O projeto estará disponível em `http://localhost:3000`.

## 📝 Descrição do Código

- **index.js**: Este é o ponto de entrada do projeto. Nele, o React inicializa a aplicação e renderiza o componente `App`.
- **App.js**: O componente principal, que reúne outros componentes como `Header`, `Sidebar`, `Main`, e `Footer`.
- **Components**: Dentro da pasta `src/componentes/`, você encontrará os componentes `Header`, `Sidebar`, `Main` e `Footer`, cada um responsável por uma parte da interface.
  
Exemplo de como está estruturado o componente `App`:

```javascript
function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
```

- **CSS**: Estilos para a página foram organizados em arquivos CSS, incluindo um reset de CSS e arquivos para cada parte da interface, como `header`, `footer`, e `main-content`.

## 🌐 Como Integrar a API do Spotify

No futuro, será possível integrar a **API do Spotify** para buscar playlists e músicas reais. Para isso, basta seguir os seguintes passos:

1. **Crie um App na plataforma do Spotify Developer**: 
   - Acesse [Spotify Developer](https://developer.spotify.com/) e crie um novo aplicativo.
2. **Obtenha o Client ID e Client Secret**: Você vai precisar desses dados para fazer requisições à API do Spotify.
3. **Configure as credenciais no seu projeto**: Adicione essas credenciais no seu código e use a API para buscar playlists, músicas, e artistas diretamente no Spotify.

## 📸 Exemplo de Visualização

Aqui estão algumas imagens do projeto em funcionamento:

![Tela Inicial](src/assets/screenshots/screenshot1.png)
*Tela inicial do Sportify-React*

![Playlists](src/assets/screenshots/screenshot2.png)
*Visualização das playlists no Sportify-React*

## 📌 Como Contribuir

1. Fork o projeto.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça o commit das suas alterações (`git commit -m 'Adicionando nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

