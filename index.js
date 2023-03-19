const express = require('express')
const cors = require('cors');

const app = express()

const mongoose = require('mongoose');
const Song = require('./models/SongModel')

const {checkSchema , validationResult} = require('express-validator')
const SongSchema = require('./schema/SongSchema')

const port = 3000

//rend le contenu accessible à l'extérieur du dossier public 
app.use(express.static('public'))

app.use('/assets', express.static('./client/assets'))
app.use('/templates', express.static('./client/templates'))
app.use('/services', express.static('./services'))
app.use('/class', express.static('./class'))

// Handl request with an "application/json" content-type
app.use(express.json())

// Accept request from different origins
app.use(cors());



app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})


// Connexion à la base de données MongoDB Atlas
mongoose.connect('mongodb+srv://amelie:SLKSEv6HNrZlcFAh@cluster0.vcztw.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connexion à la base de données MongoDB Atlas réussie');
})
.catch((err) => {
  console.error('Erreur de connexion à la base de données MongoDB Atlas', err);
});

// we define the hompe page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html')
});


// We get all the routes
const songRoutes = require('./routes/song.routes');

app.use('/', songRoutes);


