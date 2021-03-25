import Cursor from './components/cursor';
import './styles/cursor.css';


function App() {
  return (
    <div>
      <Cursor>
        <div className="circle"></div>
        <div className="circle"></div>
      </Cursor>
    </div>
  );
}


export default App;
