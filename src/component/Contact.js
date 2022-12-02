import "../styles/contact.css";
function Contact() {
  return (
    <div className="contact" id="contact">
      <h3>Contact Me</h3>
      <form>
        <input placeholder="Name" className="name"></input>
        <input placeholder="Email" className="email"></input>
        <textarea
          placeholder="Message"
          type="textarea"
          className="msg"
          rows="10"
          cols="50"
        ></textarea>
      </form>
      <button className="btn">Submit</button>
    </div>
  );
}
export default Contact;
