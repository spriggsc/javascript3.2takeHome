




// day3 takehome
// Prompt the user for something that they would like to do.
// Make sure that the user actually types something.
// If the user has not typed anything, alert them that they need to type something and then terminate the program.
// If they have input a to do item, alert the user with the item and console log it.

// var firstName = prompt("what is your first name?");
// var lastName = prompt("what is your last name?");
// console.log(firstName);
// //alert(lastName);
// confirm(firstName + lastName);
// // var age = prompt("how old are you?");
// // if(age>18);{
// //     alert("Your a youngin!");
// // }else {
// //     alert("Get off my lawn!");
// // }

// // var x, y;

// // do {
// //     x = Number(prompt("You must enter a number"));
// // } while (isNaN(x));

// // do {
// //     y = Number(prompt("You must enter a number"));
// // } while (isNaN(y));

// // alert(x + y);

// function validate(form) {
//     var isChecked = Array.prototype.some.call(form.querySelectorAll('input[name=gender]'), function (radio) {
//         return radio.checked;
//     });

//     if (!isChecked) {
//         alert("You must select Male or Female");
//     }

//     return isChecked;
// }

// document.getElementById('test').addEventListener('submit', function (evt) {
//     if (!validate(evt.target)) {
//         evt.preventDefault();
//     }
// });

// // <script>
// //     function validate(form) {
// //         var gender = form.querySelectorAll('input[name="gender"]:checked');
// //         if (!gender.length) {
// //             alert('You must select male or female');
// //             return false;
// //         }
// //     }
// // </script>



//   var x, y;

// do {
//     x = Number(prompt("You must enter a number"));
// } while (isNaN(x));

// do {
//     y = Number(prompt("You must enter a number"));
// } while (isNaN(y));

// alert(x + y);

var x = Number (prompt("Enter a number", [])); 
  if (isNaN(x))
   {
   prompt("Only numbers please", []);
   }
var y = Number (prompt("Enter a number", []));
  if (isNaN(y))
   {
   prompt("Only numbers please", []);
   } 
  if (Number.isInteger)alert(x + y);
  else {
    alert (x + y);
  }


