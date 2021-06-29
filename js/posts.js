let id = location.hash.slice(1);
let editor = localStorage.getItem('editor');

let topTitle = document.getElementById('topTitle');
topTitle.innerHTML = `Posts by ${editor}`

const api_url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    data.forEach(post => {
        show(post)
    })
}

getapi(api_url)

function show(post) {
    let dataCont = document.querySelector('.post-cont');
    let div = document.createElement('div');
    div.setAttribute('class', 'user')
    let title = document.createElement('h3');
    title.setAttribute('class', 'title');
    let body = document.createElement('p');

    div.appendChild(title);
    div.appendChild(body);
    dataCont.appendChild(div);

    title.textContent = `${post.title}`
    body.textContent = `${post.body}`
}

let arrow = document.getElementById('arrow');

arrow.addEventListener('click',()=>{
    location.assign(`./index.html`)
    localStorage.removeItem('editor')
})