const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();
  //options for cookies

  const options = {
    expires: new Date(Date.now() + 60 * 24 * 3600000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
module.exports = sendToken;
