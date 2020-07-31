import React, { Component,lazy } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody,MDBNavLink } from 'mdbreact';
import axios from 'axios'; 
import config from 'react-global-configuration';
import {
  Link
} from "react-router-dom";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+config.get("API_TOKEN")+''
}

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products:null    
        }
    }
    componentDidUpdate(prevProps) {
      console.log(prevProps.match.params.categoryId);
      if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) 
      {
        axios.get(config.get("API_BASE_URL")+'/products?searchCriteria[filterGroups][0][filters][0][field]=category_id&searchCriteria[filterGroups][0][filters][0][value]='+this.props.match.params.categoryId+'&searchCriteria[filterGroups][1][filters][0][field]=status&searchCriteria[filterGroups][1][filters][0][value]=1', {
          headers: headers
        })
          .then((res) => {
              this.setState({
                  products:res.data
              });
              //console.log(res)
              //  location.reload()
              
          })
          .catch((error) => {
              console.log(error)
          })
      }
    }
    componentDidMount(){
      axios.get(config.get("API_BASE_URL")+'/products?searchCriteria[filterGroups][0][filters][0][field]=category_id&searchCriteria[filterGroups][0][filters][0][value]='+this.props.match.params.categoryId+'&searchCriteria[filterGroups][1][filters][0][field]=status&searchCriteria[filterGroups][1][filters][0][value]=1', {
        headers: headers
      })
        .then((res) => {
            this.setState({
                products:res.data
            });
            //console.log(res)
            //  location.reload()
            
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    
    render() {
      
        return (
            <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5"> <br></br>
              Our Products {this.props.match.params.categoryId}
            </h2>
            {/* <p className="grey-text text-center w-responsive mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p> */}
            <MDBRow>
               {
                   this.state.products&&this.state.products.items.map(allProducts =>
                    
                    <MDBCol lg="3" md="6" className="mb-lg-0 mb-4" key={allProducts.sku}>
                      <Link to={"/product-details/"+allProducts.custom_attributes[2].value}>
                        <MDBCard className="align-items-center">
                        <MDBCardImage
                        src={config.get("MEADIA_PATH")+"/catalog/product"+allProducts.media_gallery_entries[0].file}
                        top
                        alt={allProducts.name}
                        overlay="white-slight"
                        />
                        <MDBCardBody className="text-center">
                        <h5>
                      <strong>
                        <a href="#!" className="dark-grey-text">
                        {allProducts.name}
                        </a>
                      </strong>
                    </h5>
                        <h4 className="font-weight-bold blue-text">
                        <strong>{allProducts.price}$</strong>
                        </h4>
                        </MDBCardBody>
                        </MDBCard><br></br>
                        </Link>
                    </MDBCol>
                    
                    ) 
               }
            </MDBRow>
          </section>
        )
    }
}

export default ProductList



