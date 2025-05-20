# 📅 Análise de sorrisos para prevenção de sinistros

Este é um aplicativo mobile para **prevenção de sinistros odontológicos**, desenvolvido em **React Native** com integração ao **Firebase Firestore**. A aplicação também permite que usuários visualizem, agendem, remarquem e cancelem consultas com uma interface simples, bonita e funcional.

## 🚀 Funcionalidades

- 📋 Visualização de consultas (futuras e passadas com diferenciação visual)
- 🗓️ Agendamento com seleção de:
  - Clínica (lista)
  - Data (calendário)
  - Horário
- 🔄 Remarcação e ❌ cancelamento de consultas
- 👤 Cadastro de usuário e tela de perfil
- 📷 Captura de imagem
- Navegação intuitiva com abas inferiores e cabeçalho personalizado

## 🛠 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.github.io/router/)
- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/) (Firestore Database, Auth)
- [Date-fns](https://date-fns.org/) – Manipulação de datas
- [Styled-components](https://styled-components.com/) – Estilização
- [Expo Camera ](https://docs.expo.dev/versions/latest/sdk/camera/)

## 📦 Instalação

### Pré-requisitos

- Node.js
- Yarn ou npm
- Expo CLI (se estiver usando Expo)  
  ```bash
  npm install -g expo-cli

### 1 - Clone o repositório
- Repositório  
  ```bash
  git clone https://github.com/FabiolaNeris/OdontoprevMobile_sprt4.git

### 2 - Instale as dependências
- Dependências
  ```bash
  yarn install
  #ou
  npm install

### 3 - Configure o Firebase:

- Crie um projeto no Firebase
- Ative o Firestore Database
- Copie suas credenciais do Firebase e crie um arquivo firebaseConfig.js:

### 4 - Inicie o app
Npm start

### Importante:
O aplicativo foi testado e renderizado na web, por estar na versão expo 53 que atualmente é imcompatível com a autenticação do firebase.

A funcionalidade de seleção de data [date picker] também pode ter a funcionalidade alterada de acordo com o dispositivo.

Recomendamos fortemente que a aplicação seja testada na web, para isso, antes de rodar o projeto instale a seguinte dependência:
  - Web
    ```bash
  npx expo install react-dom react-native-web @expo/metro-runtime

## Estrutura de diretórios
- Projeto
  ```bash
    📦 Projeto
    ├── 📁 app                     # Páginas e rotas com Expo Router
    │   ├── 📄 _layout.tsx            # Layout base com navegação (Stack/Tab)
    │   ├── 📄 index.tsx              # Tela inicial ou redirecionamento
    │   ├── 📄 home.tsx               # Tela principal após login/cadastro
    │   ├── 📄 cadastrarUsuario.tsx   # Tela de cadastro de usuário
    │   ├── 📄 perfil.tsx             # Tela de perfil do usuário
    │   ├── 📄 consultas.tsx          # Tela de listagem e gerenciamento de consultas
    │   └── 📄 captura.tsx            # Tela de captura de imagem (opcional)
    ├── 📁 components              # Componentes reutilizáveis da interface
    │   ├── 📄 bottomTabBar.tsx       # Barra de navegação inferior personalizada
    │   ├── 📄 header.tsx             # Cabeçalho customizado com ícone/menu
    │   └── 📄 itemConsulta.tsx       # Card visual individual para exibir consultas
    ├── 📁 services                # Integrações e utilitários externos
    │   └── 📄 firebaseConfig.tsx     # Configuração do Firebase (Firestore)
    ├── 📁 assets                  # Imagens, ícones, fontes e outros recursos estáticos
    ├── 📄 app.json / app.config.js  # Configurações do projeto Expo
    └── 📄 package.json              # Dependências e scripts do projeto

 ## Desenvolvido por
Fabiola Falcão **RM552715** TURMA 2TDSPB

Rafael Novaes **RM 553934** TURMA 2TDSPB

Carlos Henrique Nascimento **RM 553597** TURMA 2TDSPR
