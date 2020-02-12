const arrViews = {
    home: require('./_home'),
    posts: require('./_posts'),
    post: require('./_post-page'),
    about: require('./_about'),
    error: require('./_error'),
}

module.exports = function htmlCreator (content, view = '_error', title, postId) {

    const htmlContent = arrViews[view](`${content}`, `${postId}`);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
    <div class="container">
        <div class="row">
            <div class="col">
            <head>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/posts">Posts</a></li>
                </ul>
            </head>
            </div>
        </div>
    </div>
        <div class="container">
            <div class="row">
                <div class="col">
                ${htmlContent}
                </div>
            </div>
        </div>
    </body>
    </html>
    `
};