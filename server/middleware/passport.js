const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

const config = require("config");
const JWT_SECRET = config.get("jwtSecret");

const User = require("../models/Users");

passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: JWT_SECRET,
      },
      async (payload, done) => {
        try {
          // Find the user specified in token
          const user = await User.findById(payload.user.id);
  
          // If user doesn't exists, handle it
          if (!user) {
            return done(null, false);
          }
          // Otherwise, return the user
          done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
);


