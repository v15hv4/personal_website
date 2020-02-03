var imgList = ['res/img/gallery1.jpg', 
            'res/img/gallery2.jpg', 
            'res/img/gallery3.jpg',
            'res/img/gallery4.jpg',
            'res/img/gallery5.jpg']

var imgContainer = document.getElementById('gallery_pics');

var counter = 0;

function slideshow() {
    counter = (counter + 1) % 5;
    imgContainer.src = imgList[counter];
}
