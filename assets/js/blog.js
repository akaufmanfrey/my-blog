// function to get posts from storage and load them to the screen
function loadFromLocalStorage() {
    // grab posts from local storage
    const storedData = JSON.parse(localStorage.getItem('storage'));
    //check that storage is non-empty
    if (storedData) {

        //for each post, make new elements for the post and its title, username, and content
        storedData.forEach((post) => {
            const blogPost = document.createElement('section');
            const title = document.createElement('h2');
            const username = document.createElement('footer');
            const content = document.createElement('p');

            //set the text content of each element
            title.textContent = post.title;
            username.textContent = "Posted by: " + post.username;
            content.textContent = post.content;

            //add elements to the document body
            blogPost.appendChild(title);
            blogPost.appendChild(content);
            blogPost.appendChild(username);
            document.body.appendChild(blogPost);
        })
    }
}
loadFromLocalStorage();