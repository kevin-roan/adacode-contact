import "./App.scss";
import Button from "./components/Button";
import { IoIosCall } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const App = () => {
  return (
    <div className="container">
      <section className="top_section">
        <div className="user_details">
          <img className="useravatar" />
          <h4>Muhammed Muzammil H A</h4>
          <p>Enterpreneur</p>
          <Button icon="icon" context="Reach Out" />
          <div className="button_light_container">
            <button className="button_light">
              <IoIosCall />
              Call
            </button>
            <button className="button_light">
              <MdOutlineAttachEmail />
              Email
            </button>
          </div>
          <div className="socialicons_wrapper">
            <FaInstagram />
            <FaLinkedin />
            <FaWhatsapp />
          </div>
          <div className="contact_details">
            <p>+91 7734 739 373</p>
            <p>muhammedmuzammil783@gmail.com</p>
          </div>
          <Button icon="Save Contact" context="Save Contact" />
        </div>
      </section>
      <section className="bottom_section">
        <h1>Adacode Solutions</h1>
      </section>
    </div>
  );
};
export default App;
