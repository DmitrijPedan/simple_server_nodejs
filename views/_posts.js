const postsArray = require('../posts')

// const slug = text => text.trim().split(' ').map(el => el.toLowerCase()).join('-');
const slug = text => text.match(/[A-z\s]/g).join("").replace(/post/g, 'Post').replace(/\s+/g, '-')

const createPostsList = (arr) => {
    let list = '';
    for (let i = 0; i < arr.length; i++) {
      list += `<li><a href = "http://localhost:3000/posts/${arr[i].id}">id: ${arr[i].id},  title: ${arr[i].title}.</a></li>`
    }
    return list;
}

module.exports = content => `
<h1>Posts</h1>
<h3 style = "color: blue;">${content}</h3>
<ul>${createPostsList(postsArray)}</ul>
`;