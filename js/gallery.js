//Variable declaration
var display = document.querySelector('figure.display');

var thumbnail = document.querySelector('ul.thumbBarImgs');


// Thumbnail Images and imformation
var imageList = [
	{
		'src' : 'images/flowers-pink-small.jpg',
		
		'title' : 'Pink flower',
		'description': 'Pink flowers are used as a symbol of love and awareness.',
		
	},
	{
		'src' : 'images/flowers-purple-small.jpg',
		'title' : 'purple flower',
		'description':'Purple is a common choice of flower due to its variety of hues and calming effect on a space.'
	},
	{
		'src' : 'images/flowers-red-small.jpg',
		'title' : 'Red flower',
		'description': 'The red flower is a symbol of remembrance and a lively imagination. ',
	},
	{
		'src' : 'images/flowers-white-small.jpg',
		'title' : 'White flower',
		'description': 'White orchids symbolize beauty, innocence, and elegance',
	},
	{
		'src' : 'images/flowers-yellow-small.jpg',
		'title' : 'Yellow flower',
		'description': 'Yellow flowers bring some sunshine to a landscape, even on a cloudy day.',
	}
];

// Setup th
for(var i = 0; i < imageList.length; i++) {
	var newthum = document.createElement('li');
	var newImage = document.createElement('img');
	newImage.setAttribute('src', imageList[i].src);

	newImage.setAttribute('title', imageList[i].title);
	newImage.setAttribute('alt', imageList[i].description);

	newImage.index = i;
	newImage.className = 'thumbnail';
	newthum.appendChild(newImage);
	thumbnail.appendChild(newthum);
}

// Call and display the first image to display Bar
var slideIndex = 0;
currentSlide(slideIndex);

// Thumbnail clickable to change the image on display bar
thumbnail.onclick = function (event) {
	if(event.target && event.target.nodeName === 'IMG') {
		currentSlide(event.target.index);
	}
};

// Display where bigger image will be shown 
function displayImage(img) {
	display.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
	display.querySelector('img').setAttribute('alt', img.getAttribute('alt'));
	display.querySelector('h3').innerHTML = img.getAttribute('title');
	display.querySelector('a').href = img.getAttribute('url');
	display.querySelector('figcaption').innerHTML = img.getAttribute('alt');
}

// Thumbnails
function outlineClearing() {
	var thumbnailImage = document.querySelectorAll('img.thumbnail');
	for(var i = 0; i < thumbnailImage.length; i++) {
		// Remove the "active" in class to avoid the css agreement
		thumbnailImage[i].className = thumbnailImage[i].className.replace (' active', '');
	}
}




// current slide index
function currentSlide(n) {
	showSlide(slideIndex = n);
}

// setting up the thumnailbar and displaybar
function showSlide(n) {
	var thumbnailImage = document.querySelectorAll('img.thumbnail');
	if (n >= thumbnailImage.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = thumbnailImage.length - 1;
	}

	outlineClearing();

	thumbnailImage[slideIndex].className += ' active';
	displayImage(thumbnailImage[slideIndex]);
}


