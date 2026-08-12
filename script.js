document.addEventListener('DOMContentLoaded', () => {
    console.log('Clube da Luluzinha carregado com sucesso! 🎀');
    
    // Alerta divertido ao marcar o compromisso dos 15 minutos
    const checkboxFix = document.getElementById('check-fix');
    if (checkboxFix) {
        checkboxFix.addEventListener('change', (e) => {
            if (e.target.checked) {
                alert('Parabéns! Tentar resolver sozinha desenvolve sua autonomia e os professores valorizam muito isso.');
            }
        });
    }

    // Controle simulado do envio de feedback do professor
    const formProfessor = document.getElementById('form-professor');
    if (formProfessor) {
        formProfessor.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita o recarregamento da página
            
            const nome = document.getElementById('nome-prof').value;
            const texto = document.getElementById('texto-feedback').value;
            
            alert(`Obrigado pelo feedback, ${nome}! Seu recado foi guardado no painel.`);
            
            // Limpa o formulário após o envio
            formProfessor.reset();
        });
    }
});
