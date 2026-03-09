function toggleMostrarMais() {
    // Pegar todos os itens ocultos
    const itensOcultos = document.querySelectorAll('.item-oculto');
    // Pegar o botão
    const btn = document.getElementById('btnMostrarMais');
    // Pegar o texto do botão
    const textoBtn = btn.querySelector('.item-texto');

    // Verificar se está expandido
    const btnExpandido = btn.getAttribute('aria-expanded') === 'true';

    if (btnExpandido) {
        // Esconder os itens
        itensOcultos.forEach(item => {
            item.style.display = 'none';
        });
        // Mudar texto para "Mostrar mais"
        textoBtn.textContent = 'Mostrar mais';
        // Atualizar ARIA
        btn.setAttribute('aria-expanded', 'false');
        // Remover classe expandido
        btn.classList.remove('expandido');
    } else {
        // Mostrar os itens
        itensOcultos.forEach(item => {
            item.style.display = 'flex';
        });
        // Mudar texto para "Mostrar menos"
        textoBtn.textContent = 'Mostrar menos';
        // Atualizar ARIA
        btn.setAttribute('aria-expanded', 'true');
        // Adicionar classe expandido
        btn.classList.add('expandido');
    }
}