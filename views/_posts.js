const postsArray = require('../posts')

const createPostsList = (obj) => {
    let list = '';
    Object.keys(obj).map((el, i) => list += `<li><a href = "http://localhost:3000/posts/${el}">id: ${el},  title: ${postsArray[el].title}.</a></li>`)
    return list;
}

module.exports = content => `
<h1>Posts</h1>
<h3 style = "color: blue;">${content}</h3>
<ul>${createPostsList(postsArray)}</ul>
`;