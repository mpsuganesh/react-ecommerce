import config from 'react-global-configuration';
 

import React from 'react';

function Configuration() {
const configuration = {
    APP_BASE_URL: 'bar' 
};
config.set(configuration); 
}

export default Configuration;
