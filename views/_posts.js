const postsArray = require('../posts')

const createPostsList = (obj) => {
    let list = '';
    Object.keys(obj).map((el) => list += `<li><a href = "http://localhost:3000/posts/${el}"><span style = "color: red;">id:</span> ${el}, <span style = "color: red;">content:</span> ${postsArray[el].content.substr(0, 20)}...</a></li>`)
    return list;
}

module.exports = content => `
<h1>Posts page</h1>
<h3 style = "color: blue;">${content}</h3>
<ol>${createPostsList(postsArray)}</ol>
`;