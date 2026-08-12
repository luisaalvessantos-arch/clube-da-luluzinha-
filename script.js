// Log básico para confirmar que o site está funcionando corretamente
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portal de Estudos carregado com sucesso!');
    
    // Interatividade simples para o checklist
    const checkbox = document.getElementById('check-fix');
    if(checkbox) {
        checkbox.addEventListener('change', (e) => {
            if(e.target.checked) {
                alert('Ótimo! Revisar o próprio trabalho poupa o tempo do professor.');
            }
        });
    }
});
