// FOR THE SAKE OF PRECISION WE WONT MAKE USE OF THE GETELEMENT BY TAGNAME BECAUSE ITS NOT COMMONLY USED WE WILL ONLY MAKE USE OF getelementbyId and querryselector
// ALSO IF YOU CHECK THE BELOW PART OF THIS CODE YOU WILL SEE SOME OTHER INSTACE OF THE CO
// THIS TUTORIAL WILL BE BASED ON WHATS ITS GENERALLY USED BECAUSE OF TIME
// getElementByTagname
// getElementById
// querrySelector
// Targeting of an html element is done in two ways which will be discussed below
// 1) You can target it uniquely 
// 2) You can target it using the parent
// 1 UNIQUELY
// #########  ##########

// The structure of targetting an element is shown below
// const  name your variable = document(because html is seen as a document in javascript).targetingmethod('item');
// since we have already created a variable called hedo then we can always grab the variable and attach any function we want to it

const hedo = document.querySelector('h1');
hedo.style.color = "blue";
// in css we will say background-color
// in javascript we will say backgroundColor 
// Javascript uses camelCase method for naming items you cant say font-size its fontSize so please take note of this

// ##### 2 USING THE PARENT METHOD
// first declare or target the parant element
const parent = document.querySelector('.tagname');
const small = parent.querySelector('small');

small.style.backgroundColor = "purple";
small.style.color = "white";
// small.innerHTML = "HELLO i am changed by javascript";
// please comment the above code to see how we can change the textcontent of an element more will be thought in the next slides

// *********GET ELEMENT BY ID
// example 
const button = document.getElementById('submit');
const eventing = document.getElementById('eventing');
// Lets target an id using querrySelector
const clickBtn = document.querySelector('#click');
const relax = document.querySelector('#relax');

// Now lets add some more intresting stuffs
clickBtn.addEventListener('click', ()=>{
  relax.textContent = "HEY BUDDY I AM CHANGED";
  button.style.backgroundColor = "green";
});


// THE ABOVE PART WILL BE FUTHER EXPLAINED LATER BUT FOR NOW JUST GET THE CONCEPT WE ARE DRIVING AT .

// ####### ALL YOU NEED TODO FOR PRATICE IS TO ACTUALLY CREATE HTML ELEMENT YOURSELF AND STYLE THEM USING JAVASCRIPT . IF YOU ARE CURIOUS ABOUT EVENTLISTNERS YOU CAN CHECK ONLINE FOR MORE INFORMATIONS . BUT IT WILL BE COVERED IN THE NEXT UPCOMING TOPICS

// ########################################################################################################################################################################################################
// THE BELOW ARE FOR FUTHER LEARNING ON YOUR OWN 

// document.getElementById('btn').style.backgroundColor = 'red';
// const btn = document.getElementById('btn');
// btn.style.fontSize = '10px';
// const css = btn.style;
// css.fontWeight = '800';
// css.color = 'white';
// css.width = '200px';
// css.borderRadius = '10px';
// IN THE NEXT CLASS WE WILL LEARN ON HOW TO USE OBJECT NOTATION FOR STYLING 




// //  GET ELEMENT BY TAGNAME TUTORIAL
//   const heading = document.getElementsByTagName('h2');
//   heading[0].style.color = 'blue';
//   heading[1].style.color = 'purple';
// //   NOTE THAT THE HEADING IS gonna be in an array type but its definitely not an array. but we could still attach the index to it.
// //  NOTE THAT javascript is dynamic if you delete heading one definetly the heading 2 which is "hello pretty will become blue";
//     const items = document.getElementsByTagName('li');
//     // For Each will not work on the node list;
//     const betterItems = [...items]; //this makes it turn into an array .
//     betterItems.forEach(function (items) {
  //        // console.log(items);
//     })
//     items[2].style.color = 'yellowgreen';


//    // console.log(items);
//    // console.log(betterItems);
//      // let colorArray = ['red', 'yellow', 'blue', 'orange', 'pink', 'green', 'grey'];

//               // GET ELEMENT BY CLASS NAME;
//      const listitems = document.getElementsByClassName('listitem');
//      listitems[5].style.color = 'green';


//                   // QUERRY SELECTORS
//      // 1 select the element or group of element that we want
//      // 2 Decide the effect we want to apply to the selection

//      // querySelector('any css'); - selects single
//      // querySelectorAll('any css'); - selects all
//      // it uses selections like css #, . 
//      const list = document.querySelector('#list');
//      list.style.backgroundColor = 'blue';
//      const listing = document.querySelectorAll('.listitem');
//      const lastItem = document.querySelector('li:last-child');
//      lastItem.style.fontSize = '20px';

//          // ADVANTAGE OF QUERYSELCTORALL IS that we can use forEach with it
//           const form = document.querySelectorAll('.listitem');
//           form.forEach(elem => {
  
  //               elem.style.fontSize = '30px';
//           }); 
//           document.getElementById('dayo').style.color = 'blue';


// button.addEventListener('click', (e)=> {
// e.preventDefault();

// });
//           // CHILD NODE JAVASCRIPT ITS CALLED DOM TREE 
//           // REMEMBER YOUR QUERRY SELECTOR INPUTS ARE SIMILAR TO CSS INPUT FOR CALLING HTML ELEMENT
//           const result = document.querySelector('#result');
//           const allChildren = result.childNodes;
//           // console.log(allChildren);
//           // NOTE THAT CHILDNODES WILL INCLUDE ALL THE WHITE SPACE IN THE PARENT.
//             const children = result.children;
//             // console.log(children);
//             // children[1].style.listStyle = 'none';


//             // PARENT ELEMENT METHOD
//       const headinged = document.querySelector('h2');
//             console.log(headinged);






// var titles = document.getElementsByClassName('title');
// console.log(titles);
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
// // console.log(Array.isArray(Array.from(titles)));is used to convert a set of items into an array;
// Array.from(titles).forEach(function(item) {
//     console.log(item);
// })
// const randomNumber =  13;
// document.querySelector('.form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     let value = document.getElementById('amount').value; 
//     value = parseInt(value);
//     console.log('Input Value Type');
//     console.log(value);
//     console.log('sum of the two values');
//     document.write(randomNumber + value);
// });