import React from "react";
import "./Contacts.css";

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <div className="contacts__title">
          <h3>Contact info:</h3>
        </div>
        <div className="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.791760453094!2d24.71195511518657!3d48.91935957929353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c1b611366ea1%3A0x8879491835937f4a!2z0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQug!5e0!3m2!1suk!2sua!4v1622529678560!5m2!1suk!2sua"
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}

export default Contacts;
