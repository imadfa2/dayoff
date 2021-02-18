const jwt = require("jsonwebtoken");
var username = null;

module.exports = {
  token: jwt.sign({ username }, "vX7xQr*45h&J", {
    expiresIn: "48h",
  }),
};
