/* eslint-disable react/prop-types */
export default function ExploreCards(props) {
  return (
    <div className="image-card">
      <img src={props.image} alt={props.alt} className="explore-card" />
      <span className="about-card">{props.about}</span>
      <p className="description-card">{props.description}</p>
    </div>
  );
}
