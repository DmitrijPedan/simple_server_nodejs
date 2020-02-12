const htmlCreator = require('./views');
const postsArray = require('./posts');
let testpost = postsArray
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
            return res.end(htmlCreator(`Post id: ${url[1]}`, 'post', url[1], url[1])); // posts/id
        }
        return res.end(htmlCreator(routesMap[url[0]][0], routesMap[url[0]][1], url[0])); // home, posts, about
    } else {
        return res.end(htmlCreator("Page not found, error 404", 'error', 'Error'));
    }
}