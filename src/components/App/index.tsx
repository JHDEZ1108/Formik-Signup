import React from 'react';
import { Formik, Form , Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import "./App.css"

import FormikField from "../FormikField";
interface FormValues{
  name: string;
  position: string;
}

const initialValues: FormValues = {
  name: '',
  position: ''
}

const App: React.FC = () =>{
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };

  /* Validation schemas */
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short to be a name!')
      .required('You need to add a name!'),
    position: Yup.string()
      .required('You need to add a position')
  });
  
  return(
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({dirty, isValid}) =>{
          return(
            <Form>
              <FormikField name="name" label="Name" required/>
              
              <div>
                <label>Position:</label>
                <Field
                  name="position"
                  as="select"
                  placeholder="Choose your position"
                >
                  <option value=""></option>
                  <option value="front-end">FrontEnd Developer</option>
                  <option value="back-end">BackEnd Developer</option>
                  <option value="devops-engineer">DevOps Engineer</option>
                  <option value="designer">Designer</option>
                </Field>
              </div>
              
              <button disabled={!dirty || !isValid} type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  );
};

export default App;