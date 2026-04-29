const base_uri = "https://my-json-server.typicode.com/stellaNicolau123/fake-api-3a-divb"

const renderizarCursos = (cursos)=>{
    const container = document.getElementById("cursos")
    container.innerHTML = ""

    cursos.forEach(cursos=>{
        const card = document.createElement("div")
        card.className = "card"

        const titulo = document.createElement("h2")
        titulo.textContent = curso.nome
            
        const carga = document.createElement("p")
        carga.textContent = "Carga Horária" + curso["carga-horaria"] + "h"
        
        const divDisciplinas = document.createElement("div")

        curso.disciplinas.forEach(disciplina =>{
            const span = document.createElement("span")
            span.className = "disciplina"
            span.textContent = disciplina
            divDisciplinas.appendChild(span)
        })

        card.appendChild(titulo)
        card.appendChild(carga)
        card.appendChild(divDisciplinas)
        
        container.appendChild(card)
    })
}

const carregarDados = async ()=>{
    try{

    } catch(erro){
        console.error("Erro", erro)
    }
}