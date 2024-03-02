import { FormInputContainer, Input } from "./form-input.styles";

const FormInput = ({ icon, ...props }) => {
  return (
    <FormInputContainer>
      <i className={icon}></i>
      <Input {...props} />
    </FormInputContainer>
  );
};
export default FormInput;
