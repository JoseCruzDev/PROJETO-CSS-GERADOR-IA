let botao = document.querySelector(".botao-gerador")
botao.addEventListener("click", gerarcodigo)
let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarcodigo (){

let textousuario = document.querySelector (".caixa-texto").value
let blococodigo = document.querySelector (".bloco-codigo")
let resultadocodigo = document.querySelector (".resultado-codigo")
let resposta = await fetch(endereco,{
    method: "POST",
    headers: {
"Content-Type": "application/json",
"Authorization": "Bearer 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" 
    },

    body: JSON.stringify({
    model: "llama-3.3-70b-versatile",  
    messages: [{

            role: "system",
            content: "Você é um gerador de código HTML e CSS. Responda somente com código puro. Nunca use crases, maarkdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translatY no @Keyframes. Se pedir algo girando, use rotate."
    },

    {

    role: "user",
    content:textousuario

    }

]


    })
})


let dados = await resposta.json()
let resultado = dados.choices[0].message.content

blococodigo.textContent = resultado
resultadocodigo.srcdoc = resultado


}