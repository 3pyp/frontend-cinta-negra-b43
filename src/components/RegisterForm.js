import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

function RegisterForm(props) {

  const onSubmit = ()=>{
    const data = {
      name: document.getElementById('name').value,
      last_name: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }
    props.submit(data)
  }

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item m="2rem" xs={12}>
            <TextField fullWidth id="name" label="Name" />
          </Grid>
          <Grid item m="2rem" xs={12}>
            <TextField fullWidth id="last_name" label="Last Name" />
          </Grid>
          <Grid item m="2rem" xs={12}>
            <TextField fullWidth id="email" label="Email" />
          </Grid>
          <Grid item m="2rem" xs={12}>
            <TextField type="password" fullWidth id="password" label="Password" />
          </Grid>
        </Grid>
        <Button onClick={onSubmit} mt={3} variant="contained" color="primary">
          Registrarse
        </Button>
      </CardContent>
    </Card>
  );
}

export default RegisterForm;
