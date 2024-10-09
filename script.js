async function getData() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

        const mapData = response.data.map((item) => {
            let content = document.createElement("p");
            content.innerHTML = item.id;
            document.body.appendChild(content);
            console.log(item.id); 
            return {
                item 
            }
        });

        console.log(mapData); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData();
async function getPostById(postId) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        console.log("Post retrieved:", response.data);
        
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}
getPostById(1)

async function postData() {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "re:education",
            body : "lorem ipsum",
            userId: 1
        });
        if(response.status === 200) {
            console.log(response.data) 
            console.log("wtf")
         }
    } catch (error) {
        console.log("this is error",error)   
    }
}
postData();

async function putData (id) {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: "re:education",
            body : "lorem ipsum",
            userId: 1
        });
        if(response.status === 200) {
            console.log(response.data) 
            console.log("wtf")
         }        

    } catch (error) {
        console.log("this is error",error)   
    }
}
putData(3)


async function deleteData() {
    try {
        const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/${postId}");


        console.log(response)
    } catch (error) {
        console.log("error", error)
    }
}
deleteData()

