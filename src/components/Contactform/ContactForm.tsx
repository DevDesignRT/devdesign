import React, { FC, useState } from "react";
import axios from "axios";
import { IContactFormState, Subjects } from "../../@types/declarations";
import { SubjectOptions } from "../../utils/navLinks";
import { resetContactFormState } from "../../utils/reset";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import ResponseMessage from "./ResponseMessage";

const ContactForm: FC = () => {
  const [contactForm, updateContactForm] = useState<IContactFormState>(
    resetContactFormState()
  );
  const [sending, setSending] = useState<boolean>(false);
  const [resMessage, updateResMessage] = useState<string>("");
  const [showResponse, updateShowResponse] = useState<boolean>(false);
  const { name, email, message, subject } = contactForm;
  const handleChange = (event: any) => {
    updateContactForm({ [event.target.name]: event.target.value } as any);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(event.target);
    const contact = {
      subject: formData.get("subject"),
      email: formData.get("email"),
      name: formData.get("name"),
      message: formData.get("message"),
    };
    axios
      .post("https://devdesign-backend.herokuapp.com", contact)
      .then((response) => {
        updateContactForm(resetContactFormState());
        updateResMessage(response.data.message);
        setSending(false);
        updateShowResponse(true);
      })
      .catch((error) => {
        console.log(error);
        updateResMessage(error.message);
      });
  };
  const handleClick = () => {
    updateShowResponse(false);
  };
  return (
    <>
      {showResponse ? (
        <ResponseMessage message={resMessage} handleClick={handleClick} />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              required
              name="subject"
              onChange={handleChange}
              className="form-select"
              aria-label="Default select example"
            >
              {subject && <option value={subject}>{subject}</option>}
              {SubjectOptions.map((subjectInMap: Subjects) => {
                return (
                  <option key={subjectInMap} value={subjectInMap}>
                    {subjectInMap}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <Input
              label="Name *"
              type="text"
              required={true}
              name="name"
              value={name}
              disabled={false}
              changeHandler={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              label="Email *"
              type="email"
              required={true}
              name="email"
              value={email}
              disabled={false}
              changeHandler={handleChange}
            />
          </div>
          <div className="form-group">
            <TextArea
              name="message"
              id="message"
              label="Message *"
              required={true}
              value={message}
              changeHandler={handleChange}
            />
          </div>
          <Button
            loading={sending ? true : false}
            type="submit"
            buttonText={sending ? "Sending..." : "Send"}
            size="lg"
            clickHandler={handleSubmit}
            disabled={sending ? true : false}
          />
        </form>
      )}
    </>
  );
};

export default ContactForm;
