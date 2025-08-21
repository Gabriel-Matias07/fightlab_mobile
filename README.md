# FightLab

**FightLab** é um site desenvolvido como projeto acadêmico com o objetivo de facilitar a pesquisa de informações sobre atletas de MMA (Mixed Martial Arts). Através do nome do lutador, o sistema consome uma API externa para retornar dados relevantes, como nacionalidade, categoria de peso, idade, imagem, entre outros.

## Funcionalidades

- Pesquisa por nome do atleta de MMA  
- Exibição de informações detalhadas do lutador  
- Interface intuitiva  
- Integração com API externa para dados em tempo real  

## Tecnologias Utilizadas

- **React.js** – Framework JavaScript para construção da interface  
- **HTML5** – Estruturação da página  
- **CSS3** – Estilização e responsividade

## Documentação Simples

https://docs.google.com/document/d/1wtZyE7wX70WjIffwKBALeea42QToS3emt8Wa_u1d58I/edit?usp=sharing

## Como rodar o projeto localmente

1. Clone o repositório:

    ```bash
    git clone https://github.com/Gabriel-Matias07/fightlab.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd fightlab
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Rode o projeto:

    ```bash
    npm run dev
    ```

5. Acesse no navegador:

    ```
    http://localhost:5173
    ```

## API

A API utilizada fornece dados de lutadores de MMA:  
[https://api-sports.io/documentation/mma/v1](https://api-sports.io/documentation/mma/v1)  

### Requisição

As requisições devem ser feitas com método `GET`, utilizando os seguintes headers:

```http
X-RapidAPI-Key: SUA_CHAVE_AQUI
X-RapidAPI-Host: v1.mma.api-sports.io
```

**Exemplo de endpoint para busca de atletas:**

```
https://v1.mma.api-sports.io/v1/fighters?search=nome_do_lutador
```

> **Nota:** A chave de autenticação pode ser obtida ao se cadastrar no site da [API-SPORTS](https://api-sports.io/).

## Colaboradores

<table> 
  <tr> 
    <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/124216130?v=4" width="100px;" alt="Gabriel"/><br /> 
      <strong><a href="https://github.com/Gabriel-Matias07">Gabriel</a></strong> 
    </td> 
    <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/173968372?v=4" width="100px;" alt="Rayana Lima"/><br /> 
      <strong><a href="https://github.com/Rayanagmss">Rayana Lima</a></strong> 
    </td> 
    <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/99146426?v=4" width="100px;" alt="Moisés Iatagan"/><br /> 
      <strong><a href="https://github.com/miyatakuun">Moisés Iatagan</a></strong> 
    </td> 
    <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/124687497?v=4" width="100px;" alt="Victor Anderson"/><br /> 
      <strong><a href="https://github.com/VictorNicolau-coder">Victor Anderson</a></strong> 
    </td> 
  </tr> 
</table>  

## Licença

Este projeto está licenciado sob a [Creative Commons BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Uso comercial é proibido sem autorização dos autores.
