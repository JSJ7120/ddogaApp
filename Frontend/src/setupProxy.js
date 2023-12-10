const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/map-geocode", {
      target: "https://naveropenapi.apigw.ntruss.com",
      changeOrigin: true,
    })
  );
};
