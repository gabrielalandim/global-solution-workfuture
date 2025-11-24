# WorkFuture 2030 - Global Solution
![Logo do Projeto](src/assets/logo.png)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


## 1. Título e Descrição
**WorkFuture 2030** é uma plataforma digital inovadora desenvolvida como solução para a Global Solution da FIAP (2024/2025). O projeto visa preparar profissionais para o futuro do trabalho, integrando **Inteligência Artificial**, **Ambientes Imersivos (VR/AR)** e **Aprendizado Contínuo (Upskilling)**, alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
A aplicação oferece uma experiência Single Page Application (SPA) completa, responsiva e acessível (Dark/Light Mode), conectando usuários a trilhas de carreira emergentes.
## 2. Status do Projeto
✅ **Concluído (Versão 1.0)**
## 3. Sumário
- [1. Título e Descrição](#1-título-e-descrição)
- [2. Status do Projeto](#2-status-do-projeto)
- [3. Sumário](#3-sumário)
- [4. Sobre o Projeto](#4-sobre-o-projeto)
- [5. Tecnologias Utilizadas](#5-tecnologias-utilizadas)
- [6. Instalação](#6-instalação)
- [7. Como Usar](#7-como-usar)
- [8. Estrutura de Pastas](#8-estrutura-de-pastas)
- [9. Endpoints ou Rotas Principais](#9-endpoints-ou-rotas-principais)
- [10. Autores e Créditos](#10-autores-e-créditos)
- [11. Demonstração](#11-demonstração)
- [12. Contato](#12-contato)
## 4. Sobre o Projeto
O **WorkFuture 2030** aborda a necessidade urgente de requalificação profissional em um cenário de automação avançada. A solução propõe:
* **IA como Parceira:** Ferramentas que auxiliam na produtividade e decisão.
* **Ambientes Híbridos:** Integração de realidade virtual para trabalho remoto imersivo.
* **Inclusão e ESG:** Foco em recrutamento ético e redução de desigualdades (ODS 10).
A plataforma Frontend consome dados de uma API Java desenvolvida seguindo práticas de Domain Driven Design (DDD).
## 5. Tecnologias Utilizadas
O projeto foi desenvolvido seguindo a arquitetura modular com:
* **Frontend Framework:** React.js + Vite
* **Linguagem:** TypeScript
* **Estilização:** TailwindCSS (Responsividade e Dark Mode)
* **Roteamento:** React Router DOM (Rotas estáticas e dinâmicas)
* **Ícones:** Lucide React
* **Versionamento:** Git & GitHub (GitFlow)
* **Deploy:** Vercel
## 6. Instalação
Para rodar o projeto localmente em sua máquina:

```bash
# 1. Clone o repositório
git clone [https://github.com/gabrielalandim/global-solution-workfuture.git](https://github.com/gabrielalandim/global-solution-workfuture.git)

# 2. Entre na pasta do projeto
cd global-solution-workfuture

# 3. Instale as dependências
npm install

# 4. Execute o servidor de desenvolvimento
npm run dev
O projeto rodará em http://localhost:5173.
```
## 7. Como Usar

### Acesso Online
Acesse a aplicação em produção através da URL (Deploy na Vercel):
🔗 **[Acesse o Projeto Aqui](https://global-solution-workfuture.vercel.app/)**

### Funcionalidades
* **Home:** Visão geral dos pilares do projeto e cards interativos.
* **Trilhas de Carreira (Rota Dinâmica):** Na Home, clique nos cards de vagas (ex: "Especialista em Ética de IA") para acessar a página de detalhes (`/vaga/:id`).
* **Tema Escuro:** Utilize o botão de sol/lua no cabeçalho para alternar o tema.
* **Contato:** Preencha o formulário para simular o envio de dados para a API.
* **Integrantes:** Conheça a equipe responsável pelo desenvolvimento.


## 8. Estrutura de Pastas
A arquitetura segue o padrão modular exigido:

```text
src/
 ├── assets/        # Imagens e logos
 ├── components/    # Componentes reutilizáveis (Header, Footer, MemberCard)
 ├── context/       # Context API (ThemeContext para Dark Mode)
 ├── pages/         # Páginas (Home, About, Team, Contact, JobDetails)
 ├── routes/        # Configuração de rotas (AppRoutes)
 ├── services/      # Integração com API Java
 ├── types/         # Interfaces TypeScript
 ├── App.tsx        # Componente Raiz
 └── main.tsx       # Ponto de entrada
```

## 9. Endpoints ou Rotas Principais
A aplicação conecta-se ao Backend Java hospedado na nuvem.

* **URL da API Java:** `[https://workfuture-java-api.onrender.com/]`

### Endpoints consumidos:
* `GET /jobs` - Retorna a lista de vagas e tendências de mercado.
* `GET /jobs/{id}` - Retorna detalhes de uma vaga específica.
* `POST /contact` - Envia mensagem de contato e lead.

## 10. Autores e Créditos
Projeto desenvolvido pela equipe **WorkFuture** (FIAP):

| Nome | RM | Turma | Links |
|------|----|-------|-------|
| **Maria Gabriela** | RM565146 | 1TDSA | [GitHub](https://github.com/gabrielalandim) |
| **Samara Porto Souza** | RM559072 | 1TDSR | [GitHub](https://github.com/ssamaraps) |
| **Eduarda Weiss Ventura** | RM564434 | 1TDSPX | [GitHub](https://github.com/eduardawv) |

## 11. Demonstração

### Link do Vídeo Pitch
🎥 **[https://youtu.be/kpOlj6M7gzY]**

## 12. Contato
Para dúvidas ou sugestões, entre em contato através dos perfis do LinkedIn listados acima.

---
©️ 2025 WorkFuture 2030. Todos os direitos reservados.
