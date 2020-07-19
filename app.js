const reviews = [
{
	id: 1,
	name: "Susan Smith",
	date: "Reviewed on 2 May 2019",
	img: "images/user3img.png",                                                              
	text: "I am happy with the phone and the deal i got from the company. I wanted a good smartphone that did the basics, and the site recommended one that ticked all the boxes. Speaking with the service team got me exactly what i was looking for.",
},
{
	id: 2,
	name: "Anna Jhonson",
	date: "Reviewed on 16 September 2019",
	img: "images/user5.png",
	text: "I ordered a pair of sport shoes from WEUNITE and wanted to say that i got exactly the same product that was shown in the image plus i got 100% value for my money, the shoes are of great quality and are very comfortable."
},
{
	id: 3,
	name: "James Patrick",
	date: "Reviewed on 24 June 2020",
	img: "images/user2img.jpeg",
	text: "Great value for money, my watch is now 1 year old since i bought it from them and it still appears to be in excellent condition and its performance is also upto the mark. Highly impressed and looking forward to make more purchases."
},
{

	id: 4,
	name: "Adam Wick",
	date: "Reviewed on 7 Feburary 2020",
	img: "images/user4img.png",
	text: "WEunite have great service for exchanging of old or damage products. Once my product got accidentally damaged their team exchanged it to a newer version within 7 days of my report at a discounted rate i felt it was my best experience so far of my online shopping."
}
]
//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const date = document.getElementById("date");
const info = document.getElementById("info");

//select buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
	showPerson();
})

//show person based on item
function showPerson() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	date.textContent = item.date;
	info.textContent = item.text;
}

//next button functionality
nextBtn.addEventListener('click' , () => {
	currentItem++;
	if(currentItem > reviews.length - 1){
		currentItem = 0;
	}
	showPerson();
})

//previous button functionality
prevBtn.addEventListener('click' , () => {
	currentItem--;
	if(currentItem < 0){
		currentItem = reviews.length - 1;
	}
	showPerson();
})

//surprise/rndom button functionality
randomBtn.addEventListener('click', () => {
	 currentItem = Math.floor(Math.random() * reviews.length);
	 showPerson();
})
















