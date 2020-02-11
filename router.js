const htmlCreator = require('./views');

module.exports = (req,res) => {
  
    const url = req.url.match(/[^/]{1,}/g);
    if(!Array.isArray(url)) {
        return res.end(htmlCreator("This is home page", 'home', `Homes ${url}`));
    }
    const routesMap = {
        home: ["This is home page!", 'home', '444'],
        posts: ["This is posts list page:", 'posts', '333'],
        about: ["This is about page!", 'about', '222'],
    }
    if (url[0] in routesMap) {
        if (url[1] && url[0] === 'posts') {
            return res.end(htmlCreator(`This is post id: ${url[1]} page`, routesMap[url[0]][1], url[1])); // posts/id
        }
        return res.end(htmlCreator(routesMap[url[0]][0], routesMap[url[0]][1], url[0])); // home, posts, about
    } else {
        return res.end(htmlCreator("Page not found, error 404", 'error', 'Error'));
    }
}