const heading3 = document.createElement('h3');
const headingText = document.createTextNode('Buy high quality organic fruits online');
heading3.appendChild(headingText);
const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(heading3);
heading3.style.fontStyle = 'italic'
const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
const fruits = document.querySelector('.fruits');
const secondDiv = divs[1];
secondDiv.insertBefore(para, fruits);
para.id = "fruits-total";
