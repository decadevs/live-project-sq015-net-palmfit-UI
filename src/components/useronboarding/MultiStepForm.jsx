import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './activitylevel.css';
import './credential.css';
import './weightgoal.css';
import './welcomeonboard.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom"





const MultiStepForm = () => {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserData] = useState({
    weightGoal: '',
    activityLevel: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
  });

  const styles = {
    disableBtn: {
      background: userData.weightGoal == "" && "gray !important"
    }
  }

  const steps = [
    Welcomeonboard,
    Weightgoal,
    Activitylevel,
    Credential,
  ];
console.log(userData)
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleUserDataChange = (key, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };


const [successMessage, setSuccessMessage] = useState('');
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);


  const handleFormSubmit = async () => {
    // // Perform your post request here using userData
    // console.log('Form submitted:', userData);
    // console.log("success")
    // Reset the form or navigate to a new page if needed

    const storedToken = localStorage.getItem('userToken');

   
   const parsedToken = JSON.parse(storedToken);
   const userId = parsedToken.sub;

    const payload = {
      weightGoal: userData.weightGoal,
      activityLevel: userData.activityLevel,
      age: parseInt(userData.age),
      height: parseFloat(userData.height),
      weight: parseFloat(userData.weight),
      gender: parseFloat(userData.gender),
      appUserId: userId,

    };
    try{
        const response = await axios.post(`https://localhost:7069/api/UserCalorieData/add-user-calorie-data`,payload);
        if (response.data.succeeded) 
        {     
          console.log(response.data.data); 
            setError(''); // Clear any previous error
            setSuccessMessage(response.data.data);
            navigate("/meal-plans")
        }
        else
        {
            console.log(response.data.error);
            setSuccessMessage('');
            setError(response.data.error); // Display the error message
        }  
        setError('');
        console.log(response);
    }
    catch (error)
    {
        if (error.response)
        {
            console.log(error);
            setSuccessMessage('');
            setError(error.response.data.data);  
        }
        else
        {
            setSuccessMessage('');
            setError('An error occurred during Login');
        }
    }
    finally
    {
      setLoading(false);
    }
  }


  

  const isButtonDisabled = () => {
    const { weightGoal, activityLevel, age, height, weight, gender } = userData;
    return (
      activeStep === 1 && weightGoal === '' ||
      activeStep === 2 && activityLevel === '' ||
      activeStep === 3 && (age === '' || isNaN(age) ||height === '' || isNaN(height) || weight === '' ||isNaN(weight) || gender === '')
    );
  };

  const ActiveComponent = steps[activeStep];

  return (
    <div>
      <ActiveComponent
        onNext={handleNext}
        userData={userData}
        onUserDataChange={handleUserDataChange}
        isButtonDisabled={isButtonDisabled}
        handleFormSubmit={handleFormSubmit}
        styles = {styles}
      />
      {/* <button
        className='next_butt mb-2'
        onClick={handleNext}
        disabled={isButtonDisabled()}
      >
        Next
      </button> */}
      {activeStep === steps.length - 1 && (
        <button
          className='next_butt mb-2'
          onClick={handleFormSubmit}
          disabled={isButtonDisabled()}
        >
          Submit
        </button>
      )}
    </div>
  );
};

