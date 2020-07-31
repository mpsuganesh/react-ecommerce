import React, { Suspense,Component, lazy} from "react";
import config from 'react-global-configuration';
import Loader from '../Loader/Loader';

const configuration = {
  API_BASE_URL: 'http://127.0.0.1/magento25/rest/V1',
  API_TOKEN:'rtphl1kd82sh2vfs9fibdntmfgqzxp88',
  MEADIA_PATH:'http://127.0.0.1/magento25/pub/media'
};
config.set(configuration);

const Navbar = lazy(() => import('../Navbar/Navbar'));

class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Suspense fallback ={<Loader/>}>
    <Navbar/>
    </Suspense>
    );
  }
}

export default Header;