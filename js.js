document.querySelector('.firstQ').style="color:red;background-color:black";
const p=document.querySelector('#pId');
p.style.fontWeight="bold";
p.classList.add("style");

document.querySelector('img').src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqsQrVAsGDmz_hscnxZxaVf7yoZeauqErzWgeGETDkj8JDs5rpIy3JtmGsi4o4uuYhPRphABOMasGaEBexkFwltUJ7iwxKaSq2KzQgVoYkxeIjSeHIS48RU-A4bDok-2zQCJQgvA&usqp=CAc";

const ul = document.querySelector("ul");

let li = document.createElement("li");

for (let i = 1; i <= 3; i++) {
	const ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.append("Mada")
    ul.append(li);
    
}
ul.style="display:flex";
const lis=document.querySelectorAll("li");
lis.forEach((li)=>li.style="font-family:'Franklin Gothic Medium';width:30%;border: 2px solid purple;");
let table = document.createElement("table");
table.classList.add("table");
for (let n = 1; n <= 2; n++) {
	let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td.append("Mada");td1.append("Mada");td2.append("Mada");
    tr.append(td); tr.append(td1);tr.append(td2);
    table.append(tr);
  
    
}

document.querySelector('body').append(table);