const Welcomeonboard = ({ onNext }) => (
  <div className='__con__con__'>
    <div className='mt-5 holder__ d-flex justify-content-center'>
      <div className='custom__ '>
        <div className='row mt-5'>
          <div className='col'>
            <h4>Welcome! Let's Customize</h4>
            <h4 className='mb-5'>PalmFit for your goals.</h4>
            <button className='btn btn__ctrl___ btn-md' onClick={onNext} disabled={false}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Weightgoal = ({ onNext, userData, onUserDataChange}) => (
  <div className='__con__con__'>
    <div className="general ">
      <div className="content__ row">
        <div className="textholder mb-1 mt-3"><h5>What is your weight goal?</h5></div>
        <div className="selections">
          <span className={`'col-md-12' ${userData.weightGoal == 0 ? "selected______" : "options"}`} onClick={() => onUserDataChange('weightGoal', 0)}>Lose</span>
          <span className={`'col-md-12' ${userData.weightGoal == 1 ? "selected______" : "options"}`} onClick={() => onUserDataChange('weightGoal', 1)}>Maintain</span>
          <span className={`'col-md-12' ${userData.weightGoal == 2 ? "selected______" : "options"}`} onClick={() => onUserDataChange('weightGoal', 2)}>Gain</span>
        </div>
        <button type='button' disabled={true && userData.weightGoal === ""} className={`next_butt mb-2 ${ userData.weightGoal == "" ? "btn__disabled____" : "btn__ctrl___"}`} onClick={onNext} >
          Next
        </button>
      </div>
    </div>
  </div>
);

const Activitylevel = ({ onNext, userData, onUserDataChange }) => (
  <div className='__con__con__'>
    <div className='activity_container___'>
      <div className='baseline_con___'>
        <h4>What is your activity level?</h4>
      </div>
      <div className='choice_con___'>
        <div className={`${userData.activityLevel == 0 ? "selected______" : "options"}`} onClick={() => onUserDataChange('activityLevel', 0)}><h5>Inactive</h5> <span>(No exercise)</span></div>
        <div className={`${userData.activityLevel == 1 ? "selected______" : "options"}`} onClick={() => onUserDataChange('activityLevel', 1)}><h5>Somewhat Active</h5> <span>(3x-4x per week)</span></div>
        <div className={`${userData.activityLevel == 2 ? "selected______" : "options"}`}   onClick={() => onUserDataChange('activityLevel', 2)}><h5>Active</h5> <span>(5x+ per week)</span></div>
      </div>
      <div className="next_con___">
        <button type='button' disabled={true && userData.activityLevel === ""} className={`next_butt mb-2 ${ userData.activityLevel == "" ? "btn__disabled____" : "btn__ctrl___"}`} onClick={onNext}>Next</button>
      </div>
    </div>
  </div>
);

const Credential = ({ userData, onUserDataChange, handleFormSubmit, successMessage, error, loading}) => (
  <div className='__con__con__'>
    <div className='credential_container'>
      <div className='cal_con'>
        <h5>Calculate your calorie</h5>
      </div>
      <div>
        <div className='age_con'>
          <label>Your Age</label>
          <input type="number" value={userData.age} onChange={(e) => onUserDataChange('age', e.target.value)} />
        </div>
        <div className='age_con'>
          <label>Height</label>
          <input type="number" placeholder='cm' value={userData.height} onChange={(e) => onUserDataChange('height', e.target.value)} />
        </div>
        <div className='age_con'>
          <label>Weight</label>
          <input type="number" placeholder='kg' value={userData.weight} onChange={(e) => onUserDataChange('weight', e.target.value)} />
        </div>
      </div>
      <div className="gender">
        <h5>You're a</h5>
        <div className="holder___">
          <button onClick={() => onUserDataChange('gender', 0)}>Male</button>
          <button onClick={() => onUserDataChange('gender', 1)}>Female</button>
        </div>
      </div>
      {/* Display error message */}
      {error && <div className="form-holder" style={{ color: 'red', textAlign: 'center' }}>
          <small><b>{error}</b></small>
      </div>}
      {/* Display success message */}
      {successMessage && <div className="form-holder" style={{ color: 'green', textAlign: 'center' }}>
        <small><b>{successMessage}</b></small>
      </div>}
      {/* Display loading spinner */}
      {loading && <div className="form-holder" style={{ textAlign: 'center' }}>
        <small>Loading...</small>
      </div>}
      <div className='Direction'>
                <button className={`next_butt mb-2 ${userData.gender === "" && userData.weight === "" && userData.height === "" && userData.age === "" ? "btn__disabled____" : "btn__ctrl___"}`} onClick={handleFormSubmit} disabled={true && userData.gender === "" && userData.weight === "" && userData.height === "" && userData.age === "" && loading}>Submit</button>
      </div>
    </div>
  </div>
);

export default MultiStepForm;