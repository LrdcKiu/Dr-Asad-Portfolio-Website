import EducationTemplate from "../component/EducationTemplate";
import "../styles/education.css";
function Education() {
  return (
    <div className="education" id="education">
      <EducationTemplate
        date="2013"
        degree="Ph.D"
        subject="Science and Technology"
        location="Beijing, China"
        className="template"
      ></EducationTemplate>
      <EducationTemplate
        date="2005"
        degree="Masters"
        subject="Science and Technology"
        location="KIU, Gilgit, Pakistan"
        className="template"
      ></EducationTemplate>
      <EducationTemplate
        date="2003"
        degree="Bachelors"
        subject="Science and Technology"
        location="KIU, Gilgit, Pakistan"
        className="template"
      ></EducationTemplate>
    </div>
  );
}
export default Education;
