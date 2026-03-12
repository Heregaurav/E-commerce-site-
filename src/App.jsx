import { useState } from 'react'

function App() {
  const[posts,setPosts] = useState([]);

  const PostComponents = posts.map( post => <PostComponent
        name={post.name}
        subtitle={post.subtitle}
        time = {post.title}
        image={post.image}
        description = {post.description}
        />)

    function addPost(){
      setPosts([...posts, {
          name : "gauravkumar",
          subtitle : "400 views ",
          time : "2m ago",
          image : "https://img2.51gt3.com/rac/racer/202404/736683032ce24f06ba67ce44a2cf0b73.jpg",
          description:"this is maxvertatppen 4 times world drivers champion"
      
         
      }])
    }

  return (
      <div style ={{background:"#dfe6e9",height:"100vh"}}>
        <button onClick={addPost}>AddPost</button>
        <div style = {{display:"flex", justifyContent:"center"}}>
          <div>
            {PostComponents}
          </div>
        </div>
      </div>
  
  )
}

const ToggleMessage = ()=>{
  const [notification, setnNotification] = useState(0);
  function increament(){
        setnNotification (notification + 1);
  }
 

  const [isVisible,setVisible] =useState(false); 
  const toggle = ()=>setVisible(!isVisible);
  // defining a new state variable 
  //when the value of a state variable changes ,
  // the componenet that uses the state variable changes
  // the component  isn't re-rendering 
  // because we haven't used a state variable 

  
  return (
          <div>
            <button onClick ={()=>{
              toggle();
              increament();
            }} >
              Toggle Message 
            </button>
            {notification}
            {isVisible ? <p> This is message is conditionally rendered !</p> : null} 
            {/* {isVisible && <p> This is message is conditionally rendered !</p> } */}
          </div>
        )
}


function PostComponent({name , subtitle , time , image , description }){
  return  <div style = {{width:400 , backgroundColor:'white' , borderRadius:15, borderColor:"black",margin:10,height:200 }}>
                <div style ={{display :"flex"}}>
                        <img src = {image}style = {{
                          width: 60 ,
                          height:60,
                          borderRadius:20,
                          marginTop:20,
                          marginLeft:10,
                        }}/>
                        <div  style = {{fontSize :13 , margin:15 , marginLeft:20 , marginTop:30}}>
                          <b style={{fontSize:17}}>
                            {name}
                          </b>
                            <div>{subtitle}</div>
                            {/* this is conditional rendering , if time is not  defined then it wont render the element  
                            if it is not undefined then it will render the time  ---->  here this is working as a TERNARY OPERATOR */}
                           { (time !== undefined) ? <div style = {{display:'flex'}}>  
                                <div>{time}</div>
                                <img src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPvTp9h7YJx1KJgENJKheKfF9dc1OQ6QT8A&s"} style = {{width: 16, height: 16 ,marginLeft:3, marginBottom:15}} />
                            </div>  
                            : null }
                        </div>
                  </div>
                  <div style = {{fontSize:20 ,margin:15,marginTop:5 }}>
                    {description} 
                  </div>  
          </div> 
}


//   <div style={{
//       background:"#dfe6e9",
//       height:"100vh",
//       marginTop:20,
//       display:"flex",
//       flexDirection:"column",
//       alignItems:"center",
//       }}>


//       <div>        
//          <ProfileCard/>
//       </div>
//           <br/>
//       <div>        
        //  <PostComponent
        //   name = {"gauravkumar"}
        //   subtitle = {"400 views "}
        //   time = {"2m ago"}
        //   image = {"https://img2.51gt3.com/rac/racer/202404/736683032ce24f06ba67ce44a2cf0b73.jpg"}
        //   description={"this is maxvertatppen 4 times world drivers champion"}
        //   />
//           <br />
//       </div>
//       <div>        
//          <PostComponent
//           name = {"gauravkumar"}
//           subtitle = {"promoted"}
//           image = {"https://img2.51gt3.com/rac/racer/202404/736683032ce24f06ba67ce44a2cf0b73.jpg"}
//           description={"this is maxvertatppen 4 times world drivers champion"}
//          />
//          <br />
//       </div>

//     </div>

// function ProfileCard() {
//   return (
//     <div style={{
//       background: "white", width: 400, borderRadius: 15,
//       margin: 10, overflow: "hidden",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>

//           {/* Top Banner */}

//           <div style={{ background: "#cfd8dc", height: 80 }}></div>

//           {/* Profile Image */}

//           <div style={{ display: "flex", justifyContent: "center", marginTop: -40 }}>
//             <img
//               src="https://img2.51gt3.com/rac/racer/202404/736683032ce24f06ba67ce44a2cf0b73.jpg"
//               style={{ width: 100, height: 100, borderRadius: "50%", border: "4px solid white" }} />
//           </div>

//           {/* Name */}
//           <div style={{ textAlign: "center", marginTop: 10 }}>
//             <div style={{ fontWeight: "bold", fontSize: 16 }}>
//               Max Verstappen
//             </div>
//             <div style={{ fontSize: 13, color: "gray" }}>
//               4× Formula 1 World Champion
//             </div>
//           </div>

//           {/* Stats */}
//           <div style={{ marginTop: 15, padding: 15, borderTop: "1px solid #eee", fontSize: 13 }}>
//                 <div style={{ display: "flex", justifyContent: "space-between" }}>
//                       <span>Profile viewers</span>
//                       <span style={{ color: "#0a66c2", fontWeight: "bold" }}>41,903</span>
//                 </div>

//                 <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
//                       <span>Post impressions</span>
//                       <span style={{ color: "#0a66c2", fontWeight: "bold" }}>1,133</span>
//                 </div>  
//           </div>

//     </div>
//   );
// }









export default App
