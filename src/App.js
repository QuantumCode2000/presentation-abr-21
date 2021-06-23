import './App.css';
import Interests from './components/Interests';
import Expectations from './components/Expectations';
import Hobbies from './components/Hobbies';
import Profile from './components/Profile';
import Learn from './components/Learn';
function App() {
  return (
    <div className="container">
      <Profile/>
      <Interests/>
      <Learn/>
      <Expectations/>
      <Hobbies/>
    </div>
  );
}

export default App;
