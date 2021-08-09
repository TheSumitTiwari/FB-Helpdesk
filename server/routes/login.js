const express = require("express");
const router = express.Router();
//models
const User = require("../models/User");
//config
const config = require("config");
//passport
const jwt = require("jsonwebtoken");
const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });
const fetch = require('node-fetch');


//-------------------------------------------------------------------------------------



router.post("/login", (req, res1) => {
  const userId = req.body.userId;
  const accessToken = req.body.accessToken;
  //------------
  let requestURL = `https://graph.facebook.com/${userId}?fields=id,name,email,picture&access_token=${accessToken}`;
  fetch(requestURL, 
  { method: 'GET',
  })
    .then( async res => res.json()) // expecting a json response
    .then( async res => {
       let user =  await User.findOne({
        userId: res.id,
      });

      if (user){
        //user already exists
        console.log("User already exists... Proceeding to login");
        try {
          // JWT token generation Process
          //creating payload for jsonwebtoken
            const payload = {
              user: {
                userId: user.userId,
              },
            };

          //Token Generation
            jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;

                  console.log("WELCOME : " + token);
                  res1.json({ token }); // Return jsonwebtoken
                }
            );
          } catch (err) {
            console.error(err.message);
            res1.status(500).json({ errors: [{ msg: err.message }] });
          }
      }else {
        //"User doesn't exists... Proceeding to register"

        console.log("User doesn't exists... Proceeding to register");
        const newUser = new User({
          userId:res.id,
          name: res.name,
          email: res.email,
          picture: res.picture.data.url,
        });

        await newUser.save((err1, doc) => {
          if (err1) {
            res1.status(500).json({ errors: [{ msg: err1.message }] });
          } else {
            try {
              // JWT token generation Process
              console.log(doc);

              //creating payload for jsonwebtoken
              const payload = {
                user: {
                  userId: doc.userId,
                },
              };

              //  Token Generation
              jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;
                  console.log("WELCOME : " + token);
                  res1.json({ token }); // Return jsonwebtoken
                }
              );
            } catch (err) {
              console.error(err.message);
              res1.status(500).json({ errors: [{ msg: err.message }] });
            }
          }
        });
      }
    });
  });

  router.get("/secret", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log(req.user);
    res.json(req.user);
  });

  module.exports = router;
