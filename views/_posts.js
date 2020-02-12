const postsArray = require('../posts')

// const slug = text => text.trim().split(' ').map(el => el.toLowerCase()).join('-');
const slug = text => text.match(/[A-z\s]/g).join("").replace(/post/g, 'Post').replace(/\s+/g, '-')

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