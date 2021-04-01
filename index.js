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

  const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
app.listen(port, () => console.log(`Success! Your application is running on \"http://localhost:${port}\"`));