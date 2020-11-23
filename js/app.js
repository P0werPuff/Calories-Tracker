const addButton = document.querySelector('#add');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
const totalSpan = document.querySelector('.total-calories');
const list = document.querySelector('#item-list');
let total = 0;

addButton.addEventListener('click', (event)=> {
    let mealName = foodName.nodeValue;
    let mealCalories = parseInt (foodCalories.value);
    console.log(typeof(mealCalories));
    total += mealCalories;
    totalSpan.innerHTML = total;

    let ListItem = document.createElement('li');
    ListItem.classList.add('collection-item');
    let text = `Food: ${mealName}. Calories: ${mealCalories}`;
    ListItem.appendChild(document.createTextNode(text));
    ListItem.appendChild(ListItem);

    foodName.value = '';
    foodCalories.value = '';



    event.preventDefault();

});
