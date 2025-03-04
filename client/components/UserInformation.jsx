import React from "react"
import ReactDOM from 'react-dom';
import {Button, Menu, TextField, MenuItem} from '@material-ui/core';
import {makeStyles, FormLabel, FormGroup, FormControl, FormControlLabel, Checkbox} from '@material-ui/core';

import SimpleCard from './views/SimpleCard.jsx'
import SimpleForm from './views/SimpleForm.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const therapyBeforeOpt = ['Yes', 'No'];
const genderIdentities = ['Male', 'Female', 'Transgender MTF', 'Transgender FTM', 'Non-binary', 'Gender Fluid', 'Other', 'I don\'t know'];
const sexualOrientations = ['Heterosexual/Straight', 'Homosexual/Gay/Lesbian', 'Bisexual/Pansexual', 'Asexual', 'Demisexual', 'Other'];
const relationshipStatuses = ['In a relationship', 'Domestic Partnership/Married', 'Divorced', 'Widowed', 'Other'];
const therapistPreferences = ['Male', 'Female', 'Other', 'Does not matter'];
const pronouns = ['He/Him/His', 'She/Her/Hers', 'They/Them/Theirs', 'Other'];

function UserInformation() {
  const classes = useStyles();
  const [counseling, setCounseling] = React.useState({
    impostor_syndrome: false,
    lgbtqia_issues: false,
    marriage_counseling: false,
    childhood_trauma: false,
    substance_abuse: false,
    mental_health: false
  });
  const [therapyBefore, setTherapyBefore] = React.useState();
  const [genderIdentity, setGenderIdentity] = React.useState();
  const [sexualOrentation, setSexualOrientation] = React.useState();
  const [relationshipStatus, setRelationshipStatus] = React.useState();
  const [therapistPreference, setTherapistPreference] = React.useState();
  const [pronoun, setPronoun] = React.useState();

  const handleChange = (event) => {
    setCounseling({ ...counseling, [event.target.name]: event.target.checked });
    setTherapyBefore(event.target.value);
    setGenderIdentity(event.target.value);
    setSexualOrientation(event.target.value);
    setRelationshipStatus(event.target.value);
    setTherapistPreference(event.target.value);
    setPronoun(event.target.value);
  };

  const { impostor_syndrome,
    lgbtqia_issues,
    marriage_counseling,
    childhood_trauma,
    substance_abuse,
    mental_health } = counseling;
  
  return (
    <SimpleCard >
    <h2>User Information</h2>
      <SimpleForm btn='Enter'>
        <TextField required id="user_age" label="Age" />
        <br/>
        <TextField required id="therapy_experience" select label="Have you ever been in therapy before?" value={therapyBefore} onChange={handleChange}>
          {therapyBeforeOpt.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <TextField required id="years_experience" label="Years of Therapy Experience" />
        <br/>
        <TextField required id="gender_identity" select value={genderIdentity} onChange={handleChange} label="Gender Identity">
          {genderIdentities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <TextField required id="sexual_orientation" select value={sexualOrentation} onChange={handleChange}label="Sexual Orientation">
          {sexualOrientations.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <TextField required id="relationship_status" select value={relationshipStatus} onChange={handleChange} label="Relationship Status">
          {relationshipStatuses.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <TextField required id="therapist_preference" select value={therapistPreference} onChange={handleChange} label="Therapist Gender Preference">
          {therapistPreferences.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <TextField required id="pronouns" select value={pronoun} onChange={handleChange} label="Pronouns">
          {pronouns.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <br/>
        <FormControl component="fieldset">
        <FormLabel component="legend">Please check off all fields you would like your therapist to have experience counseling for:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={impostor_syndrome} onChange={handleChange} name="impostor_syndrome" />
              }
              label="Impostor Syndrome"
            />
            <FormControlLabel
              control={
                <Checkbox checked={lgbtqia_issues} onChange={handleChange} name="lgbtqia_issues" />
              }
              label="LGBTQIA Issues"
            />
            <FormControlLabel
              control={
                <Checkbox checked={marriage_counseling} onChange={handleChange} name="marriage_counseling"/>
              }
              label="Marriage Counseling"
            />
            <FormControlLabel
              control={
                <Checkbox checked={childhood_trauma} onChange={handleChange} name="childhood_trauma"/>
              }
              label="Childhood Trauma"
            />
            <FormControlLabel
              control={
                <Checkbox checked={substance_abuse} onChange={handleChange} name="substance_abuse"/>
              }
              label="Substance Abuse"
            />
            <FormControlLabel
              control={
                <Checkbox checked={mental_health} onChange={handleChange} name="mental_health"/>
              }
              label="Mental Health"
            />
          </FormGroup>
      </FormControl>
      </SimpleForm>
    </SimpleCard >
  );
}

export default UserInformation;
