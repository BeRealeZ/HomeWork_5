import React from 'react';
import {useState} from 'react';


export default function Form (){
  const [PrototypeForm, setPrototypeForm] = useState({
    key1: 'Barbara',
    key2: 'Hepworth',
    key3: 'bhepworth@react.com',
    key4: 'love cats',
  });

  const FormContainer = {
    width: "550px",
    height: "550px",
    margin: "50px auto",
    backgroundColor: "white",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px"
  }

  const Label = {
    display: "block",
    marginBottom: "20px",
    color: "rgb(122, 214, 16)",
    fontSize: "30px"
  }

  const Input = {
    width: "100%",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    height: "25px",
    fontSize:"20px",
    outline: "0"
  }

  const FormResult = {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    color: "rgb(34, 35, 116)"
  }

  return (
    <div style={FormContainer}>
    <label style={Label}>
      key1:
      <input style={Input} value={PrototypeForm.key1} onChange={e => {
        setPrototypeForm({
          ...PrototypeForm,
          key1: e.target.value
        })
      }}/>
    </label>

    <label style={Label}>
      key2:
      <input style={Input} value={PrototypeForm.key2} onChange={e => {
        setPrototypeForm({
          ...PrototypeForm,
          key2: e.target.value
        })
      }}/>
    </label>

    <label style={Label}>
      key3:
      <input style={Input} value={PrototypeForm.key3} onChange={e => {
        setPrototypeForm({
          ...PrototypeForm,
          key3: e.target.value
        })
      }}/>
    </label>

    <label style={Label}>
      key4:
      <input style={Input} value={PrototypeForm.key4} onChange={e => {
        setPrototypeForm({
          ...PrototypeForm,
          key4: e.target.value
        })
      }}/>
    </label>
    <p style={FormResult}>
      {PrototypeForm.key1}{' '}
      {PrototypeForm.key2}{' '}
      {PrototypeForm.key3}{' '}
      ({PrototypeForm.key4})
    </p>
    </div>
  )
}


