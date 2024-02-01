/* eslint-disable react/prop-types */
export default function GalleryCards(props) {
  return (
    <div className="gallery-images">
      <img src={props.image} alt={props.alt} className="gallery-image" />
    </div>
  );
}
