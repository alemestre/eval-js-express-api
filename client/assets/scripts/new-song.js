import { SongService as Service } from "../../../services/SongService.js";
import { SongClass } from "../../../class/SongClass.js";

const SongService = new Service()
let btnNew= document.querySelector('#add-btn')


let inputTitle = document.querySelector("input#title")
let inputArtist = document.querySelector("input#artist")
let inputGenre = document.querySelector("input#genre")
let inputAlbum = document.querySelector("input#album")
let inputReleaseYear = document.querySelector("input#releaseYear")

btnNew.addEventListener('click', ()=>{

    console.log('btn cliqué')
    
    let newSong= new SongClass(
        null, 
        inputTitle.value, 
        inputArtist.value, 
        inputAlbum.value, 
        inputReleaseYear.value, 
        inputGenre.value)

    let promise = SongService.create(newSong)
    promise.then(()=> {
        inputTitle.value = '';
        inputGenre.value = "";
        inputArtist.value = "";
        inputAlbum.value = "";
        inputReleaseYear.value = "";
    })
    .then(()=> location.href= '/')
})