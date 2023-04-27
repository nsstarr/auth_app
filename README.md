
## Installation
To run this application locally, follow these steps:

Clone this repository to your local machine: 
```bash
git clone https://github.com/nsstarr/auth_app.git
```
Install dependencies for the backend and the frontend:
In the backend directory run
```bash
 npm install
 ```

In the web directory run
```bash
 npm install
 ```

Start the **backend server** by running this command in the **backend** directory
```bash
npm start
```
Start the **frontend development server** by running this command in the **web** directory
```bash
npm run dev
```
Create a .env file in the **web** directory with the following variables:
```bash
VITE_API_URL='https://auth-app-8fv2.onrender.com/' 
```


## Testing

To test the frontend in the web directory run:
```bash
npm run test
```

This will run all the tests in the **tests** directory.


## Hosted URL

The hosted URL for this application is https://auth-app-nsstarr.netlify.app/

The Backend is hosted on https://auth-app-8fv2.onrender.com/
## Backend

### API Endpoints
The backend provides three API endpoints:
```bash 
POST /api/auth/signup 
```

Allows users to create an account by providing their name, email address, and password. The password is hashed with bcrypt before being stored in the database.
```bash
POST /api/auth/login 
```
Allows users to log in to their account by providing their email address and password. The password is compared with the hashed password in the database using bcrypt.
```bash
GET /api/auth/user 
```
Returns the user object if the user is authenticated using JWT authentication.

### Bcrypt Password Hashing

The backend uses bcryptjs to hash user passwords before storing them in the database. This is important for security purposes because it ensures that even if the database is compromised, the passwords cannot be easily deciphered.

### Database

The database used for this application is MongoDB Atlas, a cloud-based MongoDB database service.
## Frontend

## Login Form

The Login Form allows a user to log into their account using their email address and password. The form will display an error message if the user enters an invalid email or password, or if the email and password combination do not match what is on record in the database.

Specifically, the form checks the following conditions when logging in:

- Email field must not be empty
- Password field must not be empty
- Email must be a valid email address format
- The user with the same email doesn't exist in the database

If any of these conditions are not met, the form will display an appropriate error message below the input field. If the user enters valid credentials, the form will log the user in and redirect them to the Welcome page.

## Signup Form

The Sign Up Form allows a user to create a new account by entering their name, email address, password, and confirming their password. The form will display an error message if the user enters an invalid input, such as an invalid email address, or if the password confirmation does not match the password.

Specifically, the form checks the following conditions when signing up:

- Username field must not be empty
- Email field must not be empty
- Password field must not be empty
- Email must be a valid email address format
- Password and Confirm Password fields must match

If any of these conditions are not met, the form will display an appropriate error message below the input field. If the user enters valid input, the form will display the message "You Are Registered Successfully" and the link to the Login page.

It's worth mentioning that after the user logs in or signs up, their user state is stored in the Redux store, which allows us to manage the user's authentication status and display personalized content to the user.
## Optimisation and Perfomance

Currently, user sign up and login processes can take a few seconds. While this is within acceptable limits for smaller applications, it may be an issue as the application scales.

## License

The Horoscope App is licensed under the MIT License. You are free to use, modify, and distribute the app as you see fit, as long as you include the original license and attribution to the original authors.
