import './App.css';
import StateTutorial from './UseState/StateTutorial';
import ReducerState from './UseReducer/ReducerState';
import Effect from './useEffect/Effect';
import Ref from './useRef/Ref';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <hr></hr>
      <ReducerState />
      <hr></hr>
      <Effect />
      <hr></hr>
      <Ref />
      <hr></hr>
    </div>
  );
}

export default App;
