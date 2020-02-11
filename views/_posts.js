const postsArray = require('../posts')

const createPostsList = (arr) => {
    let list = '';
    for (let i = 0; i < arr.length; i++) {
      list += `<li><a href = "http://localhost:3000/posts/${arr[i].id}">${arr[i].title}</a></li>`
    }
    return list;
}

module.exports = content => `
<h1>Posts</h1>
<h3 style = "color: blue;">${content}</h3>
<ul>${createPostsList(postsArray)}</ul>
`;