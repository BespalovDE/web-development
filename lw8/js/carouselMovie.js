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
    let doc = document.getElementsByClassName('movie_Picture');
    let newData = getFilmInfo(doc[0].getAttribute("alt"), -1);
    rect.innerHTML = '<img src="' + newData.url + '" class="movie_Picture" alt="' + newData.name + '">'
                   + '<h4>' + newData.name + '</h4>'
                   + '<p>' + newData.info + '</p>';
	return rect;
}

function createFilmUppend() {
    const rect = document.createElement('div');
    rect.classList.add('movie', 'left_Movie');
    let doc = document.getElementsByClassName('movie_Picture');
    let newData = getFilmInfo(doc[doc.length - 1].getAttribute("alt"), 1);
    rect.innerHTML = '<img src="' + newData.url + '" class="movie_Picture" alt="' + newData.name + '">'
                   + '<h4>' + newData.name + '</h4>'
                   + '<p>' + newData.info + '</p>';
	return rect;
}

function onAddFilmRight() {
    const newRect = createFilmUppend();
    let elem = document.getElementById("movie_block");
    elem.removeChild(elem.firstElementChild);  
    elem.firstElementChild.classList.remove('left_Movie');
	elem.appendChild(newRect);
}

function onAddFilmLeft() {
    const newRect = createFilmBefore();
    let elem = document.getElementById('movie_block');
    elem.removeChild(elem.lastElementChild);
    elem.firstElementChild.classList.add('left_Movie');
    elem.prepend(newRect);
}


function run() {
    const addRectLeftMovie = document.getElementById('rightMovie');
    addRectLeftMovie.addEventListener('click', onAddFilmRight); 
    const addRectRightMovie = document.getElementById('leftMovie');
    addRectRightMovie.addEventListener('click', onAddFilmLeft);
}

window.onload = run;