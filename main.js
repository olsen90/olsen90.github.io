// Custom built function to terminate js script:
function abort()
{
   throw new Error('Terminated');
}


// Program that takes the sum of two numbers:
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener('input', add)
numTwo.addEventListener('input', add)

function add() {
  // parseFloat changes string to number.
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  var sum = one + two;
  addSum.innerHTML = 'The sum of your numbers is: '+sum;
};


// Program that shows one of three pictures:
var apple = document.getElementById("apple")
// var applePic = document.getElementById("apple-pic")
var orange = document.getElementById("orange")
// var orangePic = document.getElementById("orange-pic")
var banana = document.getElementById("banana")
// var bananaPic = document.getElementById("banana-pic")


// The following is NOT DRY (Don't Repeat Yourself) code,
// so use alternative below:
// apple.addEventListener("click", function() {
//   if (applePic.className === "hide") {
//     applePic.className = "";
//   } else {
//     applePic.className = "hide";
//   }
// });
// orange.addEventListener("click", function() {
//   if (orangePic.className === "hide") {
//     orangePic.className = "";
//   } else {
//     orangePic.className = "hide";
//   }
// });
// banana.addEventListener("click", function() {
//   if (bananaPic.className === "hide") {
//     bananaPic.className = "";
//   } else {
//     bananaPic.className = "hide";
//   }
// });

apple.addEventListener('click', picLink);
orange.addEventListener('click', picLink);
banana.addEventListener('click', picLink);

function picLink() {
// Setting a universal ID as the data-img ID, using attributes:
  var picId = this.attributes['data-img'].value;
  var pic = document.getElementById(picId)

  if (pic.className == 'hide') {
    var allImages = document.querySelectorAll('img');

    for (var i = 0; i < allImages.length; i++) {
      allImages[i].className = 'hide';
    }
    pic.className = '';
}
  else {
    pic.className = 'hide';
  };
}


// Program that allows checklist to be edited real time:
var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  // Select text automatically:
  input.setSelectionRange(0,input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress() {
  // 'which' returns the key that was pressed (enter = 13)
  if (event.which == 13) {
    // Passing the value of 'this' from one function to the other.
    // (Changing the context)
    updateItem.call(this);
  }
}

for (i = 0; i < items.length; i++) {
  items[i].addEventListener("click",editItem);
  inputs[i].addEventListener("blur",updateItem);
  inputs[i].addEventListener("keypress",itemKeypress);
}
















// Termination command:
abort()

// Functions:
function introduction(name,age){
  alert('The owner of this webpage is called '+name+
  ', and he is '+age+' years old.')
}

// Using prompts, and including the input in a function:
var name = prompt('What is your name?');
var age = prompt('What is your age?');
introduction(name,age);


// Arrays can hold all types of variables, including
// functions and other arrays.

var myList = ['apples','oranges','bananas'];

// myList.shift() returns and removes first item of myList
// myList.pop() returns and removes last item of myList
// myList.forEach automatically creates a function, that returns
// the value and index of myList. This can e.g. be used as follows:
myList.forEach(function(value,index){
  console.log(value,index);
  alert('I have '+value+' in my basket.')
})

// While-loops:
var i = 0;
while (i < 10) {
  console.log('tried '+i);  // Prints contents of () in the console.
  i++;                      // Increments i by 1.
}

// For-loops:
for (var i = 0; i < myList.length; i++) {
  console.log('I have '+myList[i]+' in my basket')
}


// Pull out values of HTML code, e.g. .<class>, #<id>, <p>, <h1> etc.
document.querySelector('.col');
// This can be defined as a variable, e.g.:
var colClass = document.querySelector('.col');
// Redefine HTML output, e.g. title, as follows:
colClass[1].innerHTML = 'New title';

// Pull out or reassign the element's class name:
colClass.className;
colClass.className = column;
colClass.className = colClass.className + 'column';

// See and manipulate with list of classes assigned to element:
colClass.classList;
colClass.classList.add('column');
colClass.classList.remove('column');

// Climb around in the element hierarchy:
colClass[1].parentElement;
colClass[1].parentElement.children;
colClass[1].childElement;
colClass[1].childElement.parents;
