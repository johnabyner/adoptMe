// //divs
// const divCreateDogs = document.querySelector('#createDogs');
// const divShowDogs = document.querySelector('#showDogs');
// //formulario
// const nameDog = document.querySelector('#name');
// const raceDog = document.querySelector('#race');
// const colorDog = document.querySelector('#color');

// //quando clicar no botao
// document.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('buttonDogs')){
//         fetch('/dogs')
//             .then(data => {
//                 const dogsParagraph = addP();
//                 divCreateDogs.remove();

//                 dogsParagraph.textContent = JSON.stringify(data);
//             })
//             .catch(e => console.log(e));
//     }
// })

// //FUNÇOES
// //AdicionarParagrafo
// function addP(){
//     try{
//         const paragraph = document.createElement('p');
    
//         paragraph.classList.add('dogsParagraph');
//         divShowDogs.appendChild(paragraph);

//         return paragraph
//     }catch(err){
//         console.log(`Erro em adicionar Paragrafo \n${err}`)
//     }
// };
