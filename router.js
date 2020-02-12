const htmlCreator = require('./views');
const postsArray = require('./posts');

const slug = text => text.match(/[A-z\s]/g).join("").replace(/post/g, 'Post').replace(/\s+/g, '-')

module.exports = (req,res) => {
  
    const url = req.url.match(/[^/]{1,}/g);

    switch (true) {
        case (!Array.isArray(url) || url[0] === 'home' && !url[1]):
            return res.end(htmlCreator("This is home page", 'home', 'Home page'));
        case (url[0] === 'about' && !url[1]):
            return res.end(htmlCreator("This is about page", 'about', 'About page'));
        case (url[0] === 'posts' && !url[1]):
            return res.end(htmlCreator("This is posts list page:", 'posts', 'Posts list page'));
        case (url[0] === 'posts' && url[1] in postsArray):
            return res.end(htmlCreator(`Post id: ${url[1]}`, 'post', slug(postsArray[url[1]].title), url[1] ));
        default:
            return res.end(htmlCreator("Page not found, error 404", 'error', 'Error'));
    }
}