/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
   
      <div className="content-card">
        <pre className="content">{props.content}</pre>
      </div>
    
  );
}