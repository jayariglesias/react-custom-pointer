import Cursor from './components/cursor';
import './styles/cursor.css';


function App() {
  return (
    <>
      <Cursor type="default">
        <div className="circle"></div>
        <div className="circle"></div>
      </Cursor>
    </>
  );
}


export default App;
