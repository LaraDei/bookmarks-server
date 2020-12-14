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
  function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.hackers.com',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark
  }