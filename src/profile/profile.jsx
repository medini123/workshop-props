import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import ProfileData from '../ProfileData';
function profile({img,fullName,bio,profession,ProfileFn}) {
   

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>About me</Card.Title>
          <Card.Text>
                      <p>fullName : {fullName}</p>
                      
                      <p>Bio : {bio}</p>
                      
           <p>profession: {profession}</p>
          </Card.Text>
                  <Button variant="primary" onClick={() => ProfileFn(props.data.fullName)} > click
                  </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
Profile.prototype = {
    fullName: PropTypes.string,
    img:PropTypes.string
};

ProfileData.defaultProps = {
  img: "https://www.logiquetechno.com/wp-content/uploads/2020/11/retirer-photo-de-profil-facebook.png",
};


export default Profile