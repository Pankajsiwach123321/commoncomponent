import React, { useState } from "react";

const FromValidation = () => {
  const [pop, setPop] = useState(false);
  const [fromdata, setFromdata] = useState({
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
    setFromdata({ ...fromdata, [name]: value });
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
    if (!regex.name.test(fromdata.name)) {
      error.name = "invaild name";
    }
    if (!regex.number.test(fromdata.number)) {
      error.number = "invaild number";
    }
    if (!regex.password.test(fromdata.password)) {
      error.password = "invaild password";
    }
    if (!regex.confirmpassword.test(fromdata.confirmpassword)) {
      error.confirmpassword = "invaild confirmPassword";
    }
    if (fromdata.password !== fromdata.confirmpassword) {
      error.confirmpassword = "Passwords do not match.";
    }
    setFromerror(error);
    if (Object.keys(error).length === 0) {
      setFromdata({
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
    <div className=" min-h-screen px-3 w-full  flex justify-center items-center">
      <div
        className={`${
          pop ? " blur-lg" : "blur-0"
        } border rounded-xl p-10 w-full max-w-[900px] mx-auto  duration-300  inline-block`}
      >
        <h1 className="text-white mb-3 font-black text-center text-3xl">
          Form Validation
        </h1>
        <form className=" flex-col  flex gap-3" onSubmit={clg}>
          <input
            onChange={inputCon}
            type="name"
            placeholder="name"
            name="name"
            value={fromdata.name}
            className="border-2 rounded-xl p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.name && <p className=" text-red-700">{Fromerror.name}</p>}
          <input
            onChange={inputCon}
            type="number"
            placeholder="number"
            name="number"
            value={fromdata.number}
            className="border-2 rounded-xl p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.number && (
            <p className=" text-red-700">{Fromerror.number}</p>
          )}
          <input
            onChange={inputCon}
            type="password"
            placeholder="password"
            name="password"
            value={fromdata.password}
            className="border-2 rounded-xl p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.password && (
            <p className=" text-red-700">{Fromerror.password}</p>
          )}
          <input
            onChange={inputCon}
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            value={fromdata.confirmpassword}
            className="border-2 rounded-xl p-2 border-blue-300 text-gray-900 outline-none"
          />
          {Fromerror.confirmpassword && (
            <p className=" text-red-700">{Fromerror.confirmpassword}</p>
          )}

          <input className="bg-blue-500 cursor-pointer p-3" type="submit" />
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

export default FromValidation;
