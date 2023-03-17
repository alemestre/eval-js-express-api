import { SongService as Service } from "../../../services/SongService.js";

const SongService = new Service()

let tbody = document.querySelector('#songsList')


function createTemplate(data){

    let mySong = document.createElement('tr');

    let title = document.createElement('td');
    title.innerText = data.title;

    let artist = document.createElement('td');
    artist.innerText = data.artist;

    let album = document.createElement('td');
    album.innerText = data.album;

    let releaseYear = document.createElement('td');
    releaseYear.innerText = data.releaseYear;

    let genre = document.createElement('td');
    genre.innerText = data.genre;

    let detailsCel = document.createElement('td');
    let myLinkToDetails = document.createElement('a');

    let icone1 = document.createElement('i');
    icone1.classList.add('fas','fa-light', 'fa-circle-info');

    myLinkToDetails.setAttribute('href', ' ./templates/details.html#' + data._id);
    myLinkToDetails.appendChild(icone1);
    detailsCel.appendChild(myLinkToDetails);
    detailsCel.style.textAlign = 'center';

    let deleteCel = document.createElement('td');
    let deleteBtn = document.createElement('btn');

    let icone2 = document.createElement('i');
    icone2.classList.add('btn', 'btn-danger',  'btn-sm','fas','fa-light', 'fa-trash');

    deleteBtn.appendChild(icone2);
    deleteCel.appendChild(deleteBtn);
    deleteCel.style.textAlign = 'center';

    // let myDelete = document.createElement('td');
    tbody.appendChild(mySong);
    mySong.appendChild(title);
    mySong.appendChild(artist);
    mySong.appendChild(album);
    mySong.appendChild(releaseYear);
    mySong.appendChild(genre);
    mySong.appendChild(detailsCel)
    mySong.appendChild(deleteCel)

    deleteBtn.addEventListener('click', () => {
        SongService.delete(data._id)
      });

}

const songsList = SongService.getAll()

songsList.then(data => { data.map((song) => createTemplate(song))})
    .catch(e => console.log(`Error message : ${e}`))
