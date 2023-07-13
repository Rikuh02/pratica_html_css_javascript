
//primeiro adiquirir os item que deseja trabalhar

const caixa1 = document.querySelector("#caixa1") //#ID = para adicionar uma id no query
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_trasferir")
const todos_cursos = [...document.querySelectorAll(".curso")] //.class = para adicionar uma class // operador spread [...] para trasformar a coleção em array

// usar o loop para percorrer a coleção html usando o map(percorre toda a função e retorna um valor especifico de um array)(callback)

todos_cursos.map((el)=>{

    el.addEventListener("click",(evt)=>{
        const curso = evt.target   
        curso.classList.toggle("selecionado") //.toggle() - entre adicionar e remover um nome de classe de um elemento com JavaScript.
    })

})

btn.addEventListener("click",()=>{
    
    const cursos_selecionados = [...document.querySelectorAll(".selecionado")]
    const cursos_Naoselecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    //console.log(cursos_selecionados)

    //passar os elemntos selecionados para a outra caixa
    cursos_selecionados.map((el)=>{
        caixa2.appendChild(el) // anexa um elemento
    })

    cursos_Naoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
    
})
