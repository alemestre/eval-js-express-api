var express = require('express');
var router = express.Router();

const Song = require('../models/SongModel')
const {checkSchema , validationResult} = require('express-validator')
const SongSchema = require('../schema/SongSchema')


// router.get('/', function(req, res) {
//     let path = __dirname
//     console.log(path)

//     path.replace("routes/","")

//     console.log(path)

//     // res.sendFile(path + '/client/index.html')
// });


// Get all songs
router.get('/songs', async (req, res) => {
  try {

    const songs = await Song.find();
    res.status(200)
    res.json(songs);
    
  } catch (err) {
    res.status(500)
    res.send(err);
  }
});

// Get one song
router.get('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res
        .status(404)
        .send({ message: `La chanson avec l'${id} n'existe pas ` });
    }
    res.status(200)
    res.json(song);
  } catch (err) {
    res.status(500)
    res.send(err);
  }
});

// Add as song
router.post('/songs', checkSchema(SongSchema), async (req, res) => {
  try {
    const song = new Song(req.body);

    // we check if the title is empty
    if (song.title == "" || song.title == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Le titre de la chanson ne peut pas être vide` });

    }
    // we check if the artist is empty
    if (song.artist == "" || song.artist == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Le nom de l'artiste doit être renseingé` });

    }
    // we check if the releaseYear is empty
    if (song.releaseYear == "" || song.releaseYear == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Merci de préciser une année de sortie pour cette chanson` });

    }

    // we check if the genre is empty
    if (song.genre == "" || song.genre == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Merci de préciser un genre musical pour cette chanson` });

    }
    const savedsong = await song.save();
    res.status(201)
    res.json(savedsong);
  } catch (err) {
    res.status(500)
    res.send(err);
  }
});


// Update a song 
router.put('/songs/:id', checkSchema(SongSchema), async (req, res) => {

  try {

    // J'ai essayé d'utiliser express-validator mais la fonction validationResult ne renvoie aucune erreur...
    // const errors = validationResult(req);
    
    // if (!errors.isEmpty()) {
    //   console.log('erreur')
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const song = new Song(req.body);

    // we check if the title is empty
    if (song.title == "" || song.title == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Le titre de la chanson ne peut pas être vide` });

    }
    // we check if the artist is empty
    if (song.artist == "" || song.artist == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Le nom de l'artiste doit être renseingé` });

    }
    // we check if the releaseYear is empty
    if (song.releaseYear == "" || song.releaseYear == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Merci de préciser une année de sortie pour cette chanson` });

    }

    // we check if the genre is empty
    if (song.genre == "" || song.genre == undefined)
    { 
      return res
        .status(404)
        .send({ message: `Merci de préciser un genre musical pour cette chanson` });

    }

    const updatedSong = await Song.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSong);

    } catch (err) {
      res.send(err);
    }
  });


  //Delete a song
  router.delete('/songs/:id', (req, res) => {
    const id = req.params.id;
    Song.findByIdAndRemove(id).then((song) => {
      if (!song) {
        return result
          .status(404)
          .send({ message: `La chanson avec l'id ${id} n'\existe pas ` });
      }
      return res.send({ message: "Le meme a bien été supprimé" });
    });
  });


 
  


module.exports = router;
