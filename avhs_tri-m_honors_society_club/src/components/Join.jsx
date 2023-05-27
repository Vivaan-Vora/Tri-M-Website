import React, { useRef, useState, useEffect } from "react";
//import FormInput from "./FormInput";

const Join = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phonenumber: "",
    instrument: "",
    gradyear: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Enter your full name.",
      label: "Full Name:",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address.",
      label: "Email:",
      required: true,
    },
    {
      id: 3,
      name: "phonenumber",
      type: "number",
      placeholder: "Phone Number",
      errorMessage: "",
      label: "Phone Number (Optional):",
      required: false,
      minLength: "10",
    },
    {
      id: 4,
      name: "instrument",
      type: "text",
      placeholder: "Instrument",
      errorMessage: "Need to be experienced in at least 1 instrument",
      label: "Instrument(s):",
      required: true,
    },
    {
      id: 5,
      name: "gradyear",
      type: "text",
      placeholder: "ex. 2025",
      errorMessage: "Enter Valid High School Graduation Year.",
      label: "Graduation Year:",
      required: true,
      minLength: "4",
      maxLength: "4",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);


  const [submitted, setSubmitted] = useState(false); // State variable for tracking submission

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phonenumber, instrument, gradyear } = values;
    const res = await fetch(
      "https://tri-m-information-c5ec1-default-rtdb.firebaseio.com/triminformation.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phonenumber,
          instrument,
          gradyear,
        }),
      }
    );

    if (res.ok) {
      setSubmitted(true); 
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [submitted]);


  return (
    <div className="intro">
      <div class="container">
        <h1 class="font-weight-light">Join Us</h1>
        <p>
          Please fill out this quick and easy form to be entered into our mailing
          list which our team will use to push information/updates about club
          next year. Thank you for taking this initiative to join our society
          and trying to make it a better place!
        </p>
        <div className="join">
          <form onSubmit={handleSubmit}>
            <h1>Apply Here:</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                values={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button onClick={PostData}>Submit</button>
            {submitted && <p>Data submitted successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
