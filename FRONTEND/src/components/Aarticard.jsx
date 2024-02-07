/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
   
      <div className="aarti-card">
        <img src={props.image} alt={props.alt} className="aarti-image" />
        <pre className="aarti-name">{props.aartiName}</pre>
      </div>
    
  );
}