const htmlCreator = require('./views');
const postsArray = require('./posts');
const slug = require('./slug');

module.exports = (req,res) => {
    console.log(req.url);
    const url = req.url.match(/[^/]{1,}/g);
    
    switch (true) {
        case (!Array.isArray(url) || url[0] === 'home' && !url[1]):
            return res.end(htmlCreator("This is home page", 'home', 'Home page'));
        case (url[0] === 'about' && !url[1]):
            return res.end(htmlCreator("This is about page", 'about', 'About page'));
        case (url[0] === 'posts' && !url[1]):
            return res.end(htmlCreator("List:", 'posts', 'Posts list page'));
        case (url[0] === 'posts' && url[1] in postsArray):
            return res.end(htmlCreator(`Post id: ${url[1]}`, 'post', slug(url[1]), url[1]));
        default:
            return res.end(htmlCreator("Page not found, error 404", 'error', 'Error'));
    }
}