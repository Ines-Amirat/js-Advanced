function Users() {

    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function () {

        if (request.status >= 200 && request.status < 300) {
            console.log(typeof request.response)

            let users = request.response

            for (user of users) {
                document.getElementById("userI").innerHTML += ` <div class="User" onclick ="userPosts(${user.id},this)">
                                                                    <h2 class="name">${user.name}</h2>
                                                                    <h3 class="email">i${user.email}</h3>
                                                                </div>`
            }
        }
        else {
            alert("error")
        }
    }
}

Users()


function userPosts(IdUser,clickedElement) {



    let elements = document.getElementsByClassName("selectedUser")
    for (element of elements){
        element.classList.remove("selectedUser")
    } 
    clickedElement.classList.add("selectedUser")

    let request = new XMLHttpRequest()
    //request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+IdUser)
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${IdUser}`)
    request.responseType = "json"
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            console.log(typeof request.response)

            let posts = request.response
            document.getElementById("postI").innerHTML = ""
            for (post of posts) {
                document.getElementById("postI").innerHTML += ` <div class="postUser">
                                                                    <h1>${post.title}</h1>
                                                                    <h3>${post.body}</h3>
                                                                </div>`
            }

            
        }
        else {
            alert("error")
        }
    }
}


