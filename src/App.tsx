import './App.scss';
import { Description } from './components/Description/Description';
import { Experience } from './components/Experience/Experience';
import { Summary } from './components/Summary/Summary';

function App() {
  return (
    <div className="App">
      {/* <Summary /> */}
      <div className='content-horizontal'>
        {/* <Description /> */}
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </div>
    </div>
  );
}

export default App;
