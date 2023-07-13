const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../config");

const { UnauthorizedError } = require("../utils/errors");

// * function that extracts the JWT from the request header
const jwtFrom = ({ headers }) => {
  // gets the user request and checks if there is a header in our request and i
  // an authorization key is present
  if (headers?.authorization) {
    // Authorization: Bearer bvibviiruee

    // if the key is present, we split it at the end and label the
    // first half scheme and second half token
    const [scheme, token] = headers.authorization.split(" ");

    // we get rid of any excess space in our scheme and check
    // if the scheme is "Bearer"
    if (scheme.trim() === "Bearer") {
      // if the scheme is bearer, we return the token that was
      // a part of our header
      return token;
    }
  }

  // if there is no header, then we return undefined as the token
  return undefined;
};

// * function to attach the user to the res object
const extractUserFromJwt = (req, res, next) => {
  try {
    // we parse through the request to find the token
    const token = jwtFrom(req);

    // if there is a token
    if (token) {
      // we try to verify it to extract the user info that was encoded within it
      // if we are able to verify it, we extarct its content and put it in the
      // res.locals.user part of our response to make it accessible don the line
      res.locals.user = jwt.verify(token, SECRET_KEY);
    }

    // we then move on to the rest of our code
    return next();
  } catch (error) {
    // if there is an error at some point throughout the code, we acknowledge the
    // error and move on with our code
    return next();
  }
};

// * function that verifies a authed user exists

const requireAuthenticatedUser = (req, res, next) => {
  try {
    // deconstructs res.locals to find user
    const { user } = res.locals;
    // if there isn't a user, then we throw an unauthorized error
    if (!user?.email) {
      throw new UnauthorizedError();
    }
    // we then move on if all goes well
    return next();
  } catch (error) {
    // if there is an unprecedented error, we send it to our next function
    return next(error);
  }
};

module.exports = {
  extractUserFromJwt,
  requireAuthenticatedUser,
};
