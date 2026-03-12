import { useState } from 'react'

function App() {
  return (
    <div style={{
      background:"#dfe6e9",
      height:"100vh",
      marginTop:20,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    
      }}>
      
      <div>        
         <ProfileCard/>
      </div>
      <div>        
         <PostComponent/>
      </div>
      <div>        
         <PostComponent/>
      </div>
      <div>        
         <PostComponent/>
      </div>


    </div>
  )
}
function PostComponent(){
  
  return  <div style = {{width:400 , backgroundColor:'white' , borderRadius:15, borderColor:"black",margin:10 ,height:200 }}>
                <div style ={{display :"flex"}}>
                        <img src = {"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"}style = {{
                          width: 60 ,
                          height:60,
                          borderRadius:20,
                          marginTop:20,
                          marginLeft:10,
                        }}/>
                        <div  style = {{fontSize :13 , margin:15 , marginLeft:20 , marginTop:30}}>
                          <b style={{fontSize:17}}>
                            Google
                          </b>
                            <div>23,800 views</div>
                            <div>1hr</div>
                        </div>

                  </div>
                  <div style = {{fontSize:20 ,margin:15,marginTop:5 }}>
                    This is from where I Started  learning  , I want to be a software developer in the future and I want to keep my family safe 
                  </div>  
          </div> 
}


function ProfileCard() {
  return (
    <div style={{
      background: "white", width: 400, borderRadius: 15,
      margin: 10, overflow: "hidden",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>

          {/* Top Banner */}

          <div style={{ background: "#cfd8dc", height: 80 }}></div>

          {/* Profile Image */}

          <div style={{ display: "flex", justifyContent: "center", marginTop: -40 }}>
            <img
              src="https://img2.51gt3.com/rac/racer/202404/736683032ce24f06ba67ce44a2cf0b73.jpg"
              style={{ width: 100, height: 100, borderRadius: "50%", border: "4px solid white" }} />
          </div>

          {/* Name */}
          <div style={{ textAlign: "center", marginTop: 10 }}>
            <div style={{ fontWeight: "bold", fontSize: 16 }}>
              Max Verstappen
            </div>
            <div style={{ fontSize: 13, color: "gray" }}>
              4× Formula 1 World Champion
            </div>
          </div>

          {/* Stats */}
          <div style={{ marginTop: 15, padding: 15, borderTop: "1px solid #eee", fontSize: 13 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Profile viewers</span>
                      <span style={{ color: "#0a66c2", fontWeight: "bold" }}>41,903</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                      <span>Post impressions</span>
                      <span style={{ color: "#0a66c2", fontWeight: "bold" }}>1,133</span>
                </div>  
          </div>

    </div>
  );
}









export default App
