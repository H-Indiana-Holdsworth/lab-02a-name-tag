//this gets the element that holds the person's name
const nameElement = document.getElementById('name');
console.log(nameElement);
//get the button
const updateButton = document.getElementById('update-button');
console.log(updateButton);
//get an input
const nameInput = document.getElementById('name-input');

//user clicks button
updateButton.addEventListener('click', () => {

    const name = nameInput.value;

    nameElement.textContent = name;

});
