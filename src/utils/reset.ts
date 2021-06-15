import { Subjects } from "../@types/declarations";

export const resetContactFormState = () => {
  return {
    name: "",
    email: "",
    message: "",
    subject: "" as Subjects,
  };
};
