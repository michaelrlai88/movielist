const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('token');
    if (!token) {
      res.status(403).json('Not authorized');
    }

    const payload = jwt.verify(token, process.env.jwtKey);
    if (payload) console.log('success');
    req.user_id = payload.user_id;
    next();
    //
  } catch (error) {
    console.log(error.message);
    res.status(403).json('Not authorized');
  }
};
