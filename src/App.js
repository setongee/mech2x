import './App.css';
import Header from './COMPONENTS/header/header';
import RouterClass from './routes/router';
import { register } from 'swiper/element/bundle';

register();

function App() {
  
  return (

    <div className="App">

      <Header/>

      <div className="container">

          <RouterClass />

      </div>
      
    </div>
  );
  
}

export default App;
