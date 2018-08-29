"use strict";
const path = require("path");

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = "1528353482890_3122";

  // add your config here
  config.middleware = [];

  /* config.proxy = {
    // target host that matched path will be proxy to
    host: `http://127.0.0.1:8000`,
    // path pattern
    match: 'public'
  } */

  exports.static = {
    prefix: "/public/",
    dir: path.join(appInfo.baseDir, "public")
  };

  return config;
};
