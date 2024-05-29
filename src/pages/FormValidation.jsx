import React, { useState } from "react";

const FormValidation = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [fromError, setFromError] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const onInputFill = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const regex = {
      name: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      confirmPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
    };
    const error = {};
    if (!regex.name.test(formdata.name)) {
      error.name = "invaild name";
    }
    if (!regex.number.test(formdata.number)) {
      error.number = "invaild number";
    }
    if (!regex.password.test(formdata.password)) {
      error.password =
        "must be contain 1 CapitalLetter , 1 symbol ,1 number or minimum 8 digit !";
    }
    if (!regex.confirmPassword.test(formdata.confirmPassword)) {
      error.confirmPassword =
        "must be contain 1 CapitalLetter , 1 symbol ,1 number or minimum 8 digit !  ";
    }
    if (formdata.password !== formdata.confirmPassword) {
      error.confirmPassword = "Passwords do not match.";
    }
    setFromError(error);
    if (Object.keys(error).length === 0) {
      setFormdata({
        name: "",
        number: "",
        password: "",
        confirmPassword: "",
      });
      setFromError({
        name: "",
        number: "",
        password: "",
        confirmPassword: "",
      });
      console.log(formdata);
    }
  };
  return (
    <div className="flex-grow items-center flex">
      <div className="border rounded-xl blur-0 p-10 w-full duration-300 inline-block">
        <h1 className="text-black mb-3 font-black text-center font-Exo text-3xl">
          Form Validation
        </h1>
        <form className="flex-col flex gap-3" onSubmit={onSubmit}>
          <input
            onChange={onInputFill}
            type="text"
            placeholder="name"
            name="name"
            value={formdata.name}
            className="border-2 rounded-md capitalize font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {fromError.name && <p className="text-red-700">{fromError.name}</p>}
          <input
            onChange={onInputFill}
            type="number"
            placeholder="number"
            name="number"
            value={formdata.number}
            className="border-2 rounded-md font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {fromError.number && (
            <p className="text-red-700">{fromError.number}</p>
          )}
          <input
            onChange={onInputFill}
            type="password"
            placeholder="password"
            name="password"
            value={formdata.password}
            className="border-2 rounded-md font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {fromError.password && (
            <p className="text-red-700">{fromError.password}</p>
          )}
          <input
            onChange={onInputFill}
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            value={formdata.confirmPassword}
            className="border-2 rounded-md font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {fromError.confirmPassword && (
            <p className="text-red-700">{fromError.confirmPassword}</p>
          )}

          <input
            className="text-white font-Exo cursor-pointer text-xl font-bold font-exo  sm:px-6 px-3 sm:py-3 py-2 bg-black rounded-3xl mt-5 hover:text-red-400 duration-300"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
