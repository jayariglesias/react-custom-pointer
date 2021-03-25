export default function Cursor(props) {

    document.addEventListener('mousemove',(e) => {
        document.getElementById('cursor').style.left = e.clientX + 'px';
        document.getElementById('cursor').style.top = e.clientY + 'px';
    });

    document.body.style.cursor = props.type || 'default';

    return (
        <div id="cursor" style={{position:'absolute'}} className={props.className}>
            {props.children}
        </div>
    )
}
