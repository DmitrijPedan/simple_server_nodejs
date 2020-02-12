const htmlCreator = require('./views');
const postsArray = require('./posts');

const slug = text => text.match(/[A-z\s]/g).join("").replace(/post/g, 'Post').replace(/\s+/g, '-')

module.exports = (req,res) => {
  
    const url = req.url.match(/[^/]{1,}/g);
    if(!Array.isArray(url)) {
        return res.end(htmlCreator("This is home page", 'home', `Homes ${url}`));
    }
    const routesMap = {
        home: ["This is home page!", 'home'],
        posts: ["This is posts list page:", 'posts'],
        about: ["This is about page!", 'about'],
    }
    if (url[0] in routesMap) {
        if (url[0] === 'posts' && url[1] in postsArray) {
            return res.end(htmlCreator(`Post id: ${url[1]}`, 'post', slug(postsArray[url[1]].title), url[1] )); // posts/id
        }
        return res.end(htmlCreator(routesMap[url[0]][0], routesMap[url[0]][1], `${url[0]} page`)); // home, posts, about
    } else {
        return res.end(htmlCreator("Page not found, error 404", 'error', 'Error'));
    }
}