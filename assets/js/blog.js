// function to get posts from storage and load them to the screen
function loadFromLocalStorage() {
    // grab posts from local storage
    const storedData = JSON.parse(localStorage.getItem('storage'));
    //check that storage is non-empty
    if (storedData) {

        //for each post, make new elements for the post and its title, username, and content
        storedData.forEach((post) => {
            const blgPost = document.createElement('section');
            const pstTitle = document.createElement('h2');
            const pstUsername = document.createElement('footer');
            const pstContent = document.createElement('p');

            //set the text content of each element
            title.textContent = post.title;
            username.textContent = "Posted by: " + post.username;
            content.textContent = post.content;

            //add elements to the document body
            post.appendChild(pstTitle);
            blgPost.appendChild(pstContent);
            blgPost.appendChild(pstUsername);
            document.body.appendChild(blgPost);
        })
    }
}
loadFromLocalStorage();