const { v4: uuidv4 } = require('uuid')

const bookmarks = [
    {
        id: uuidv4(),
        title: 'Task One',
        url: 'https://www.bookmark.com',
        description: 'This is bookmark one',
        rating: 4
    },
    {
        id: uuidv4(),
        title: 'Google',
        url: 'https://www.google.com',
        description: 'google it',
        rating: 5
        }

]
  
  module.exports = {bookmarks}