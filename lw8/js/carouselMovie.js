function getMassiv(filmName, stateAdd, ) {
    let i = 0;
    let resultArray = [];
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
    resultArray.push(myfilms[i].name);
    resultArray.push(myfilms[i].url);
    resultArray.push(myfilms[i].info);
    return resultArray;
}

function createRectBefore() {
    const rect = document.createElement('div');
    rect.classList.add('movie');
    let newData = getMassiv(document.getElementsByClassName('movie_Picture')[0].getAttribute("alt"), -1);
    rect.innerHTML = '<img src="' + newData[1] + '" class="movie_Picture" alt="' + newData[0] + '">'
                   + '<h4>' + newData[0] + '</h4>'
                   + '<p>' + newData[2] + '</p>';
	return rect;
}

function createRectUppend() {
    const rect = document.createElement('div');
    rect.classList.add('movie', 'left_Movie');
    let doc = document.getElementsByClassName('movie_Picture');
    let newData = getMassiv(doc[doc.length - 1].getAttribute("alt"), 1);
    rect.innerHTML = '<img src="' + newData[1] + '" class="movie_Picture" alt="' + newData[0] + '">'
                   + '<h4>' + newData[0] + '</h4>'
                   + '<p>' + newData[2] + '</p>';
	return rect;
}

function onAddRight() {
    const rectsArr = [];
    const newRect = createRectUppend();
    let elem = document.getElementById("movie_block");
    elem.removeChild(elem.firstElementChild);  
    elem.firstElementChild.classList.remove('left_Movie');
	elem.appendChild(newRect);
	rectsArr.push(newRect);
}

function onAddLeft() {
    const rectsArr = [];
    const newRect = createRectBefore();
    let elem = document.getElementById('movie_block');
    elem.removeChild(elem.lastElementChild);
    elem.firstElementChild.classList.add('left_Movie');
    elem.prepend(newRect);
	rectsArr.push(newRect);
}


function run() {
    const addRectLeftMovie = document.getElementById('rightMovie');
    addRectLeftMovie.addEventListener('click', onAddRight); 
    const addRectRightMovie = document.getElementById('leftMovie');
    addRectRightMovie.addEventListener('click', onAddLeft);
}

window.onload = run;