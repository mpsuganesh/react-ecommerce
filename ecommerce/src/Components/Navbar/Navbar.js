import React, { Component } from 'react';
import axios from 'axios'; 
import config from 'react-global-configuration';
import {
    Link
  } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
    } from "mdbreact";
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+config.get("API_TOKEN")+''
  }
class Navbar extends Component {
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
    constructor(props) {
        super(props)

        this.state = {
            categories:[] 
        }
    axios.get(config.get("API_BASE_URL")+'/categories', {
        headers: headers
        })
        .then((res) => {
            this.setState({
                categories:res.data
            });
            //console.log(res)
        })
        .catch((error) => {
            console.log(error)
        });
    }
    

    render() {
        //console.log(this.state.categories.children_data);
        return (
            <div>
        <MDBNavbar color="black" dark expand='md' scrolling fixed='top' >
        <MDBNavbarBrand>
        <Link to ="/"><img src="http://127.0.0.1/magento25/pub/media/logo/stores/6/Grocery.png" /></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {
                    this.state.categories.children_data&&this.state.categories.children_data.map(categorie => 
                        //console.log(categorie.name)
                    <MDBNavItem>
                    <MDBNavLink to={"/product-list/"+categorie.id}>{categorie.name}</MDBNavLink>
                    </MDBNavItem>
                    )
            }
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
            </div>
        )
    }
}

export default Navbar
