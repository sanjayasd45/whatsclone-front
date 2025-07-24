import { toast } from "react-toastify";

export const validateForm = ({formData}) => {
  const { name, number, email, password } = formData;
    if (!name || !number || !email || !password) {
        toast.info("All fields are required", {theme: "colored"});
        return false;
    }
  if (!/^\d{10}$/.test(number)) {
    toast.info("Number must be exactly 10 digits", {theme: "colored"});
    return false;
  }

  if (!email.includes("@")) {
    toast.info("Email must contain @", {theme: "colored"});
    return false;
  }

  if (password.length < 6) {
    toast.info("Password must be at least 6 characters", {theme: "colored"});
    return false;
  }

  return true;
};
