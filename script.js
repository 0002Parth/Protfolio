// let words = document.querySelectorAll(".word");
// words.forEach((word)=>{
//     let letters = word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>
//     { 
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         word.append(span);

//     })
// })

// let currentWordIndex = 0;
// let maxWordIndex = words.length -1;
// words[currentWordIndex].style.opacity = "-1";

// let changeText = ()=>
// {
//     let currentWordIndex = words[currentWordIndex];
//     let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

//     Array.from(currentWord.children).forEach((letter,i)=>{
//         setTimeout(()=>{
//             letter.className = "letter out";
//         },i*80);
//     });
//     nextWord.style.opacity="1";
//     Array.from(nextWord.children).forEach((letter,i)=>{
//         letter.className = "letter behind";
//         setTimeout(()=>{
//             letter.className = "letter in";
//         },340 + i * 80);
//     });
//     currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
// };
// changeText()
// setInterval (changeText ,3000)

































// (function() {

//     var word = ['hello world', 'codepen', 'developer', 'thank you'];
//     var element = document.getElementsByTagName('p')[0];
//     var wordIndex = 1;

//     var resetAnimation = function() {
//       element.classList.remove('flip');
//     }

//     setInterval(function(){
//         switch (wordIndex) {
//           case 0:
//             element.classList.add('flip');
//             element.textContent = word[wordIndex];
//             wordIndex = 1;
//             setTimeout(resetAnimation, 1000);
//           break;

//           case 1:
//             element.classList.add('flip');
//             element.textContent = word[wordIndex];
//             wordIndex = 2;
//             setTimeout(resetAnimation, 1000);
//           break;

//           case 2:
//             element.classList.add('flip');
//             element.textContent = word[wordIndex];
//             wordIndex = 3;
//             setTimeout(resetAnimation, 1000);
//           break;

//           case 3:
//             element.classList.add('flip');
//             element.textContent = word[wordIndex];
//             wordIndex = 0;
//             setTimeout(resetAnimation, 1000);
//           break;
//         }
//     }   ,2000)
// }());







































document .addEventListener('mousemove',(e)=>{
    const height = circle.offsetHeight;
    const width = circle.offsetwidht;
    
    if (e.target.tagName === 'A' ||
        e.target.tagName == 'BUTTON' ||
        e.target.parentNode.tagName == 'BUTTON'){
            circle.classList.add('big');
        } else{
            circle.classList.remove('big');

        }
        setTimeout(()=>  {
            circle.style.left = `${e.pageX - width/2}px`
            circle.style.top = `${e.pageY - height/2}px`
        },20);
        });