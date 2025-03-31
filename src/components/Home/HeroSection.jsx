import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { Tilt } from "react-tilt";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const HeroSection = (props) => {
  return (
    <Wrapper className="wrapper-background">
      <div className="container">
        <div className="section-inner">
          <div className="section-hero-data">
            <h1 className="heading-text">
              {props.heading} <span className="meal">{props.meal}</span>
            </h1>
            <p className="hero-para">{props.para}</p>
            <Button className="btn">
              <NavLink to="/menu">
                {props.button} <BsFillArrowRightCircleFill />
              </NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <Tilt className="Tilt">
                <div className="Tilt-inner">
                  <img className="hero-img" src={props.image} alt="" />
                </div>
              </Tilt>
            </picture>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;
  }
  .section-inner {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0;
  }
  .heading-text {
    text-transform: uppercase;
    font-size: 3rem;
    line-height: 1.2;
    span {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .btn {
    max-width: fit-content;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    margin-top: 2rem;
  }
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    max-width: 100%;
    font-size: 1.4rem;
    line-height: 1.6;
  }
  .section-hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;
  }
  picture {
    text-align: center;
    width: 100%;
  }
  .hero-img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .section-inner {
      flex-direction: row;
      gap: 5rem;
      padding: 4rem 0;
    }
    .section-hero-data {
      width: 50%;
      padding: 0;
    }
    .heading-text {
      font-size: 6.4rem;
      line-height: 1.1;
    }
    .hero-para {
      font-size: 1.6rem;
      max-width: 50rem;
      margin-bottom: 3.4rem;
    }
    .section-hero-image {
      width: 50%;
      padding: 0;
    }
    .hero-img {
      max-width: 80%;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .heading-text {
      font-size: 2.5rem;
    }
    .hero-para {
      font-size: 1.2rem;
    }
    .section-inner {
      gap: 2rem;
    }
  }
`;

export default HeroSection;
