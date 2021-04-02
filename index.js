const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('ok')
});





const d = new Date();
const TIME = d.getHours() + ":" + d.getSeconds();


app.get('/', (req, res) => {
    res.send('ok')
});

app.get('/test', (req, res) => {
    res.status(200).send('ok');
});

app.get('/time', (req, res) => {
    let t = TIME;
    res.status(200).send(String(t));
});
app.get('/', (req, res) => {
    res.send('ok');
  });

  app.get('/test', (req, res) => {
    res.status(200).send('message:"ok"');
  });
  var date = new Date();
  app.get('/time', (req, res) => {
    res.status(200).send(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  });

  app.get('/hello', (req, res) => {
    res.status(200).send('Hello')
  });

  app.get('/hello/:id', (req, res) => {
    res.status(200).send('Hello ' + req.params.id)
  });


  app.get('/search', (req, res) => {
    if (req.query.s == "" || req.query.s == undefined) {
      res.status(500).send('you have to provide a search');
    } else {
      res.status(200).send('ok ' + req.query.s)
    }
  });
   

  app.get('/movies/create', (req, res) => {
    res.send('create');

  });

  app.get('/movies/update', (req, res) => {

    res.send('update');
  });


  app.get('/movies/read', (req, res) => {
   
    
});

app.get('/movies/delete', (req, res) => {

    res.send('delete');
});
app.get('/movie/read/:action', (req, res) => {

    if (req.params.action == "by-date") {
      const sortByDate = movies.sort((a, b) => (a.year > b.year) ? 1 : -1)
      res.status(200).send({
        data: sortByDate
      });
    } else if (req.params.action == "by-rating") {
      const sortByRating = movies.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
      res.status(200).send({
        data: sortByRating
      });
    } else if (req.params.action == "by-title") {
      const sortByTitle = movies.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
      res.status(200).send({
        data: sortByTitle
      });
    } else {
      res.status(200).send("error");
    }
  });


  app.get('/movies/:id', (req, res) => {
    let id = (req.params.id) - 1;
    if (!movies[id]) {
      res.status(404).send({
        error: true,
        message: "the movie " + (id + 1) + ' does not exist '
      });
    } else {
      res.status(200).send(movies[id]);
    }
  });


  app.post('/movies', (req, res) => {
    const newTitle = req.body.title;
    const newYear = parseInt(req.body.year);
    const newRating = req.body.rating;

    
      if (newTitle == "" || newTitle == undefined || //missing title
        newYear == "" || newYear == undefined || //missing year
        newYear < 1000 || newYear > 9999 || (!newYear)) //unacceptable year value
      {
        res.status(403).json({message: "You cannot create a movie without providing s title and a year"});
        return;
      } else if (newRating == "" || newRating == undefined) {

        movies.push({
        title:newTitle,
        year:newYear,
        rating: 4});
        res.status(200).send(movies);
      
    }else{

      movies.push({
        title:newTitle,
        year:newYear,
        rating: newRating});
        res.status(200).send(movies);
      }
    });

    app.delete('/movies/:id', (req, res) => {
        let id = (req.params.id) - 1;
        const allMovies = {
          data: movies
        };
        if (!movies[id]) {
          res.status(404).send({
            error: true,
            message: "the movie " + (id + 1) + ' does not exist '
          });
        } else {
          movies.splice(id, 1);
          res.status(200).send(allMovies);
        }
      });
      app.put('/movies/:id', (req, res) => {
        const selectId = (req.params.id) - 1;
        const newTitle = req.body.title;
        const newRating = req.body.rating;
       
  
        if (!movies[selectId]) {
          res.status(404).send({
            error: true,
            message: "the movie " + (selectId + 1) + ' does not exist '
          });
        } else if ((newTitle == "" || newTitle == undefined) && (newRating == "" || newRating == undefined)) {
          res.status(200).send({
            data: movies
          });
        } else if (newTitle == "" || newTitle == undefined) {
          movies[selectId].rating = newRating;
          res.status(200).send({
            data: movies
          });
        } else if (newRating == "" || newRating == undefined) {
          movies[selectId].title = newTitle;
          res.status(200).send({
            data: movies
          });
        } else {
          movies[selectId].title = newTitle;
          movies[selectId].rating = newRating;
          res.status(200).send({
            data: movies
          });
        }
      });
  
  //creat db
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('C:/Users/coyboy/repos/MovieDB/MovieDB/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})
app.post('/info', (req, res) => {
 
  console.log(req.body);
});

// USER
MongoClient.connect(/* ... */)
  .then(client => {

    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('info')

   
  })
  const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
app.listen(port, () => console.log(`Success! Your application is running on \"http://localhost:${port}\"`));
