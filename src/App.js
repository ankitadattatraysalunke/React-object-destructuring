
import { element } from 'prop-types';
import './App.css';
import Header from './Components/header';
import Movie from './Components/Movie';
import Movies from './movie.json'


function App() {
  return (

 <div className="App">

    

  <Header />
  <div className='main'>
    {
      Movies.map((element, index)=>{
        return (
          
          <Movie 
          key = {index}
          title={element.Title}  
          year={element.Year}          
          img={element.Poster}/>        
        )      
      })
    }
  </div>
</div>
  );
}

export default App;
