// Procurar o botão e adicionar o evento de click
document.querySelector("#add-time").addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input');

    // Para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    });

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}