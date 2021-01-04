import styled from "styled-components";
import { About } from "../styles";
import { AnimateSharedLayout } from "framer-motion";
//import components
import Toggle from "./Toggle";
//
import { scrollReveal } from "../animations";
import { useScroll } from "./useScroll";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <Link className="link" to="/contact">
              <p>Meet.</p>
            </Link>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Mon-Fri 9AM to 6PM PST</p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Paypal</p>
          </div>
        </Toggle>
        <Toggle title="What Services Do You Offer">
          <div className="answer">
            <p>Complete Enterprise Level Webpages</p>
            <p>Using MERN Stack Combo</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
    .link {
      text-decoration: none;
    }
  }
`;

export default FaqSection;
