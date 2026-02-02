# Personal Links Hub

Um agregador de links centralizado, desenvolvido com foco em **performance**, **simplicidade** e **facilidade de manutenção**.
O projeto utiliza um arquivo JSON para gerenciar o conteúdo, promovendo a separação clara entre **dados** e **interface**.

🔗 **Demo:** lucasrbsouza.github.io/links/

---

## 🚀 Tecnologias

* **HTML5**
* **CSS3** (variáveis CSS e Flexbox)
* **JavaScript** (Fetch API)
* **Phosphor Icons**

---

## ✨ Funcionalidades

* **Tema Claro / Escuro**
  Alternância de tema com persistência da preferência do usuário.

* **Dados dinâmicos**
  Os links são carregados externamente via `links.json`, permitindo atualizações sem necessidade de alterar o HTML.

* **Responsividade**
  Layout totalmente adaptável para dispositivos móveis e desktop.

* **Data automática**
  Atualização automática do ano no rodapé da página.

---

## 📂 Estrutura do Projeto

```text
├── index.html    # Estrutura principal da aplicação
├── style.css     # Estilos globais e temas
├── script.js     # Lógica da aplicação
└── links.json    # Configuração dos links
```

---

## 🛠️ Como Configurar

### 1. Adicionar ou remover links

Edite o arquivo `links.json`. Cada item deve seguir o formato abaixo:

```json
{
  "title": "Título do Link",
  "url": "https://exemplo.com",
  "icon": "ph-globe"
}
```

📌 Os ícones utilizam a biblioteca **Phosphor Icons**.

---

### 2. Personalizar perfil

No arquivo `index.html`, altere as informações dentro da tag `<header>`:

* Imagem de perfil
* Nome
* Biografia

---

## 💻 Executando Localmente

Para garantir o carregamento correto do arquivo `links.json` (evitando bloqueios de CORS), utilize a extensão **Live Server** do VS Code:

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server** (caso ainda não possua).
3. Clique no botão **Go Live** no canto inferior direito do editor.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.
