

function Reorder({onReorder}) {
  return (
    <div className="wrapper"><button  className="reorder" onClick={()=> {onReorder(5)}}>reorder</button></div>
  );
}

export default Reorder;

