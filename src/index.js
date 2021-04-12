import React from 'react'
import './hide.css';

export default function Cursor(props) {

  document.addEventListener('mousemove',(e) => {
      document.getElementById('cursor').style.left = `${e.clientX}px`;
      document.getElementById('cursor').style.top = `${e.clientY}px`;
  });

  document.body.style.cursor = props.type || 'default';

  return (
      <div id="cursor" style={{position:'absolute'}} className={props.className}>
          {window.innerWidth > 768 && props.children}
      </div>
  )
}