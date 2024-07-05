const modeButton = document.querySelector('#mode');


function toggleBackground(e) {
    e.preventDefault();

    const formTitle = document.querySelector('#blgtitle');
    const submitButton = document.querySelector('#submit');
    const backgroundCircle = document.getElementById('container');
    // if current mode is light, change mode to dark
    if (modeButton.textContent === '☀️') {
        modeButton.textContent = '🌙';
        // change background color of all elements to black and text color to white
        for (const child of document.getElementsByTagName('*')) {
            child.style.backgroundColor = 'black';
            child.style.color = 'white';
        }

        // set border of all blog posts to white
        for (const child of document.getElementsByTagName('section')) {
            child.style.borderColor = 'white';
        }
        // if on form page, change background of title container to black
        if (backgroundCircle) {
            backgroundCircle.style.background = 'radial-gradient(ellipse at center, #e9f812 0%,#e9f812 47%, #e9f812 47%,#000000 47%,#000000 48%)'
        }

    } else {
        // dark mode settings
        modeButton.textContent = '☀️'
        // change all background colors to white and text color to black
        for (const child of document.getElementsByTagName('*')) {
            child.style.backgroundColor = 'white';
            child.style.color = 'black'
          }

          // change border color of blog posts to black
          for (const child of document.getElementsByTagName('section')) {
            child.style.borderColor = 'black';
        }
        // if on form page, change background of title container to white
        if (backgroundCircle) {
            backgroundCircle.style.background = 'radial-gradient(ellipse at center, #e9f812 0%,#e9f812 47%, #e9f812 47%,#ffffff 47%,#ffffff 48%)'
        }
    }
    // if on the form page, change the background of the title text to be transparent, change circle background and change submit button color
    if (formTitle) {
        formTitle.style.background = 'transparent';
        formTitle.style.color = 'black';
        submitButton.style.backgroundColor = 'rgb(30, 199, 30)';
        submitButton.style.color = 'black';
    }
}

modeButton.addEventListener('click', toggleBackground);