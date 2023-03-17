export class SongClass {
    _id;
    title;
    artist;
    album;
    releaseYear;
    genre;
  
    constructor(id, title, artist, album , releaseYear, genre) {
      this._id = id;
      this.title = title;
      this.artist = artist;
      this.genre = genre;
      this.album = album;
      this.releaseYear = releaseYear;
    }
  
    get _id() {
      return this._id;
    }
  
    set _id(id) {
      this._id = id;
    }
    
    get title() {
      return this.title;
    }
  
    set title(title) {
      this.title = title;
    }
  
    get genre() {
      return this._genre;
    }
  
    set genre(tmp) {
      this._genre = tmp;
    }
  
    get artist() {
      return this.artist;
    }
  
    set artist(artist) {
      this.artist = artist;
    }
  
    get releaseYear() {
      return this.releaseYear;
    }
  
    set releaseYear(releaseYear) {
      this.releaseYear = releaseYear;
    }
  
    get album() {
      return this.album;
    }
  
    set album(album) {
      this.album = album;
    }
  
  }