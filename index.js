const base_url = "http://localhost:3000"
const projects_url = `${base_url}/projects`
const users_url = `${base_url}/users`


console.log("Here we go")
// fetch(projects_url)
// .then(resp => resp.json())
// .then(json => {
//     json.forEach(project => {
//         let data = formatProjectJsonData(project)
//         createprojectCard(data) 
//     })
// })

fetch(users_url)
.then(resp => resp.json())
.then(json => {
    json.forEach(user => {
        let data = formatUserJsonData(user)
        createUserCard(data)
    })
})

function formatUserJsonData(user) {
    let hash = {};
    hash["username"] = user.username;
    hash["email"] = user.email;
    hash["location"] = user.location;
    return hash;
}

function createUserCard(hash) {
    console.log(hash)
    let div = document.querySelector('#userInfo')
    let userDiv = document.createElement('div')
    userDiv.classList.add('user_div')
    div.appendChild(userDiv)

    let pUsername = document.createElement('p')
    pUsername.textContent = hash.username;
    let pEmail = document.createElement('p')
    pEmail.textContent = hash.email
    let pLocation = document.createElement('p')
    pLocation.textContent = hash.location
    userDiv.appendChild(pUsername)
    userDiv.appendChild(pEmail)
    userDiv.appendChild(pLocation)

    let editButton = document.createElement('button')
    editButton.textContent = "Edit"
    editButton.addEventListener('click', () => {
        console.log("click")
        pUsername.contentEditable = true;
        pEmail.contentEditable = true;
        pLocation.contentEditable = true;
    })
    userDiv.appendChild(editButton)
}

function formatProjectJsonData(project) {
    let newHash = {}
    newHash["projectName"] = project.projectName
    newHash["location"] = project.location
    newHash["status"] = project.status
    return newHash
}




function createprojectCard(hash) {
    let h2 = document.querySelector('#projectID')
    let div = document.createElement('div')
    div.classList.add("projectInfo")
    h2.appendChild(div)
    let projectName = document.createElement('p')
    projectName.textContent = hash.projectName
    div.appendChild(projectName)
    let status = document.createElement('p')
    status.textContent = hash.status
    div.appendChild(status)
    let location = document.createElement('p')
    location.textContent = hash.location
    div.appendChild(location)
}
