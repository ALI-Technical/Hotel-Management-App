const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const token = req.cookies.acces_token;

  jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
    // console.log(decoded, "decoded");
    req.body.decoded = decoded;
    if (!err) {
      next();
    } else {
      res.json({ message: "UnAuth" });
      //   res.status(401).sendFile(path.join(__dirname, "./web/build/index.html"));
      // console.log("error");
    }
  });
};

module.exports = authMiddleWare;