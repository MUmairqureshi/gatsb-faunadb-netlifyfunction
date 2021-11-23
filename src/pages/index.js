import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

export default function Home() {
  const [mydata, setData] = useState();
  const [msg, setMsg] = useState(" ");
  const [isdelete, setisDelete] = useState(false);
  console.log("message", msg)
  console.log(msg)
  console.log("mydata", mydata?.message)
  console.log("msg", msg)
  useEffect(() => {
    ; (async () => {
      await fetch("/.netlify/functions/delete-todo")
        .then(res => res.json())
        .then(data => {
          //          setData(res)
          setMsg(data)
          console.log("res", data)

        })
    })()
  }, [mydata])
  return <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ message: '' }}
      validate={values => {
        const errors = {};
        if (!values.message) {
          errors.message = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        fetch(`/.netlify/functions/add_message`, {
          method: 'post',
          body: JSON.stringify(values)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data)
            setMsg(undefined)
          });
      }}

    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {errors.message && touched.message && errors.message}
          <button type="submit">
            Add Message
          </button>
          <br />
          <button type="submit" disabled={isSubmitting}  >
            Delete
          </button>
        </form>
      )}
    </Formik>
    {/* {msg.mydata.message} */}
    {/* {mydata?.map(msg=>{
      return(
        <h1> msg.data.message </h1>
      )
    })} */}

    {/* <button onClick={()=> handledelete() }>DELETE </button> */}
  </div>
}


