const posts = [ 
    {title: 'My work', body: 'This is my work'},
    {title: 'Has just begun', body: 'Begun'}
];

function getPosts() {
    setTimeout(() => {
    let output= "";
    posts.forEach((post, index) => {
     output += `<p>${post.title} </p>`;
    });
    document.body.innerHTML = output;
    }, 1000); 
}

getPosts();


function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);

        const error = false;

        if (!error) {
         resolve()
        } else {
          reject ('Wrong information!');
        }
      }, 2000);
    });
}

createPost({title: 'Its awesome...', body: 
'Awesome'}).then(getPosts);