
var jwt = require('jwt-simple');
var moment = require('moment');
var User = require('../models/user');

var token_secret = 'this_is_a_secret';

// create an access token for the given user
var create_token = function(user) {

  // set token expiration date as one day from now
  var expiration_days = 1;
  var expires = moment().add(expiration_days, 'days').valueOf();

  // encode the token with some identifying information
  var token = jwt.encode({
    user_id: user.id,
    expires: expires
  }, token_secret);

  return token;
};

// verify the given access token
// return a promise for a boolean
var verify_token = function(token) {
  var decoded_token = jwt.decode(token, token_secret);

  return User
    .findOne({ _id: decoded_token.user_id })
    .execQ()
    .then(function(user) {

      // if the token is more than a day old,
      // it is invalid
      if(decoded_token.expires <= Date.now)
        return null;

      // if the token matches the current token
      // for this user (i.e. if the token has not
      // been invalidated by a logon or logoff in
      // the time since it was issued)
      if(user.token == token)
        return user;

      return null;
    });

};

module.exports = {
  create: create_token,
  verify: verify_token
};

