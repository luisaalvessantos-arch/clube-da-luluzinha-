document.addEventListener('DOMContentLoaded', () => {
    console.log('Clube da Luluzinha carregado com sucesso! 🎀');
    
    // Lista de frases interativas da Lulu
    const frasesLulu = [
        "Olá, professor! Sabia que a Luluzinha revisou toda a matéria antes de publicar essa dúvida? 📚",
        "Seja bem-vindo ao nosso clube! Fique à vontade para deixar um recado ali no formulário. 💬",
        "Dica do dia: Se a Luluzinha te entregou tudo no prazo, ela merece um pontinho extra! 👑",
        "Estou aqui para garantir que a comunicação seja rápida e organizada. Sem bagunça por aqui! ✨",
        "Você sabia? A regra dos 15 minutos salva vidas (e o tempo dos professores)! ⏱️"
    ];

    let indiceFrase = 0;
    const balaoFala = document.getElementById('balao-fala');
    const avatarLulu = document.getElementById('avatar-lulu');

    // Troca de frases ao clicar na assistente
    if (avatarLulu && balaoFala) {
        avatarLulu.addEventListener('click', () => {
            // Avança para a próxima frase da lista
            indiceFrase = (indiceFrase + 1) % frasesLulu.length;
            balaoFala.innerText = frasesLulu[indiceFrase];
            
            // Pequeno efeito físico de pulo na boneca ao clicar
            avatarLulu.style.transform = "scale(0.9) translateY(5px)";
            setTimeout(() => {
                avatarLulu.style.transform = "";
            }, 150);
        });
    }
    
    // Alerta divertido ao marcar o compromisso dos 15 minutos
    const checkboxFix = document.getElementById('check-fix');
    if (checkboxFix) {
        checkboxFix.addEventListener('change', (e) => {
            if (e.target.checked) {
                alert('Parabéns! Tentar resolver sozinha desenvolve sua autonomia e os professores valorizam muito isso.');
                if (balaoFala) balaoFala.innerText = "Isso aí! Autonomia é o segredo do sucesso no nosso clube! 💪🌟";
            }
        });
    }

    // Controle simulado do envio de feedback do professor
    const formProfessor = document.getElementById('form-professor');
    if (formProfessor) {
        formProfessor.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const nome = document.getElementById('nome-prof').value;
            alert(`Obrigado pelo feedback, ${nome}! Seu recado foi guardado no painel.`);
            
            if (balaoFala) balaoFala.innerText = `Oba! O(A) ${nome} deixou um feedback para nós! Vamos analisar juntas. 💕`;
            
            formProfessor.reset();
        });
    }
});
