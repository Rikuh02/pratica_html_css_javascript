const cursos = document.querySelector("#cursos_opcoes")
const child = [...document.querySelectorAll(".cursos")]

const opcoes = ["HTML", "CSS", "Javacript", "PHP", "C++", "C#", "MySql", "Node.js"] //declaração de uma array

const selecionar = document.getElementById("selecionado")//botao selecionado
const remover = document.getElementById("remover") //botao remover

//adicionar os botoes antes e depois
const antes = document.getElementById("adicionar_antes")
const depois = document.getElementById("adicionar_depois")

//adicionando o input
const nomeDeCurso = document.getElementById("nome_curso")

let indice = 0

const criarNovoCurso = (curso) =>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c" + indice)
    novoElemento.setAttribute("class","cursos")
    novoElemento.innerHTML = curso

    const comando =document.createElement("div")
    comando.setAttribute("class","comando")

    const btn_circulo = document.createElement("input")
    btn_circulo.setAttribute("type", "radio")
    btn_circulo.setAttribute("name", "circulo")

    comando.appendChild(btn_circulo)
    novoElemento.appendChild(comando)
    cursos.appendChild(novoElemento)
    
    return novoElemento

}


opcoes.map((el, chave)=>{ //a chave possui uma numeração que pode ser usada
   
    const novoCurso = criarNovoCurso(el)
    indice++
})

//trabalhando com botoes - remover

remover.addEventListener("click", (evet)=>{

    const rs = radioSelecionado()

    if(rs!=undefined){
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove() //remove um objeto no dom
    }else{
        alert("Escolha um curso")
    }
    
})

//trabalhando com botoes - selecionar

const radioSelecionado = () =>{

    const todosRadios = [...document.querySelectorAll("input[type=radio]")] // pega o input do tipo radio adicionados por javascript
    const radioSelecionado = todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    
    return radioSelecionado[0]

}

selecionar.addEventListener("click", (evt)=>{
    
    const rs = radioSelecionado()
    
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("cursoSelecionado: " + cursoSelecionado)
    }else{
        alert("Escolha um curso")
    }
   
})

//trabalando com os botoes antes e depois
antes.addEventListener("click", (event)=>{
    
    const rs = radioSelecionado()
    
    if(rs!=undefined){

        if(nomeDeCurso.value !== ""){

            const cursoSelecionado = rs.parentNode.parentNode
            const novoCursoInserir = criarNovoCurso(nomeDeCurso.value)
            cursos.insertBefore(novoCursoInserir,cursoSelecionado) //adicionar antes

        }else{
            alert("Digite um curso")
        }
        
    }else{
        alert("Escolha um curso")
    }

})

depois.addEventListener("click", (event)=>{

    const rs = radioSelecionado()
    
    if(rs!=undefined){

        if(nomeDeCurso.value !== ""){

            const cursoSelecionado = rs.parentNode.parentNode
            const novoCursoInserir = criarNovoCurso(nomeDeCurso.value)
            cursos.insertBefore(novoCursoInserir,cursoSelecionado.nextSibling) //adicionar antes
          
        }else{
            alert("Digite um curso")
        }
        
    }else{
        alert("Escolha um curso")
    }
    
})