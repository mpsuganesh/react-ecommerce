const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express');
const app = express();

module.exports = function(app) {
    app.use(
        createProxyMiddleware("products?searchCriteria[page_size]=20", {
            target:"http://127.0.0.1/magento25/rest/V1/",
            secure:false,
            changeOrigin:true
        })
    );
};