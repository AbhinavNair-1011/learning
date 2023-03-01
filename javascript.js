let user = { posts: [], activityTime: 0 };
console.log("timeout time 1-15 secs")
function createPost(value) {

  return new Promise((resolve, reject) => {
     setTimeout(()=>{
        user.posts.push(value);
  
        resolve("done");
 },5000)
    
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        let date = new Date();
    user.activityTime = ` Time-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, 
        Date- ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    resolve();
    }, 3000);
    
  });
}
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        user.posts.pop();
    let date = new Date();
    user.activityTime = ` Time-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()},Date- ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
   console.log(`      deleted the last post. 
   POSTS-${user.posts}  lastSeen-${user.activityTime}`)
    resolve();
    }, 3000);
    
  });
}

function updatePost(value){
    Promise.all([createPost(value),updateLastUserActivityTime()]).then(([res1,res2])=>{
        console.log(`POSTS-${user.posts}  lastSeen-${user.activityTime}`)

  
    })
}
setTimeout(()=>{
    updatePost("post1");
},4000)

setTimeout(()=>{
    updatePost("post2");
},7000)

setTimeout(()=>{
    updatePost("post3");
},10000)

setTimeout(() => {
    deletePost();
    
}, 15000);