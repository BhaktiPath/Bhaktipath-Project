/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
   
      <div className="content-video">
        <iframe className="youtubeVideo" src={props.src} frameborder="0"></iframe>
        <pre className="youtube-mantra">{props.mantra}</pre>
      </div>
    
  );
}