import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import { isFormEmpty } from "../helper/isFormEmpty";
import useExitPrompt from "../Hooks/useExitPrompt";

const inlStyle = {
  background: "#dfe6e9",
  width: "50%",
  margin: "36px auto",
  padding: "6px",
};

const fieldStyle = {
  border: "0",
  borderRadius: "4px",
  marginTop: "12px",
  padding: "8px",
  width: "300px",
};

const Stuffs = () => {
  const [showExitPrompt, setShowExitPrompt] = useExitPrompt(false);

  const [fields, setFields] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const handlerChange = (e) => {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const datos = isFormEmpty(fields);
    if (!datos) {
      setShowExitPrompt(true);
    }

    return () => {
      setShowExitPrompt(false);
    };
  }, [fields, setShowExitPrompt]);

  return (
    <div style={inlStyle}>
      <Prompt
        when={!isFormEmpty(fields)}
        message={(location) =>
          "Es posible que los cambios que implementaste no se puedan guardar."
        }
      />
      <h1>Alert: Refresh/Navigation by Prompt of react-router-dom</h1>
      <h3>User form is dirty ? {!isFormEmpty(fields) ? "YES" : "NO"}</h3>
      <form>
        <input
          style={fieldStyle}
          placeholder="Enter name..."
          name="name"
          value={fields.name}
          onChange={handlerChange}
        />
        <br />
        <input
          style={fieldStyle}
          placeholder="Enter lastname..."
          name="lastname"
          value={fields.lastname}
          onChange={handlerChange}
        />
        <br />
        <input
          style={fieldStyle}
          placeholder="Enter email..."
          name="email"
          value={fields.email}
          onChange={handlerChange}
        />
      </form>
    </div>
  );
};

export default Stuffs;
