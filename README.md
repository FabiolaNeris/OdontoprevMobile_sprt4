# 📅 App de Agendamento de Consultas Odontológicas

Este é um aplicativo mobile para **agendamento de consultas odontológicas**, desenvolvido em **React Native** com integração ao **Firebase Firestore**. A aplicação permite que usuários visualizem, agendem, remarquem e cancelem consultas com uma interface simples, bonita e funcional.

## 🚀 Funcionalidades

- 📋 Listagem de consultas futuras e passadas
- 🗓️ Agendamento de novas consultas com escolha de:
  - Clínica (lista suspensa)
  - Data (calendário interativo)
  - Horário (seleção customizada)
- 🔄 Remarcação de consultas
- ❌ Cancelamento de consultas
- 💡 Destaque visual para diferenciar consultas futuras e passadas
- 🔐 Autenticação com Firebase (caso aplicável)
- 📱 Interface responsiva com navegação intuitiva

## 🛠 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (se aplicável)
- [Firebase](https://firebase.google.com/) (Firestore Database)
- [React Navigation](https://reactnavigation.org/) – Navegação por abas e drawer
- [Date-fns](https://date-fns.org/) – Manipulação de datas
- [Styled-components](https://styled-components.com/) – Estilização
- [React Native Paper](https://callstack.github.io/react-native-paper/) ou similar – Componentes visuais (opcional)

## 📦 Instalação

### Pré-requisitos

- Node.js
- Yarn ou npm
- Expo CLI (se estiver usando Expo)  
  ```bash
  npm install -g expo-cli

### 1 - Clone o repositório
  git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo

### 2 - Instale as dependências
yarn install
#### ou
npm install

### 3 - Configure o Firebase:

Crie um projeto no Firebase
Ative o Firestore Database
Copie suas credenciais do Firebase e crie um arquivo firebaseConfig.js:

### 4 - Inicie o app
Npm start


