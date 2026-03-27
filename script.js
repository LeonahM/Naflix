// Seleciona o botão e o body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se já existe uma preferência salva no navegador
const currentTheme = localStorage.getItem('theme');

// Se tiver salvo 'light', já começa com as cores claras
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggleBtn.textContent = '🌙 Modo Escuro';
}

// Cria o evento de clique no botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe no body (se não tem, coloca; se tem, tira)
    body.classList.toggle('light-mode');

    // Verifica o estado atual e atualiza o texto do botão e a memória
    if (body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggleBtn.textContent = '☀️ ';
        localStorage.setItem('theme', 'dark');
    }
    
});
// Event listener para armazenar perfil ativo
const profileLinks = document.querySelectorAll('.profile a');

profileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Obt�m o elemento do perfil mais pr�ximo
        const profileElement = link.closest('.profile');
        
        // Verifica se n�o � o perfil de adicionar
        if (!profileElement.classList.contains('add-profile')) {
            const profileName = link.querySelector('p').textContent;
            const profileImage = link.querySelector('img').src;
            
            // Armazena no localStorage
            localStorage.setItem('activeProfile', JSON.stringify({
                name: profileName,
                image: profileImage
            }));
        }
    });
});
