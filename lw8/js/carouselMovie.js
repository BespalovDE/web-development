function getFilmInfo(filmName, stateAdd) {
    let i = 0;
    for (i = 0; i < myfilms.length; i++) {
        if (filmName == myfilms[i].name) {
          break;
        }
    }
    if (i + stateAdd < myfilms.length && i + stateAdd >= 0)
    {
        i = i + stateAdd;
    } else {
        (i + stateAdd < 0)
        ? i = myfilms.length - 1
        : i = 0;
    }
    return myfilms[i];
}

function createFilmBefore() {
    const rect = document.createElement('div');
    rect.classList.add('movie');
    let doc = document.getElementsByClassName('movie_picture');
    let newData = getFilmInfo(doc[0].getAttribute("alt"), -1);
    rect.innerHTML = '<img src="' + newData.url + '" class="movie_picture" alt="' + newData.name + '">'
                   + '<h3>' + newData.name + '</h3>'
                   + '<p>' + newData.info + '</p>';
	return rect;
}

function createFilmUppend() {
    const rect = document.createElement('div');
    rect.classList.add('movie', 'left_movie');
    let doc = document.getElementsByClassName('movie_picture');
    let newData = getFilmInfo(doc[doc.length - 1].getAttribute("alt"), 1);
    rect.innerHTML = '<img src="' + newData.url + '" class="movie_picture" alt="' + newData.name + '">'
                   + '<h3>' + newData.name + '</h3>'
                   + '<p>' + newData.info + '</p>';
	return rect;
}

function onAddFilmRight() {
    const newRect = createFilmUppend();
    let elem = document.getElementById("movies_block");
    elem.removeChild(elem.firstElementChild);  
    elem.firstElementChild.classList.remove('left_movie');
	elem.appendChild(newRect);
}

function onAddFilmLeft() {
    const newRect = createFilmBefore();
    let elem = document.getElementById('movies_block');
    elem.removeChild(elem.lastElementChild);
    elem.firstElementChild.classList.add('left_movie');
    elem.prepend(newRect);
}


function run() {
    const addRectLeftMovie = document.getElementById('right_movie');
    addRectLeftMovie.addEventListener('click', onAddFilmRight); 
    const addRectRightMovie = document.getElementById('left_movie');
    addRectRightMovie.addEventListener('click', onAddFilmLeft);
}

window.onload = run;