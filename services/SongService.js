import { SongClass } from "../class/SongClass.js";

export class SongService {

  constructor() {

  }

  /**
   *  retun one particular song 
   * 
   * @param {SongClass} songDTO
   * @return {SongClass}
   */
  create = (song) => {

    let url = '/song/';
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(song)
    };
  
    return fetch(url, options)
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
    })
    .then((data)=> {
      console.log(data)
      return new SongClass(data._id, data.title, data.artist, data.album, data.releaseYear, data.genre)
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
  }
  

  /**
   * return all the songs in the database
   * @return {SongClass[]}
   */
  getAll = () => {
    let myHeaders = new Headers();
    let url = '/songs';
    let options = {
      method: 'GET',
      headers: myHeaders
    };
    
    return fetch(url, options)
    .then((res) => {
        if(res.ok){
            return res.json() 
        }
    })
    .then(data => {
      let songList = []
        data.map(song => {
          songList.push(new SongClass(song._id, song.title, song.artist, song.album, song.releaseYear, song.genre))
        })
      return songList
    })
    .catch(e => console.log(`Error message : ${e}`))

    }

  /**
   *  retun one particular song 
   * 
   * @param {string} id 
   * @return {SongClass}
   */
  get = (id) => {
    let myHeaders = new Headers();
    let url = `/song/${id}`;
    let options = {
      method: 'GET',
      headers: myHeaders
    };
    return fetch(url, options)
    .then((res) => {
        if(res.ok){
            
          return res.json() 
        }
    })
    .then((data)=> {
      return new SongClass(data._id, data.title, data.artist, data.album, data.releaseYear, data.genre)
    })
    .catch(e => console.log(`Error message : ${e}`))

  };

  /**
   *  delete one particular song 
   * 
   * @param {string} id 
   * 
   */
  delete = (id) => {
    let url = '/song/' + id;
    let myHeaders = new Headers();
    let options = {
      method : 'DELETE', 
      headers: myHeaders
    };
  
    console.log(url)
    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('chanson supprimée');
          location.reload();
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }


  update = (tmpSong) => {
      let url = '/song/' + tmpSong._id;
      let options = {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(tmpSong)
      };
  
      return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
    }
   
}
