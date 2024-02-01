/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
export default function FamousCard(props) {
  return (
    <div className="famous-images">
      <img src={props.image} alt={props.alt} className="famous-image" />
      <div className="alignment">
        <p className="famous-text">{props.text}</p>
        <IoIosArrowForward className="icon" />
      </div>
    </div>
  );
}
