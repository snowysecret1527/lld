import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Twitees from "./components/Twitees";
import RecommedUsers from "./components/RecommedUsers";
function App() {
  return (
    <div className='Liveloud'>
    <Navbar/>
    <Sidebar/>
    <Twitees/>
    <RecommedUsers/>
    
    </div>
  );
}

export default App;
