const express    = require('express')
const app        = express()
const bodyparser = require('body-parser')
const mongoose   = require('mongoose')

app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))

const db = require('./db/db').mongoURL;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
const Species = require('./modal/speciesdata')
app.route('/articles')

  .get((req, res) => {
    Species.find((err, foundArticles) => {
      if(err) {
        res.send(err)
      } else {
        res.send(foundArticles)
      }
    })
  })

  .post((req, res) => {
    const newArticle = new Species({
      name   : req.body.name,
      size : req.body.size,
      colour : req.body.colour,
      weight : req.body.weight
    })
    newArticle.save((err) => {
      if(err) {
        res.send('Error in adding new article')
      } else {
        res.send('Successfully added new article')
      }
    })
  })

  .delete((req, res) => {
    Species.deleteMany((err) => {
      if(err) {
        res.send('Error in deleting articles')
      } else {
        res.send('Successfully deleted all the articles')
      }
    })
  })

  mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
  const Speciesight = require('./modal/speciesSightData')
  app.route('/articles')
  
    .get((req, res) => {
      Speciesight.find((err, foundArticles) => {
        if(err) {
          res.send(err)
        } else {
          res.send(foundArticles)
        }
      })
    })
  
    .post((req, res) => {
      const newArticle = new Speciesight({
        species   : req.body.species,
        date : req.body.date,
        location : req.body.location
      })
      newArticle.save((err) => {
        if(err) {
          res.send('Error in adding new article')
        } else {
          res.send('Successfully added new article')
        }
      })
    })
     
    .delete((req, res) => {
      Speciesight.deleteMany((err) => {
        if(err) {
          res.send('Error in deleting articles')
        } else {
          res.send('Successfully deleted all the articles')
        }
      })
    })

const PORT= process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log(`server is running at ${PORT}`)
})