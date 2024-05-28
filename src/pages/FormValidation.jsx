import React, { useState } from "react";

const FormValidation = () => {
  const [pop, setPop] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    number: "",
    password: "",
    confirmpassword: "",
  });
  const [Fromerror, setFromerror] = useState({
    name: "",
    number: "",
    password: "",
    confirmpassword: "",
  });
  const inputCon = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const clg = (e) => {
    e.preventDefault();

    const regex = {
      name: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      confirmpassword:
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
      error.password = "invaild password";
    }
    if (!regex.confirmpassword.test(formdata.confirmpassword)) {
      error.confirmpassword = "invaild confirmPassword";
    }
    if (formdata.password !== formdata.confirmpassword) {
      error.confirmpassword = "Passwords do not match.";
    }
    setFromerror(error);
    if (Object.keys(error).length === 0) {
      setFormdata({
        name: "",
        number: "",
        password: "",
        confirmpassword: "",
      });
      setFromerror({
        name: "",
        number: "",
        password: "",
        confirmpassword: "",
      });
      setPop(true);
    }
  };
  return (
    <div className="flex-grow items-center flex ">
      <div
        className={`${
          pop ? " blur-lg" : "blur-0"
        } border rounded-xl p-10 w-full max-w-[900px] mx-auto  duration-300  inline-block`}
      >
        <h1 className="text-white mb-3 font-black text-center font-Exo  text-3xl">
          Form Validation
        </h1>
        <form className=" flex-col  flex gap-3" onSubmit={clg}>
          <input
            onChange={inputCon}
            type="name"
            placeholder="name"
            name="name"
            value={formdata.name}
            className="border-2 rounded-md font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.name && <p className=" text-red-700">{Fromerror.name}</p>}
          <input
            onChange={inputCon}
            type="number"
            placeholder="number"
            name="number"
            value={formdata.number}
            className="border-2 rounded-md font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.number && (
            <p className=" text-red-700">{Fromerror.number}</p>
          )}
          <input
            onChange={inputCon}
            type="password"
            placeholder="password"
            name="password"
            value={formdata.password}
            className="border-2 rounded-md font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.password && (
            <p className=" text-red-700">{Fromerror.password}</p>
          )}
          <input
            onChange={inputCon}
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            value={formdata.confirmpassword}
            className="border-2 rounded-md font-Exo placeholder:font-Exo p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.confirmpassword && (
            <p className=" text-red-700">{Fromerror.confirmpassword}</p>
          )}

          <input
            className="text-black font-Exo cursor-pointer text-xl font-bold font-exo  sm:px-6 px-3 sm:py-3 py-2 bg-white rounded-3xl mt-5 hover:text-red-400 duration-300"
            type="submit"
          />
        </form>
      </div>
      <div
        className={` ${
          pop ? "scale-1" : "scale-0"
        } p-10 translate-x-[-50%]  duration-300 translate-y-[-50%] bg-slate-800 absolute left-[50%] top-[50%] mt-5 border-blue-700 border-2`}
      >
        <p className=" text-green-500">Login successfully !!!!!</p>
        <button
          onClick={() => setPop(false)}
          className="text-green-500 mx-auto flex mt-5"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default FormValidation;
