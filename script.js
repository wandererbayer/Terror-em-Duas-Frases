function gerarFrase() 
{
    const llamaUrl = 'https://api.llama3.com/model';
    fetch(llamaUrl)
        .then(response => response.json())
        .then(data => {

        const model = data.model;

        // Use o modelo para gerar frases
        const frase1 = model.generateText('frase aleatória', {
            max_length: 50,
            temperature: 0.7,
            top_p: 0.9
        });

        const frase2 = model.generateText('frase aleatória', {
            max_length: 50,
            temperature: 0.7,
            top_p: 0.9
        });

        // Atualize os elementos h2 com as frases geradas
        document.querySelector('.frase_1').innerHTML = frase1;
        document.querySelector('.frase_2').innerHTML = frase2;
    });

    document.querySelector('.btn').addEventListener('click', gerarFrase);
}