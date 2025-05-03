# Furia

# Furia - API Node.js com TypeScript e Frontend com Tailwind CSS

Este projeto é uma aplicação completa, incluindo o **backend** desenvolvido com **Node.js** e **TypeScript** e o **frontend** utilizando **Tailwind CSS**. O sistema possui funcionalidades de **login**, **registro**, **feed de interações**, **acompanhamento de jogos** e **chatbot** para suporte aos fãs da FURIA.

---

### **Pré-requisitos**

- **Node.js** (versão 14+ recomendada)
- **npm** (ou **yarn**)
- **Banco de dados mysql** (conexão configurada via variáveis de ambiente)
- **Tailwind CSS** (para o frontend)

---

### **Instalação e Configuração**

#### **Backend (API)**

1. **Clone o repositório**:

   Clone o repositório https://github.com/omarcus212/furia.

2. **Instale as dependências do backend**:

   No diretório do backend, execute o seguinte comando:

```bash
npm install
```

3. **Configure as variáveis de ambiente**:

- DB_PORT=3306
- DB_HOST=localhost
- DB_USER=youruser
- DB_PASSWORD=yourpassword
- DB_NAME=db_Central_FURIA
- JWT_SECRET=yourpassword

4. **Execute a API**
   
  ```bash
   npm start
   ```

 A API estará disponível em http://localhost:3000.

### **Frontend (Web)**

1. **Acesse o site remoto**:
- furia-plum.vercel.app/login

- ou
  
2. **Instale as dependências do web**:

No diretório do backend, execute o seguinte comando:

```bash
npm install
```
   
3. **Configure as variáveis de ambiente**:

- REACT_APP_BASE_URL_API=http://localhost:3000/api

4. **Execute a API**

```bash
npm start
```
-produção 
```bash
npm run product
```

**Observações Importantes**
Autenticação com JWT: Se a API estiver configurada para usar autenticação via JWT, certifique-se de configurar corretamente a variável JWT_SECRET no seu arquivo .env.

Banco de Dados: As rotas da API estão prontas para serem integradas com o banco de dados. Você pode usar o arquivo dumps do banco encontrado na pasta bd para carregar as tabelas e dados iniciais. Use o script Python para enviar os jogos para o banco, conforme descrito abaixo.

**Estrutura do Banco de Dados**
- Os dumps do banco estão localizados na pasta bd do repositório.

- Script em Python: Há um script Python para enviar os dados de jogos para o banco de dados. Execute o script conforme necessário para atualizar o banco com informações sobre os jogos.

**Links Úteis**

- **Documentação da API**: [Documentação da API FURIA no Postman](https://documenter.getpostman.com/view/21065723/2sB2j4hBym)
- **Figma - Design da Web**: [Acesse o Figma aqui](https://www.figma.com/design/3URW5nRJnnNsOlQdU9hl21/Untitled?node-id=0-1&p=f&t=1Mv8ZtwTCU7zezrz-0)
- **YouTube**: [Assista ao vídeo explicativo]()

   
