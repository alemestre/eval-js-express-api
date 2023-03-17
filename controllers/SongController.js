const Song = require("../models/SongModel.js");

exports.create = (request, result) => {

    const json = JSON.parse(request.body.song);

    const song = new Song({
      title: json.title,
      artist: json.artist,
      album: json.album,
      releaseYear: json.releaseYear,
      genre: json.genre
    });

    song
      .save()
      .then((data) => result.status(201).send(data))
      .catch((error) => result.status(500).send({ message: error.message }));
};

exports.getAll = (request, result) => {
  Song.find()
    .then((data) => result.send(data))
    .catch((error) => {
      result.status(500).send({ message: error.message });
    });
};

exports.get = (request, result) => {
  const id = request.params.id;

  Song.findById(id)
    .then((song) => {
      if (!song) {
        return result
          .status(404)
          .send({ message: `L'id ${id} n'existe pas` });
      }
      return result.send(song);
    })
    .catch((error) => {
      result.status(500).send({ message: error.message });
    });
};

exports.delete = (request, result) => {
  const id = request.params.id;
  Song.findOneAndRemove({ id : id }).then((song) => {
    if (!song) {
      return result
        .status(404)
        .send({ message: `La chanson avec l'id ${id} n'\existe pas ` });
    }
    return result.send({ message: "La chanson a bien été supprimée" });
  });
};
