//import animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animations";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.upwork.com/o/profiles/users/~01d1a36e45bc7bdea2/">
              <h2>Upwork</h2>
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.facebook.com/usamamasood34">
              <h2>Facebook</h2>
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://twitter.com/umk93">
              <h2>Twitter</h2>
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.linkedin.com/in/usama-khan-240365b5/">
              <h2>Linkedin</h2>
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #dddddd;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #dddddd;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
    color: white;
  }
  a {
    text-decoration: none;
  }
`;

export default ContactUs;
