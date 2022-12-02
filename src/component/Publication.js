import "../styles/publication.css";
function Publication(props) {
  return (
    <div className="publication">
      <h5>{props.heading}</h5>
      <p>{props.para}</p>
    </div>
  );
}
export default Publication;
