import Cursor from 'react-custom-pointer';
import './styles/cursor.css';

function App() {
  return (
    <>
      <Cursor type="none">
        <div className="circle"></div>
        <div className="circle"></div>
      </Cursor>
      <div>
          <h1>Hello World!</h1>
      </div>
    </>
  );
}

export default App;
