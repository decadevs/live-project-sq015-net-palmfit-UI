import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { Card, Row, Col } from "react-bootstrap";

import profilePic from "../../images/avatar.jpg";

const ProfileCard = ({ fullName, username, aboutMe }) => {
  const iconColor = "#1A8D8D";
  return (
    <Card className="profile-card" style={{ color: "black" }}>
      <div className="text-center mt-3">
        <Card.Img
          variant="top"
          src={profilePic}
          alt="Profile"
          className="img-fluid rounded-circle profile-pic"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center">
          {(fullName = "John Doe")}
        </Card.Title>
        <Card.Text className="text-center mb-2 text-muted">
          {(username = "JohnDoe123")}
        </Card.Text>
        <Card.Text className="text-center mb-2">
          {
            (aboutMe =
              "Hi there! My name is [Your Name] and I am a [Your Profession/Title]. I am passionate about [Your Passion] and have been working in this field for [Number of Years] years. In my free time, I enjoy [Your Hobbies/Interests]. I am excited to be a part of this community and look forward to connecting with you all")
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center" style={{ background: "white" }}>
        <Row>
          <Col>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} style={{ color: iconColor }} />
            </a>
          </Col>
          <Col>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} style={{ color: iconColor }} />
            </a>
          </Col>
          <Col>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: iconColor }} />
            </a>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProfileCard;

// import React from "react";
// import { Card, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faWhatsapp
// } from "@fortawesome/free-brands-svg-icons";
// import coverPic from "../../images/background.jpg";
// import profilePic from "../../images/avatar.jpg";

// const ProfileCard = ({
//   fullName,
//   username,
//   aboutMe,
//   coverImage,
//   profileImage
// }) => {
//   return (
//     <Card className="profile-card">
//       <Card.Img
//         variant="top"
//         src={(coverImage = coverPic)}
//         alt="Cover"
//         className="cover-pic"
//       />
//       <Card.ImgOverlay className="overlay">
//         <div className="profile-pic">
//           <img
//             src={(profileImage = profilePic)}
//             alt="Profile"
//             className="img-fluid rounded-circle"
//           />
//         </div>
//       </Card.ImgOverlay>
//       <Card.Body>
//         <Card.Title>{(fullName = "John Doe")}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           {(username = "JohnDoe123")}
//         </Card.Subtitle>
//         <Card.Text>
//           {
//             (aboutMe =
//               "Hi there! My name is [Your Name] and I am a [Your Profession/Title]. I am passionate about [Your Passion] and have been working in this field for [Number of Years] years. In my free time, I enjoy [Your Hobbies/Interests]. I am excited to be a part of this community and look forward to connecting with you all")
//           }
//         </Card.Text>
//         <div className="social-icons">
//           <FontAwesomeIcon icon={faFacebook} />
//           <FontAwesomeIcon icon={faTwitter} />
//           <FontAwesomeIcon icon={faWhatsapp} />
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProfileCard;

// // import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faFacebook,
// //   faTwitter,
// //   faWhatsapp
// // } from "@fortawesome/free-brands-svg-icons";
// // import { Card } from "react-bootstrap";
// // import "./ProfileCard.css"; // You can create this CSS file for custom styling

// // import coverImage from "../../images/background.jpg";
// // import profilePic from "../../images/avatar.jpg";

// // const ProfileCard = ({ fullName, username, aboutMe }) => {
// //   return (
// //     <Card className="profile-card">
// //       <Card.Img
// //         variant="top"
// //         src={coverImage}
// //         alt="Cover"
// //         className="cover-pic"
// //       />

// //       <div className="overlay">
// //         <img
// //           src={profilePic}
// //           alt="Profile"
// //           className="img-fluid rounded-circle profile-pic"
// //         />
// //       </div>
// //       <Card.Body>
// //         <Card.Title>{(fullName = "John Doe")}</Card.Title>
// //         <Card.Text>{(username = "JohnDoe123")}</Card.Text>
// //         <Card.Text>
// //           {
// //             (aboutMe =
// //               "Hi there! My name is [Your Name] and I am a [Your Profession/Title]. I am passionate about [Your Passion] and have been working in this field for [Number of Years] years. In my free time, I enjoy [Your Hobbies/Interests]. I am excited to be a part of this community and look forward to connecting with you all")
// //           }
// //         </Card.Text>
// //       </Card.Body>
// //       <Card.Footer className="social-icons">
// //         <FontAwesomeIcon icon={faFacebook} />
// //         <FontAwesomeIcon icon={faTwitter} />
// //         <FontAwesomeIcon icon={faWhatsapp} />
// //       </Card.Footer>
// //     </Card>
// //   );
// // };

