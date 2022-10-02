import '../style/home.css'

const Home = () => {
   return (
      <div className="home">
         {/* <img src='logo.png' className='home-image' />   */}
         <div className='home-header'>
            <h1> A Fresh start for <br></br> Justice-Involved Women</h1>
            <p> We help you find a safe and secure home for your family </p>
            <button className='home-button'> How it works </button>
            {/* <h1 className='home-font'> Team 24: <br></br> Empowering Women </h1>
            <p> In this part we are going to put a brief information on what our goal is for this website </p>        */}
         </div>
         <div className='home-body'>
            {/* <img src='flowchart.png' style={{heigh:'4em'}}></img> */}
            <img className='home-image' src='home.png' />
         </div>
      </div>
   )
}

export default Home;