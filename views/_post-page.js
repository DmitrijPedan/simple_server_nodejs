const postsArray = require('../posts');

module.exports = (content, postId) => `
<h1>${content}</h1>
<h3 style = "color: blue;">${postsArray[postId].title}</h3>
<p style = "color: green;">${postsArray[postId].content}</p>
`;