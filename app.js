// My code goes hero__video

document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});

//example: DOMContentLoaded - best use:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <link rel="stylesheet" href="/css/styles.css" />
//     <script>
//       document.addEventListener('DOMContentLoaded', function () {
//           document.querySelector('footer').style.backgroundColor = 'purple';
//       });
//     </script>
//***********************************

// So event.target gives us direct access to the paragraph element that was clicked.
// Because we have access to the element directly, we can access its .textContent,
// modify its styles, update the classes it has - we can do anything we want
// to it!

// const myCustomDiv = document.createElement('div');
//
// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }
//
// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;
//
//     myCustomDiv.appendChild(newElement);
// }
//
// document.body.appendChild(myCustomDiv);
//
// myCustomDiv.addEventListener('click', respondToTheClick);
//
// document.querySelector('#content').addEventListener('click', function (evt) {
//     if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
//         console.log('A span was clicked with text ' + evt.target.textContent);
//     }
// });
//
// // check using capital letters
// if (evt.target.nodeName === 'SPAN') {
//     console.log('A span was clicked with text ' + evt.target.textContent);
// }
//
// > // convert nodeName to lowercase
// if (evt.target.nodeName.toLowerCase() === 'span') {
//     console.log('A span was clicked with text ' + evt.target.textContent);
// }


// **************************
//
// const myCustomDiv = document.createElement('div');
//
// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;
//
//     newElement.addEventListener('click', function respondToTheClick(evt) {
//         console.log('A paragraph was clicked.');
//     });
//
//     myCustomDiv.appendChild(newElement);
// }
//
// document.body.appendChild(myCustomDiv);

// ***************************

// const links = document.querySelectorAll('a');
// const thirdLink = links[2];
//
// thirdLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log("Look, ma! We didn't navigate to a new page!");
// });
//
//
// document.addEventListener('click', function(){
//   console.log('the document was clicked');
// });
//
// document.body.addEventListener('click', function(){
//   console.log('The body of the document was clicked');
// });
//
// document.addEventListener('click', function () {
//    console.log('The document was clicked at capture');
// }, true);
//
// document.addEventListener('click', function(event){
//   console.log(event);
// });

// document.body.addEventListener('keypress', function (){
//   console.log('removing first child');
//   document.querySelector('#contain-all').firstElementChild.remove();
// });

// document.addEventListener('click', function(){
//   const mainHeading = document.querySelector('h1');
//   mainHeading.style.backgroundColor = 'red';
//   mainHeading.style.fontSize = '5em';
// })

// const mainHeading = document.querySelector('h6');
// collabHeading = mainHeading.querySelector('h6.white mb-half');
//collabHeading.style.fontSize = '2em';
// collabHeading.style.color = 'purple';
