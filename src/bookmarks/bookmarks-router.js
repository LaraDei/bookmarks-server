const express = require('express')
const { v4: uuidv4 } = require('uuid')
const logger = require('../logger')
const { bookmarks } = require('../store')
const { isWebUri } = require('valid-url')

const bookmarkRouter = express.Router()
const bodyParser = express.json()

bookmarkRouter
  .route('/bookmarks')
  .get((req, res) => {
    res
    .json(bookmarks)
  })
  .post(bodyParser, (req, res) => {
    const { title, url, description, rating } = req.body

    for (const field of ['title', 'url', 'rating']) {
      if (!req.body[field]) {
        logger.error(`${field} is required`)
        return res.status(400).send(`'${field}' is required`)
      }
    }

    if (!Number.isInteger(rating) || rating < 0 || rating > 5) {
      logger.error(`Invalid rating '${rating}' supplied`)
      return res.status(400).send(`'rating' must be a number between 0 and 5`)
    }

    if (!isWebUri(url)) {
      logger.error(`Invalid url '${url}' supplied`)
      return res.status(400).send(`'url' must be a valid URL`)
    }

    const id = uuidv4()

    const bookmark = {
    id,
    title,
    url,
    description,
    rating
    }

    bookmarks.push(bookmark)

    logger.info(`bookmark with id ${id} created`)

    res
    .status(201)
    .location(`http://localhost:8000/bookmarks/${id}`)
    .json(bookmark)
  })

bookmarkRouter
  .route('/bookmarks/:id')
  .get((req, res) => {
    const { id } = req.params;
    const bookmark = bookmarks.find(b => b.id == id)
  
    // make sure we found a card
    if (!bookmark) {
      logger.error(`bookmark with id ${id} not found.`)
      return res
        .status(404)
        .send('bookmark Not Found')
    }
  
    res.json(card)
  })
  .delete((req, res) => {
    const { id } = req.params
  
    const bookmarkIndex = bookmarks.findIndex(b => b.id == id)
  
    if (bookmarkIndex === -1) {
      logger.error(`Bookmark with id ${id} not found.`)
      return res
        .status(404)
        .send('Not found')
    }

    bookmarks.splice(bookmarkIndex, 1)
  
    logger.info(`Bookmark with id ${id} deleted.`)
  
    res
      .status(204)
      .end()
  })

module.exports = bookmarkRouter