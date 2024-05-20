import Navbar from './components/navbar'
import VideoC from './components/VideoSfondo'
import HomeCard from './components/Home_Card'
import image1 from './Images/obbiettivi.webp'
import image2 from './Images/canong.png'



function App() {
  const topFunction = () => {
    window.scrollTo(0, 0);
  }

  

  return (
    <>

    
      <div className='w-auto pt-0'>
        <Navbar />
      </div>
      
      <div className="container-fluid p-0 m-0">
        
        <VideoC />
        <h1 id='Titolo_Home_Page'>Benvenuto nel nostro sito</h1>
      </div>
      
     

        {/* L'icona stessa funge da bottone */}
      <div onClick={topFunction} id="Scrollup"><i className="bi bi-arrow-up-square"></i></div> 

      <div id="sfondoparte2" classname="m-0 p-0">
        <div id="container_card" className='card-container'>
          <HomeCard  />
          <div id='spazio'></div>
        </div>
      </div>
        
    </>
  );
}

export default App;
