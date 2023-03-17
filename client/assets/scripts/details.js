import { SongService as Service } from "../../../services/SongService.js";
import { SongClass } from "../../../class/SongClass.js";

const SongService = new Service()

let songTitle = document.querySelector("#songTitle")
let inputTitle = document.querySelector("input#title")
let inputArtist = document.querySelector("input#artist")
let inputGenre = document.querySelector("input#genre")
let inputAlbum = document.querySelector("input#album")
let inputReleaseYear = document.querySelector("input#releaseYear")



function insertData(data)  {
    inputTitle.value = data.title 
    inputArtist.value = data.artist  
    inputGenre.value = data.genre
    inputAlbum.value = data.album
    inputReleaseYear.value = data.releaseYear    

    songTitle.textContent= data.title


    let modifBtn = document.querySelector('#update-btn')
    modifBtn.addEventListener('click', ()=>{
        let tmpSong =  new SongClass(
            data._id,
            inputTitle.value,
            inputArtist.value,
            inputAlbum.value,
            inputReleaseYear.value,
            inputGenre.value 
        )

        console.log(tmpSong)

        SongService.update(tmpSong)
        .then(() => location.href='/' )
    })
    
}


let id = window.location.hash.substring(1)

const song = SongService.get(id)
song.then((data) => insertData(data))
    .catch(e => console.log(`Error message : ${e}`))    
    



