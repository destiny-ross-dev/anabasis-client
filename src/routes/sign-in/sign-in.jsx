import { useState } from "react";
import { Link } from "react-router-dom";
import LogoSrc from "/Logo.png";
import FormInput from "../../components/form-input/form-input";
import { SignInContainer, SignInForm } from "./sign-in.styles";

const defaultFormState = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormState);
  const { email, password } = formFields;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInForm onSubmit={handleSubmit}>
        <img src={LogoSrc} alt="Anabasis logo" />
        <h2>Welcome</h2>
        <p>Sign in to track your applications.</p>
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
        <Link to="/forgot-password">Forgot Your Password?</Link>
        <button type="submit">Sign in</button>
        <span>
          {`Don't have an account? `}
          <Link to="/signup">Sign up</Link>
        </span>
      </SignInForm>
    </SignInContainer>
  );
};

export default SignIn;
