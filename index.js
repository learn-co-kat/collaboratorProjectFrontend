const base_url = "http://localhost:3000"
const projects_url = `${base_url}/projects`


console.log("Here we go")
fetch(projects_url)
.then(resp => resp.json())
.then(json => {
    json.forEach(project => {
        let data = formatProjectJsonData(project)
        createprojectCard(data) 
    })

    // json.forEach(user => {
    //     let userCard = formatUserJsonData(user)
    //     createuserCard(userCard)
    // })
})

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

function formatUserJsonData(user) {
    let newHash = {}
    newHash["username"] = user.username
    newHash["location"] = user.location
    newHash["email"] = user.email
    return newHash
}

function createuserCard(hash) {
    let h2 = document.querySelector('#userID')
    let div = document.createElement('div')
    div.classList.add("userInfo")
    h2.appendChild(div)
    let username = document.createElement('p')
    username.textContent = hash.username
    div.appendChild(username)
    let email = document.createElement('p')
    email.textContent = hash.email
    div.appendChild(email)
    let location = document.createElement('p')
    location.textContent = hash.location
    div.appendChild(location)
}