import "../styles/eduTemplate.css";
function EducationTemplate(props) {
  return (
    <div className="template">
      <p>{props.date}</p>
      <h2>{props.degree}</h2>
      <h5>{props.subject}</h5>
      <p>{props.location}</p>
    </div>
  );
}
export default EducationTemplate;
