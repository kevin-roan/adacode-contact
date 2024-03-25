import "./App.scss";
import Button from "./components/Button";
import Card from "./components/Card";
import { IoIosCall } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const App = () => {
  return (
    <div className="container">
      <section className="top_section">
        <div className="user_details">
          <img
            className="useravatar"
            src="https://media-tir3-1.cdn.whatsapp.net/v/t61.24694-24/416823717_949227969965437_6035290967989845318_n.jpg?ccb=11-4&oh=01_AdQKBvk9rc52N8MZSgE4XmmrFj0UHGKCAzQ9R4suiZtkXw&oe=660E3A17&_nc_sid=e6ed6c&_nc_cat=107"
          />
          <span>
            <h4>Muhammed Muzammil H A</h4>
            <p>Enterpreneur</p>
          </span>
          <Card
            title="About"
            description="Lorem ipsum dolor sit ametexcepteur non duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
          />
          <Card
            title="Contact Here"
            description="Lorem ipsum dolor sit ametexcepteur non duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
          />
          <Button icon="icon" context="Save Contact" />
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
          <div className="contact_details"></div>
        </div>
      </section>
    </div>
  );
};
export default App;
