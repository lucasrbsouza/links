Personal Links Hub

Um agregador de links centralizado, desenvolvido com foco em performance e facilidade de manutenção. O projeto utiliza um arquivo JSON para gerenciar o conteúdo, separando os dados da interface.

Demo: Acesse a demonstração aqui

🚀 Tecnologias

HTML5

CSS3 (Variáveis e Flexbox)

JavaScript (Fetch API)

Phosphor Icons

✨ Funcionalidades

Tema Claro/Escuro: Alternância de tema com persistência da preferência do usuário.

Dados Dinâmicos: Os links são carregados externamente via links.json, facilitando a atualização sem necessidade de mexer no HTML.

Responsividade: Layout adaptável para dispositivos móveis e desktop.

Data Automática: Atualização automática do ano no rodapé.

📂 Estrutura

├── index.html    # Estrutura principal

├── style.css     # Estilos e temas

├── script.js     # Lógica da aplicação

└── links.json    # Configuração dos links


🛠️ Como Configurar

1. Adicionar/Remover Links

Edite o arquivo links.json. O formato deve seguir este padrão:

{
    "title": "Título do Link",
    "url": "[https://exemplo.com](https://exemplo.com)",
    "icon": "ph-globe" 
}


Os ícones utilizam a biblioteca Phosphor Icons.

2. Personalizar Perfil

No arquivo index.html, altere as informações dentro da tag <header> (imagem, nome e biografia).

💻 Executando Localmente

Para carregar o arquivo links.json corretamente (evitando bloqueio de CORS), use a extensão Live Server do VS Code:

Abra a pasta do projeto no VS Code.

Instale a extensão Live Server (se ainda não tiver).

Clique no botão "Go Live" no canto inferior direito do editor.

📄 Licença

Este projeto está sob a licença MIT.