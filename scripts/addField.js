// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
 .addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.array.forEach(function(field) {
        field.value = ""
    });

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}