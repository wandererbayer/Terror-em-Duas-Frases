
const API_KEY = "AIzaSyB5k8QPYQmHjCyPxPxXFXCZcRTLxPVOJsE";
const API_URL = "https://api.gemini.com/v1/generate";

const textInput = document.getElementById("textInput");
const outputDiv = document.getElementById("output");

async function gerarFrase() 
{
    try 
    {
        const response = await axios.post(API_URL, 
        {
            key: API_KEY,
        });

        const frases = response.data.frases;

        document.querySelector(".frase_1").textContent = frases[0];
        document.querySelector(".frase_2").textContent = frases[1];
    } 
    catch (error) 
    {
        console.error(error);
        document.querySelector(".frase_1").textContent = "Erro ao gerar a primeira frase.";
        document.querySelector(".frase_2").textContent = "Erro ao gerar a segunda frase.";
    }
}

const generateButton = document.querySelector(".btn");
generateButton.addEventListener("click", gerarFrase);