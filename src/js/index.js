 const personagens = document.querySelectorAll('.personagem');
  personagens.forEach((personagem) => {
     personagem.addEventListener('mouseenter', () => {
        const idSelecioando = personagem.attributes.id.value;

        if(idSelecioando === 'hulk') return;  
        
        const personagemSelecionado = document.querySelector('.selecionado');
         personagemSelecionado.classList.remove('selecionado');
         personagem.classList.add('selecionado');
        
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecioando}.png`
        
        const nomeSelecionado = document.getElementById('nome-personagem-1')
        const nomejogador1 = personagem.getAttribute('data-name')
        nomeSelecionado.innerHTML = `${nomejogador1}`
        
    })
 })