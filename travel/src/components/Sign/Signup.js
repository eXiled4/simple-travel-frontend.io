import React from 'react';
// import { Navigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { Typography } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import './Signup.css'
import LoginButton from './LoginButton';
// import Profile from './Profile';

export default function Signup(props) {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [created, setCreated] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  // function createUser(event) {
  //   event.preventDefault();
  //   event.target.reset();

  //   let user = {
  //     firstname,
  //     lastname,
  //     username,
  //     email,
  //     password
  //   };

  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       user:{
  //         email: user.email,
  //         username: user.username,
  //         password: user.password,
  //         firstname: user.firstname,
  //         lastname: user.lastname
  //       }
  //     }),
  //   },
  //   { withCredentials: true }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.status === 'created') {
  //         setCreated(true);
  //         setErrorMessage('');
  //       }
  //     })
  //     .catch((response) =>
  //       setErrorMessage(
  //         "Uh-oh! It didn't work...Make sure your server is running!"
  //       )
  //     );
  // }

  return (
    <div>
      {/* <Profile /> */}
      <br/>
      <br/>
        <div>
          {/* <div className="please-log-in">
            <p>{errorMessage}</p>
          </div> */}
          <h1 className="fancy">It's TIME... to TRAVELLER!</h1><br></br>
						<div>
						  {/* <i className={classes.root}>Whayt's on my bucket list? Everywhere...</i> */}
              <p className={classes.root}><i>"I would totally give up travelling, but I'm not a quitter"</i></p>
						  <p className={classes.root}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
							  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
							  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
							  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
							  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
							  anim id est laborum."

                </p>
            </div>
            <div className={classes.root}>
            <LoginButton />
            </div>
        {/* <Card sx={{ minWidth: 200 }}>
          <CardContent className='CardContainer'> */}
          {/* <form className={classes.root} onSubmit={createUser}> */}
          <br></br>
          {/* <Typography variant="h4" className="fancy">Sign up here!</Typography>
          <br/>
          <TextField
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <br />
            <TextField
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
            <br />
            <TextField
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            /> */}
            <br />
            <br />
            <div>
              
            </div>
          {/* </form> */}
        </div>
      <br />
      <br />
    </div>
  );
}