    function Users() {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    reject("there is error ")
                })
                .then(users => {

                    for (user of users) {
                        document.getElementById("userI").innerHTML += ` <div class="User" onclick ="userPosts(${user.id},this)">
                                                                    <h2 class="name">${user.name}</h2>
                                                                    <h3 class="email">i${user.email}</h3>
                                                                </div>`
                    }
                    resolve()
                    

                })
                

        })
        

    }
    Users()
    .then(() => {
            userPosts(1)
        })
    .catch((error) =>{
            console.log(error)
    })
    userPosts()
    function userPosts(IdUser) {


        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${IdUser}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(posts => {
                document.getElementById("postI").innerHTML = ""
                for (post of posts) {
                    document.getElementById("postI").innerHTML += ` <div class="postUser">
                                                                        <h1>${post.title}</h1>
                                                                        <h3>${post.body}</h3>
                                                                    </div>`
                }

            })

    }


