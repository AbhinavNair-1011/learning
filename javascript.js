let user = { posts: [], activityTime: 0 };
console.log("timeout time 1-20 secs")
function createPost(value) {

  return new Promise((resolve, reject) => {
     setTimeout(()=>{
        user.posts.push(value);
  
        resolve("Created a new Post");
 },5000)
    
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        let date = new Date();
    user.activityTime = ` Time-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, 
        Date- ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    resolve("lastseen updated");
    }, 3000);
    
  });
}
function deletePost() {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
        user.posts.pop();
    let date = new Date();
    user.activityTime = ` Time-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()},Date- ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
   
    resolve("delete the last post");
    }, 3000);
    
  });
}
 

async function updateAndDeletePost(updateOrDelete,value){
  if(updateOrDelete==="update"){
    let [cp,uuat]= await Promise.all([createPost(value),updateLastUserActivityTime()])
    console.log(`${cp} and ${uuat}`)
        console.log(`POSTS-${user.posts}  lastSeen-${user.activityTime}`)
  }else if(updateOrDelete==="delete"){
    
  let [dp,uuat2]= await Promise.all([deletePost(),updateLastUserActivityTime()])
  console.log(` ${dp} and ${uuat2}`)
  console.log(` POSTS-${user.posts}  lastSeen-${user.activityTime}`)
  }
}


setTimeout(()=>{
  updateAndDeletePost("update","post1");
},4000)

setTimeout(()=>{
  updateAndDeletePost("update","post2");
},7000)

setTimeout(()=>{
  updateAndDeletePost("update","post3");
},10000)

setTimeout(() => {
  updateAndDeletePost("delete");
  
},15000);
 



 async function l(){
  let getColdDrink= new Promise ((resolve,reject)=>{
    
      setTimeout(()=>{
        console.log("I got the Cold Drink");
      },1000)
      setTimeout(()=>{
      console.log("lets go now");
      resolve()
    },2000)
    
   });
   let theaterSeats= new Promise ( (resolve,reject)=>{
    setTimeout(()=>{
      console.log("lets enter the theater")
    },3000)
      setTimeout(()=>{
        console.log("wow the seats are so comfortable and huge screen")
      
      
        resolve()
    },4000)
  
    
   })

   let movieReview= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
  
      resolve("the movie was fantastic, i loved it")
    },6000)
   })
 

 let cd= await getColdDrink;

  let seat=await theaterSeats;
 
  
  console.log(await movieReview)


}
setTimeout(()=>{
  l();
},20000)




