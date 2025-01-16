import React from "react";
import "./contact.css";
import Swal from "sweetalert2";

const Contactpage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);

    formData.append("access_key", "15625eb5-07b5-4b3d-a670-19f001e2e1a9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      form.reset();
    }
  };

  return (
    <div>
      <div className="text-center row">
        <div className="contact-page col-12">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="container contact-form">
        <div className="row">
          <div className=" col-lg-6 col-md-6">
            <div className="information-contents">
              <span>INFORMATION</span>
              <h2>Contact us</h2>
              <p>
                As you might expect of a company that began as a high-end
                interiors contractor,
                <br /> we pay strict attention.
              </p>
              <h3>America</h3>
              <p>
                195 E Parker Square Dr, Parker, CO 801 <br />
                +43 982-314-0958
              </p>
              <h3>France</h3>
              <p>
                109 Avenue Léon, 63 Clermont-Ferrand <br />
                +12 345-423-9893
              </p>
            </div>
          </div>
          <div className=" col-lg-6 col-md-6">
            <div className="form-page">
              <form action="" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="name-input"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="email-input"
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="message-input"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="contact-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
