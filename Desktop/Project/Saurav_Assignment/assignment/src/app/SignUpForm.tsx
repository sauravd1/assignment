"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  Container,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

type FormValues = {
  name: string;
  email: string;
  gender: string;
};
const SignUpForm = () => {
  const [gender, setGender] = useState(1);
  const [formDataArr, setFormDataArr] = useState([]);


  const form = useForm<FormValues>({});
  const { register, handleSubmit } = form;

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as number);
  };

  const handleSignup = (formData: FormValues) => {
    setFormDataArr(formDataArr.concat(formData))

  };
  return (
    <Container
      sx={{ mt: 10, background: "#c29591" }}
      component='main'
      maxWidth='xs'>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography
          sx={{ mt: 2, mr: 6 }}
          component='h1'
          variant='hs'
          color='#0c6975'>
          Sign UP
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(handleSignup)}
          sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={16} sm={8} sx={{ ml: 8 }}>
              <TextField
                id='1'
                name='FullName'
                type='TEXT'
                label='Name'
                inputProps={{ minLength: 1, maxLength: 100 }}
                defaultValue='John Doe'
                required
                fullWidth
                {...register("FullName")}
              />
            </Grid>
            <Grid item xs={10} sm={8} sx={{ ml: 8 }}>
              <TextField
                id='2'
                name='Email'
                type='TEXT'
                label='Email'
                defaultValue='hello@mail.com'
                required
                fullWidth
                inputProps={{ minLength: 1, maxLength: 50 }}
                {...register("Email")}
              />
            </Grid>
            <Grid item xs={10} sm={8} sx={{ ml: 8 }}>
              <FormControl fullWidth>
                <InputLabel id='6'>Gender</InputLabel>
                <Select
                  value={gender}
                  defaultValue={1}
                  id='61'
                  labelId='genderLabel'
                  label='Gender'
                  required
                  {...register("gender")}
                  onChange={handleGenderChange}>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                  <MenuItem value={3}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item sx={{ ml: 8 }}>
            <Button
              type='submit'
              variant='contained'
              sx={{ ml: 10, mt: 4, mb: 2, bgcolor: "green" }}>
              Sign UP
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUpForm;
