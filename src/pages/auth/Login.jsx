import React from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
// import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";

import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/usersPage")
    } catch (err) {
      setErr(true);
    }
  };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleInputChange = () => {
        
    }
    const loginUser = () => {

    }

  return (
    <div className={`container ${styles.auth}` }>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>
          <div className="--flex-center">
            <button className="--btn --btn-google">Login with Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" required name="email"/>
                <PasswordInput placeholder="Password" name="password"/>
                {/* <input type="password" placeholder="Password" required name="password" value={password} onChange={handleInputChange}/> */}
                <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
            </form>
            <Link to='/forgot'>Forgot password</Link>
            <span style={{display: 'flex', marginTop: '15px'}}>
              <p> &nbsp;Don't have an Account? &nbsp;</p> 
              <h3 style={{marginTop: '-10px'}}><Link to='/register'>Register</Link></h3>
            </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
