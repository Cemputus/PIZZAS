import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h1 className="contact-heading wrapper-background">
        Contact <span className="contact-sub-heading">Our Team</span>
      </h1>

      <div className="container">
        <div className="contact-inner">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/myyqarjq"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
                autoComplete="off"
                required
              ></textarea>

              <input type="submit" value="submit" />
            </form>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/dir//Cafe+Delish,+Nobel+PLaza,Opposite+Equity+Bank+Mukono,Kampala+Road+Next+to+Central+Police+Station,+Mukono,+Uganda/@0.362247,32.7417003,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x177dc76aee9f8f1f:0x15fbfa0d6140e034!2m2!1d32.7442793!2d0.3622512?hl=en&entry=ttu"
              width="90%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .contact-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .contact-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    margin: 6rem 0;
  }
  .contact-form {
    width: 100%;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.bg};
          color: ${({ theme }) => theme.colors.bg};
        }
      }
    }
  }
  .map {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 5px 0px #888888;
    padding: 0.2rem;
    margin: 0 auto;
    border-radius: 1rem;
    padding: 2rem;
    iframe {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      border-radius: 1rem;
      width: 100%;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .contact-heading {
      font-size: 4rem;
    }
    .contact-inner {
      flex-direction: row;
    }
    .contact-form {
      width: 40%;
    }
    .map {
      width: 60%;
    }
    .contact-inner {
      margin: 10rem 0 12rem;
    }
  }
`;

export default Contact;
