import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.aspiresys.com/"> aspiresys.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;