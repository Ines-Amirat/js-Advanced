function Users() {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
                let users = response.data
                for (user of users) {
                    document.getElementById("userI").innerHTML += ` <div class="User" onclick ="userPosts(${user.id},this)">
                                                                <h2 class="name">${user.name}</h2>
                                                                <h3 class="email">i${user.email}</h3>
                                                            </div>`
                }
                resolve()

            })
            .catch (error => {
                 console.log(error);
                 alert(error)
                 reject(error)
            })

    })
    
}
Users()
    .then(() => {
        userPosts(1)
    })
    .catch((error) => {
        console.log(error)
    })
userPosts()

function userPosts(IdUser) {


    url = `https://jsonplaceholder.typicode.com/posts?userId=${IdUser}`
    axios.get(url)
        .then((response) => {
            console.log(response)
            let posts = response.data
            document.getElementById("postI").innerHTML = ""
            for (post of posts) {
                document.getElementById("postI").innerHTML += ` <div class="postUser">
                                                                <h1>${post.title}</h1>
                                                                <h3>${post.body}</h3>
                                                            </div>`
            }

        })
        .catch(error => {
            console.log(error);
        })

}




