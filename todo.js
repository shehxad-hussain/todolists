// const button = document.querySelector('#button');
// button.addEventListener('submit',  function(e) {
//    alert("sumnit");
// });

// const button  = document.querySelector('button');
// const input  = document.querySelector('input');
// button.addEventListener('click', function () {
//     alert("hloo");
// })

// const newInput = input.value;

// const newList = document.createElement('li');

// input.append(`${newInput}`);


const input = document.querySelector('input');

// input.addEventListener('change', function(e) {
//    console.log("aasjagdja");
// })


// input.addEventListener('input', function(e) {
//    console.log("sadfdad");
// })


// var myTodolist = document.getElementsByTagName("li");

// var i;

// for(i = 0; i < myTodolist; i++) {
//     var btn = document.createElement("btn");
//     var txt = document.createTextNode("");

//     btn.appendChild(txt);
// }
// myTodolist[i].appendChild(btn);


// function newElement() {
//     var li = document.createElement('li');
//     var inputValue = document.getElementById("newInput").value;
//     var txt = document.createTextNode(inputValue);
//     li.appendChild(txt);
// }
// document.getElementById("newInput").value = "";

// var newListElement = document.createElement('li');
// var inputBox = document.getElementById('todoInput');
// var btnAdd = document.getElementById('add-list');

// var currentInputValue = '';
// inputBox.addEventListener('input', function(e) {

// })

// btnAdd.addEventListener('click', function() {
//     var newList = document.createElement('li')
//     var textNode = document.createTextNode('currentInputValue')
//     newListElement.appendChild(textNode);
//     newListElement.id = "item" + (this.childElementCount + 1);

//     List.appendChild(newListElement);
//     console.log(List.childElementCount);

// });

var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');


var currentInputValue = '';
inputBox.addEventListener('input', function(e) {
  currentInputValue =  e.target.value;
});

inputBox.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addListItem()
    }
    });

        function addListItem() {

            if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') 
            {
             
            var newListElement = document.createElement('li');
            var textNode = document.createTextNode(currentInputValue);
            newListElement.appendChild(textNode);
            newListElement.id = "item" + (list.childElementCount + 1);
            list.appendChild(newListElement);
            
            inputBox.value = '';
            currentInputValue = '';
            }else {
                alert('please enter valid Todo List');
            }
        }

        list.addEventListener('click', function(e) {
          e.target.remove();
        })

btnAdd.addEventListener('click', addListItem);