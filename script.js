const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Verifica se o usuário tem preferência por tema escuro no sistema
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Função para atualizar o ícone
function updateIcon() {
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('ph-moon');
        icon.classList.add('ph-sun');
    } else {
        icon.classList.remove('ph-sun');
        icon.classList.add('ph-moon');
    }
}

// Carrega tema inicial
if (prefersDarkScheme.matches) {
    body.classList.add('dark-mode');
    updateIcon();
}

// Evento de clique
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateIcon();
});

async function loadLinks() {
    try {
        // Busca o arquivo JSON
        const response = await fetch('links.json');
        const links = await response.json();
        
        const container = document.getElementById('links-container');

        // Itera sobre cada link e cria o HTML
        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-card';
            linkElement.target = '_blank'; // Abre em nova aba

            // Monta o conteúdo interno do link (Ícone + Texto + Seta)
            linkElement.innerHTML = `
                <i class="ph ${link.icon}"></i>
                <span>${link.title}</span>
                <i class="ph ph-arrow-right share-icon"></i>
            `;

            container.appendChild(linkElement);
        });

    } catch (error) {
        console.error('Erro ao carregar os links:', error);
    }
}

// Executa a função quando a página carregar
document.addEventListener('DOMContentLoaded', loadLinks);

const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;