// // export default ProfileCard;

// // // import React from "react";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import {
// // //   faFacebook,
// // //   faTwitter,
// // //   faWhatsapp
// // // } from "@fortawesome/free-brands-svg-icons";
// // // import { Card, Button } from "react-bootstrap"; // Make sure you have Bootstrap installed
// // // import "./ProfileCard.css"; // You can create this CSS file for custom styling

// // // import backgroundImage from "../../images/background.jpg";
// // // import profilePic from "../../images/avatar.jpg";

// // // const ProfileCard = ({ fullName, username, aboutMe }) => {
// // //   return (
// // //     <Card className="profile-card">
// // //       <Card.Img variant="top" src={backgroundImage} alt="Background" />
// // //       <Card.Body>
// // //         <div className="text-center">
// // //           <Card.Img
// // //             src={profilePic}
// // //             alt="Profile"
// // //             className="img-fluid rounded-circle profile-photo"
// // //           />
// // //         </div>
// // //         <Card.Title>{fullName}</Card.Title>
// // //         <Card.Text>{username}</Card.Text>
// // //         <Card.Text>{aboutMe}</Card.Text>
// // //         <div className="social-icons text-center">
// // //           <FontAwesomeIcon icon={faFacebook} className="me-2" />
// // //           <FontAwesomeIcon icon={faTwitter} className="me-2" />
// // //           <FontAwesomeIcon icon={faWhatsapp} />
// // //         </div>
// // //       </Card.Body>
// // //     </Card>
// // //   );
// // // };

// // // export default ProfileCard;

// // // // import React from "react";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import {
// // // //   faFacebook,
// // // //   faTwitter,
// // // //   faWhatsapp
// // // // } from "@fortawesome/free-brands-svg-icons";

// // // // import backgroundImage from "../../images/background.jpg";
// // // // import profilePic from "../../images/avatar.jpg";
// // // // //import "./ProfileCard.css"; // Don't forget to create and import your CSS file

// // // // const ProfileCard = ({ fullName, username, aboutMe }) => {
// // // //   return (
// // // //     <div className="profile-card">
// // // //       <div className="background-photo" style={{ height: "20px" }}>
// // // //         <img
// // // //           src={backgroundImage}
// // // //           alt="Background"
// // // //           className="img-fluid"
// // // //           style={{ height: "200px", width: "100%" }}
// // // //         />
// // // //       </div>
// // // //       <div className="profile-info">
// // // //         <div className="profile-photo ">
// // // //           <img
// // // //             src={profilePic}
// // // //             alt="Profile"
// // // //             className="img-fluid rounded-circle"
// // // //             style={{ height: "50%", width: "50%" }}
// // // //           />
// // // //         </div>
// // // //         <h2>{fullName}</h2>
// // // //         <p>{username}</p>
// // // //         <p>{aboutMe}</p>
// // // //         <div className="social-icons">
// // // //           <FontAwesomeIcon icon={faFacebook} />
// // // //           <FontAwesomeIcon icon={faTwitter} />
// // // //           <FontAwesomeIcon icon={faWhatsapp} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProfileCard;

// // // // // import React from "react";
// // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // import {
// // // // //   faFacebook,
// // // // //   faTwitter,
// // // // //   faWhatsapp
// // // // // } from "@fortawesome/free-brands-svg-icons";

// // // // // import backgroundImage from "../../images/background.jpg";
// // // // // import profilePic from "../../images/avatar.jpg";

// // // // // const ProfileCard = ({ fullName, username, aboutMe }) => {
// // // // //   return (
// // // // //     <div className="profile-card">
// // // // //       <div className="background-photo">
// // // // //         <img src={backgroundImage} alt="Background" className="img-fluid" />
// // // // //       </div>
// // // // //       <div className="profile-photo">
// // // // //         <img
// // // // //           src={profilePic}
// // // // //           alt="Profile"
// // // // //           className="img-fluid rounded-circle"
// // // // //         />
// // // // //       </div>
// // // // //       <h2>{fullName}</h2>
// // // // //       <p>{username}</p>
// // // // //       <p>{aboutMe}</p>
// // // // //       <div className="social-icons">
// // // // //         <FontAwesomeIcon icon={faFacebook} />
// // // // //         <FontAwesomeIcon icon={faTwitter} />
// // // // //         <FontAwesomeIcon icon={faWhatsapp} />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProfileCard;
