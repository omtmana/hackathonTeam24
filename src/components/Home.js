import '../style/home.css'

const Home = () => {
   return (
      <div className="home">
         <img src='woman.jpeg' className='home-image' />  
         <div className='home-header'>
            <h1 className='home-font'> Team 24: <br></br> Empowering Women </h1>
            <p> In this part we are going to put a brief information on what our goal is for this website </p>       
         </div>
         <div className='home-body'>
            <img src='flowchart.png' style={{heigh:'4em'}}></img>
         </div>
         <div className='home-footer'>
            <h5> This is the home footer </h5>
         </div>
      </div>
   )
}

export default Home;