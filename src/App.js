// import './App.css';
import styles from './App.css';
function App() {

  document.addEventListener('mousemove',(e) => {
    let cursor = document.getElementsByClassName('cursor');

    for(let i = 0; i < cursor.length; i++) {
      cursor[i].style.left = e.clientX + 'px';
      cursor[i].style.top = e.clientY + 'px';
    }

  })
  
  return (
    <div className={styles.App}>
        <div className="cursor"></div>
        <div className="cursor"></div>
        <div className="cursor"></div>
        <div className="cursor"></div>
        <div className="cursor"></div>
        <div className="cursor"></div>
    </div>
  );
}


export default App;
