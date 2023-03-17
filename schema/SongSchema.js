const SongSchema = {
    title: {
        notEmpty: true,
        errorMessage: 'Title field cannot be empty',
    },
    artist: {
        notEmpty: true,
        errorMessage: 'Artist cannot be empty',
    },
    album: {
        notEmpty: true,
        errorMessage: 'Album field cannot be empty',
    },
    releaseYear : {
        notEmpty: true,
        errorMessage: 'The release field cannot be empty',
    },
    genre: {
        notEmpty: true,
        errorMessage: 'Genre field cannot be empty',
    }
}