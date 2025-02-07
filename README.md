

# Sportify-React

**Sportify-React** é uma aplicação de música que replica a interface do Spotify, permitindo ao usuário explorar playlists, buscar por músicas e artistas, além de criar novas playlists. O projeto foi desenvolvido utilizando **React**, com uma estrutura de componentes e um design moderno.

![Sportify-React Screenshot](https://via.placeholder.com/800x400?text=Screenshot+Sportify-React)  <!-- Substitua pela URL da imagem real -->

## Índice

1. [Descrição](#descrição)
2. [Tecnologias](#tecnologias)
3. [Funcionalidades](#funcionalidades)
4. [Instalação](#instalação)
5. [Como usar](#como-usar)
6. [Licença](#licença)

## Descrição

O **Sportify-React** é um projeto que tem como objetivo criar uma interface semelhante ao Spotify, onde os usuários podem interagir com playlists, realizar buscas, e navegar por diferentes seções. Ele foi desenvolvido utilizando React, com estilos customizados e responsivos, além de um layout moderno.

### Imagens de visualização

Aqui estão algumas imagens de como o projeto se apresenta:

1. **Tela inicial**: Interface com a sidebar e opções de navegação.

![Tela Inicial](https://via.placeholder.com/800x400?text=Tela+Inicial)  <!-- Substitua pela URL da imagem real -->

2. **Exploração de playlists**: Lista de playlists com diferentes categorias.

![Exploração de Playlists](https://via.placeholder.com/800x400?text=Exploração+de+Playlists)  <!-- Substitua pela URL da imagem real -->

3. **Busca de músicas/artistas**: Tela de busca com sugestão de músicas.

![Busca de Músicas](https://via.placeholder.com/800x400?text=Busca+de+Músicas)  <!-- Substitua pela URL da imagem real -->

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção da interface.
- **HTML5**: Estruturação do conteúdo web.
- **CSS3**: Estilização responsiva e moderna com foco em usabilidade.
- **Font Awesome**: Ícones utilizados na interface.
- **Media Queries**: Design responsivo para diferentes tamanhos de tela.

### Integração com a API do Spotify (Futuro)

Se você quiser integrar a **API do Spotify** no futuro, pode adicionar as seguintes etapas:

- **Spotify Web API**: A API do Spotify oferece acesso a informações sobre músicas, artistas, playlists, etc. Você pode usar essa API para buscar informações de música ao vivo, como playlists personalizadas ou os álbuns mais populares.
  
    Para integrar a API do Spotify:

    1. Crie uma conta de desenvolvedor no [Spotify Developer](https://developer.spotify.com/).
    2. Gere um **Client ID** e **Client Secret** para autenticação.
    3. Utilize a autenticação **OAuth 2.0** para permitir que o usuário faça login e tenha acesso às suas playlists e músicas no Spotify.
    4. Use os **endpoints da API do Spotify** para obter playlists, informações de artistas, e muito mais.

    Exemplo de chamada para obter playlists usando a API:

    ```javascript
    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
    ```

    O uso da API do Spotify permitirá enriquecer ainda mais sua aplicação com conteúdo real e dinâmico de música!

## Funcionalidades

- **Exploração de playlists**: O usuário pode ver diferentes categorias de playlists como "Lançamentos", "Feitos para você", "Rock", "Hip Hop", entre outras.
- **Busca de músicas e artistas**: Funcionalidade para buscar conteúdo.
- **Interação com a interface**: Botões para navegação entre seções e playlists.
- **Criação de playlist**: O usuário pode criar sua própria playlist através de um botão interativo.
- **Design responsivo**: Interface adaptável para diferentes dispositivos e tamanhos de tela.

## Instalação

### Pré-requisitos

Antes de começar, você precisa ter o **Node.js** instalado. Você pode verificar se já o tem instalado com o seguinte comando:

```bash
node -v
```

### Passos para rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Romeropedro1/Sportify_React.git
```

2. Navegue até o diretório do projeto:

```bash
cd Sportify_React
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O projeto estará disponível no seu navegador, geralmente em [http://localhost:3000](http://localhost:3000).

## Como usar

1. **Página inicial**: Ao acessar a aplicação, você verá as opções de navegação, playlists e a interface para realizar buscas.
2. **Criar playlist**: Na sidebar, você pode clicar no botão para criar uma nova playlist.
3. **Navegar por playlists**: Selecione uma das playlists para ver as músicas que ela contém.
4. **Buscar artistas/músicas**: Use a barra de pesquisa na parte superior para buscar por artistas ou músicas.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

