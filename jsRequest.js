
function getPosts() {

    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts")
    request.responseType = "json"
    request.send()
    //request.onreadystatechange
    request.onload = function () {
        //console.log(request.response)

        if (request.status >= 200 && request.status < 300) {
            console.log(typeof request.response)

            let posts = request.response
            //for (post of posts ){
            //console.log(post)
            //}
            for (post of posts) {
                console.log(post.title)
                document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`

            }
        }
        else{
            alert("error")
        }
    }
}

//getPosts()

function creatNewPost() {
    let request = new XMLHttpRequest()
    request.open("POST", "https://jsonplaceholder.typicode.com/posts")
    request.responseType = "json"
    request.setRequestHeader("Accept", "application/json")
    request.setRequestHeader("Content-type", "application/json")
    let bodyParams = `{
                "title": "sdsds",
                "body": "sdsds",
                "userid": "sdsds"

    }`
    request.send(bodyParams)
    request.onload = function () {

       
        if (request.status >= 200 && request.status < 300) {
            let response = request.response
            console.log(response)
            console.log("the status code is " + request.status)
            alert ("the post has been created successfully")
        }
        else{
            alert ("error")
        }

    }
}


//creatNewPost()


function updatePost() {
    let request = new XMLHttpRequest()
    request.open("PUT", "https://jsonplaceholder.typicode.com/posts/1")
    request.responseType = "json"
    request.setRequestHeader("Accept", "application/json")
    request.setRequestHeader("Content-type", "application/json")
    let bodyParams = `{
                "title": "hello world",
                "body": "sdsds",
                "userid": "sdsds"

    }`
    request.send(bodyParams)
    request.onload = function () {

       
        if (request.status >= 200 && request.status < 300) {
            let response = request.response
            console.log(response)
            console.log("the status code is " + request.status)
            alert ("the post has been updated successfully")
        }
        else{
            alert ("error")
        }

    }
}


function deletePost() {
    let request = new XMLHttpRequest()
    request.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1")
    request.responseType = "json"
    request.setRequestHeader("Accept", "application/json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = function () {

       
        if (request.status >= 200 && request.status < 300) {
            let response = request.response
            console.log(response)
            console.log("the status code is " + request.status)
            alert ("the post has been deleted successfully")
        }
        else{
            alert ("error")
        }

    }
}



function getPostsWithUserFilter() {

    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1")
    request.responseType = "json"
    request.send()
    //request.onreadystatechange
    request.onload = function () {
        //console.log(request.response)
        if (request.status >= 200 && request.status < 300) {
            console.log(typeof request.response)

            let posts = request.response
            //for (post of posts ){
            //console.log(post)
            //}
            for (post of posts) {
                console.log(post.title)
                document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`
               
            }
            alert("posts has been got successufully ")
        }
        else{
            alert("error")
        }
    }
}


getPostsWithUserFilter()
//updatePost()
//deletePost()


