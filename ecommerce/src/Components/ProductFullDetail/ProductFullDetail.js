import React, { Component } from 'react';
import axios from 'axios';
import config from 'react-global-configuration';

import ReactHtmlParser from 'react-html-parser';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+config.get("API_TOKEN")+''
  }
class ProductFullDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productFullDetail:null     
        }
    }
    componentDidMount(){
        axios.get(config.get("API_BASE_URL")+'/products?searchCriteria[filterGroups][0][filters][0][field]=url_key&searchCriteria[filterGroups][0][filters][0][value]='+this.props.match.params.urlkey+'&searchCriteria[filterGroups][1][filters][0][field]=status&searchCriteria[filterGroups][1][filters][0][value]=1', {
          headers: headers
        })
          .then((res) => {
              this.setState({
                productFullDetail:res.data
              });
              //console.log(res)
              //  location.reload()
              
          })
          .catch((error) => {
              console.log(error)
          })
      }
      
    render() {
        //console.log(this.state.itemsproductFullDetail);
        return (
            <div className="product-full-details">
                {
                 this.state.productFullDetail&&this.state.productFullDetail.items.map(product =>
                    <main className="mt-5 pt-4" key={product.id}>
    <div className="container dark-grey-text mt-5">
      <div className="row wow fadeIn">
        <div className="col-md-6 mb-4">

          <img src={config.get("MEADIA_PATH")+"/catalog/product"+product.media_gallery_entries[0].file} className="img-fluid" alt="" />

        </div>
        <div className="col-md-6 mb-4">
        <p className="lead font-weight-bold">{product.name}</p>
        <p>Sku: {product.sku}</p>
          <div className="p-4">
            <p className="lead">
              {/* <span class="mr-1">
                <del>$200</del>
              </span> */}
              <span>${product.price}</span>
            </p>
              <input type="number"  aria-label="Search" className="form-control" value="1" />
              <button className="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                <i className="fas fa-shopping-cart ml-1"></i>
              </button>
          </div>
        </div>
      </div>

      {
          product.custom_attributes.map(customAttr =>{
              if (customAttr.attribute_code == "description")
            return <div className="row d-flex justify-content-center wow fadeIn">
            <div className="col-md-6 text-center">
    
          <h4 className="my-4 h4">{customAttr.attribute_code}</h4>
    
          <p>{ ReactHtmlParser (customAttr.value) }</p>
    
            </div>
    
          </div>
          if (customAttr.attribute_code == "about")
          return <div className="row d-flex justify-content-center wow fadeIn">
          <div className="col-md-6 text-center">
  
        <h4 className="my-4 h4">{customAttr.attribute_code}</h4>
        <p>{ ReactHtmlParser (customAttr.value) }</p>
  
          </div>
  
        </div>

        if (customAttr.attribute_code == "storage_and_uses")
        return <div className="row d-flex  wow fadeIn">
        <div className="col-md-6">

          <h4 className="my-4 h4">{"Storage and User"}</h4>

          <p>{ ReactHtmlParser (customAttr.value) }</p>

        </div>

        </div>
            })
      }
    </div>
  </main>
  )}                 
    </div>
    )}
}

export default ProductFullDetail
