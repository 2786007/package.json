export default function Home() {
return (
<div style={{
background:"#000",
color:"#fff",
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
flexDirection:"column",
fontFamily:"Arial",
padding:"20px"
}}>
<img src="/logo.png" width="140" />

<h1 style={{marginTop:"20px"}}>  
    ShreeNayraGroup  
  </h1>  

  <p>  
    Arun Kaul Official Business Platform  
  </p>  

  <img   
    src="/arun.png"  
    width="220"  
    style={{  
      borderRadius:"20px",  
      marginTop:"20px"  
    }}  
  />  

  <a  
    href="https://wa.me/918826980675"  
    style={{  
      marginTop:"30px",  
      background:"#22c55e",  
      color:"#fff",  
      padding:"12px 20px",  
      borderRadius:"10px",  
      textDecoration:"none",  
      fontWeight:"bold"  
    }}  
  >  
    Contact on WhatsApp  
  </a>  
</div>

)
}