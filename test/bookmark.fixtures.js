function makeBookmarksArray() {
    return [
      {
        id: 1,
        title: 'Task One',
        url: 'https://www.bookmark.com',
        rating: 4,
        description: 'This is bookmark one',
      },
      {
        id: 2,
        title: 'Google',
        url: 'https://www.google.com',
        rating: 4,
        description: 'google it',
      },
      {
        id: 3,
        title: 'Thinkful',
        url: 'https://www.thinkful.com',
        rating: 5,
        description: 'bootcamp',
      },
    ]
  }
  
  module.exports = {
    makeBookmarksArray,
  }