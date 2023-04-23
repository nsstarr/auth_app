const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const auth = require("./auth");

// execute database connection
dbConnect();

app.use(cors());

// handle CORS Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// register endpoint

app.post("/user/register", (request, response) => {
  // Check if username and email already exist
  User.findOne({ $or: [{ username: request.body.username.trim().toLowerCase() }, { email: request.body.email.trim().toLowerCase() }] })
    .then((user) => {
      if (user) {
        // If a user with the same username or email already exists, return an error
        return response.status(400).send({
          message: "User already exists",
        });
      } else {
        // hash the password
        bcrypt
          .hash(request.body.password, 10)
          .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
              firstName: request.body.firstName,
              lastName: request.body.lastName,
              username: request.body.username.trim().toLowerCase(),
              email: request.body.email.trim().toLowerCase(),
              password: hashedPassword,
            });
            // save the new user
            user
              .save()
              // return success if the new user is added to the database successfully
              .then((result) => {
                response.status(201).send({
                  message: "User Created Successfully",
                  result,
                });
              })
              //error if the new user wasn't added successfully to the database
              .catch((error) => {
                response.status(500).send({
                  message: "Error creating user",
                  error,
                });
              });
          })
          // catch error if the password hash isn't successful
          .catch((e) => {
            response.status(500).send({
              message: "Password was not hashed successfully",
              e,
            });
          });
      }
    })
    .catch((e) => {
      response.status(500).send({
        message: "Error finding user",
        e,
      });
    });
});

// login endpoint
app.post("/user/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email.trim().toLowerCase() })
    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords do not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password do not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/user", auth, (request, response) => {
 //display the user email and id
  response.status(200).send({
    message: "User fetched successfully",
    userEmail: request.userEmail,
    userId: request.userId,
  });
});

module.exports = app;
