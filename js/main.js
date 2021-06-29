const api_url = "https://jsonplaceholder.typicode.com/users";

async function getapi(url) {
    
    const response = await fetch(url);
    let data = await response.json();
    data.forEach(user => {
        show(user);
    })
    
}

getapi(api_url)

function show(user) {
    let dataCont = document.querySelector('.user-cont');
    let div = document.createElement('div');
    div.setAttribute('class', 'user')
    let name = document.createElement('p');
    let email = document.createElement('p');
    let btn = document.createElement('button')

    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(btn);
    dataCont.appendChild(div);
    name.textContent = `Name: ${user.name}`
    email.textContent = `Email: ${user.email}`
    btn.textContent = `Get User’s Posts`

    btn.addEventListener('click', () => {
        location.assign(`./posts.html#${user.id}`);
        localStorage.setItem('editor', user.name);
    })
    
}
