import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main'
import Events from './components/Events'
import MuseumContent from './components/MuseumContent';


function App() {
  
  return (
    <div >
      <NavBar />
      <Main />
      <Events/>
      <h3> API CONTENT</h3>
      <MuseumContent />
    </div>
  )}

export default App;
