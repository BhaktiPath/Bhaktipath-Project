/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
   
      <div className="aarti-card">
        <img src={props.image} alt={props.alt} className="aarti-image" />
          <div>

          <p className="facts-name">{props.factsName}</p>
          <p className="facts-content">{props.factscontent}</p>
        
          </div>
      </div>
    
  );
}