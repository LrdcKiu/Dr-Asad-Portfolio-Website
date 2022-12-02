import "../styles/expTemplate.css";
function ExpTemplate(props) {
  return (
    <div className="expTemplate">
      <p>{props.date}</p>
      <h4>{props.designation}</h4>
      <p>{props.location}</p>
    </div>
  );
}
export default ExpTemplate;
