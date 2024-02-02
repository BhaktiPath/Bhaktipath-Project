/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
   
      <div className="card">
        <img src={props.image} alt={props.alt} className="accordin-image" />
        <pre className="accordin-mantra">{props.mantra}</pre>
      </div>
    
  );
}