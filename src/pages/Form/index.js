import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function FormPage() {
  const [apiUrl] = useState("https://www.easetasks.com/eraasoft/index.php");

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
    passwordMatch: false,
  });

  useEffect(() => {
    let obj = { ...formErrors };
    obj.email = true;
    setFormErrors(obj);
  }, []);
  const [email, setEmail] = useState();
  const [mailError, setEmailError] = useState(false);
  const [password, setPassword] = useState();
  const [passwordMatch, setPasswordMatch] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const Navigate = (path) => {
    useNavigate(path);
  };

  const checkEmail = () => {
    if (password == passwordMatch) {
      alert("good password");
    } else {
      alert("Password not matched");
    }

    if (email != undefined) {
      let check = email
        .trim()
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (check == null) {
        alert("Invalid Emial ");
        setEmailError("Invalid Emial ");
      } else {
        setEmailError(false);
        axios
          .post(apiUrl, {
            api_name: "SendVerficationCode",
            user_email: email,
          })
          .then((res) => {
            // let finalResponse = res.data;
            //
            let finalResponse = {
              error: 2,
            };
            let Error = finalResponse.error;
            if (Error == false) {
              window.location.href = "login";
              //   Navigate("/login");
            } else {
              if (Error == 1) {
                // 1 == Unavailable mail error
                alert("Unavailable mail");
              } else if (Error == 2) {
                // 2 == Email is already register
                setEmailError(2);
              }
            }
          });
        alert("Good Email and sign up");
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Please Fill the emial field",
        icon: "error",
      });
    }
  };
  return (
    <form>
      <div className="col-12">
        <input
          type="email"
          placeholder="Enter your email to sign up"
          required
          onKeyUp={(e) => {
            setEmail(e.target.value);
            if (e.target.value == "") {
              setEmailError(false);
            }
          }}
        />
        {mailError != false && mailError != 2 ? (
          <span className="alert alert-danger">{mailError}</span>
        ) : null}
      </div>

      <input
        type={passwordType}
        onKeyUp={(e) => {
          setPassword(e.target.value);
        }}
      />

      <input
        type={passwordType}
        onKeyUp={(e) => {
          setPasswordMatch(e.target.value);
        }}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          if (passwordType == "text") {
            setPasswordType("password");
          } else {
            setPasswordType("text");
          }
        }}
      >
        show password
      </button>
      {mailError == 2 ? (
        <Link to="loign">Are you a member ? Go to login</Link>
      ) : null}

      <button
        onClick={(e) => {
          e.preventDefault();
          checkEmail();
        }}
      >
        Submit
      </button>
    </form>
  );
}
