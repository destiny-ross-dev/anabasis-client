import { useState } from "react";
import { Link } from "react-router-dom";
import LogoSrc from "/Logo.png";
import FormInput from "../../components/form-input/form-input";
import { SignUpContainer, SignUpForm } from "./sign-up.styles";

const defaultFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormState);
  const { firstName, lastName, email, password } = formFields;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <img src={LogoSrc} alt="Anabasis logo" />
        <h2>Welcome</h2>
        <p>Sign in to track your applications.</p>
        <FormInput
          placeholder="First Name"
          type="text"
          icon="fa-solid fa-user"
          onChange={handleChange}
          name="firstName"
          value={firstName}
        />
        <FormInput
          placeholder="Last Name"
          type="text"
          icon="fa-solid fa-user"
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />

        <FormInput
          placeholder="Email Address"
          type="email"
          icon="fa-solid fa-envelope"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          placeholder="Password"
          type="password"
          icon="fa-solid fa-lock"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <button type="submit">Create Account</button>
        <span>
          {`Have an account? `}
          <Link to="/signin">Sign in</Link>
        </span>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
