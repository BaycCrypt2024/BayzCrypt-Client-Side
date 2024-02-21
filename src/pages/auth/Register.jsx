import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { TiUserAddOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import Add from "../../assets/addAvatar.png";
import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2 } = formData;

  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const error = <FaTimes color="red" size={15} />;
  const success = <BsCheck2All color="green" size={25} />;

  const switchIcon = (condition) => {
    if (condition) {
      return success;
    } else {
      return error;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    //check lower and upper case

    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }
    //check for number

    if (password.match(/([0-9])/)) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    //check for special characters

    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }
    //check for password length

    if (password.length > 5) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  const loginUser = () => {};

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [ clear, setClear ] = useState("")
  const [ clearTwo, setClearTwo ] = useState("")
  const [ clearThree, setClearThree ] = useState("")

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    setClear("")
    setClearTwo("")
    // setClearThree("")

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={clear} onChange={(e) => setClear(e.target.value)} required name="name" />
            <input type="email" placeholder="Email" value={clearTwo} onChange={(e) => setClearTwo(e.target.value)} required name="email" />
            <PasswordInput
              type="password"
              placeholder="Password"
              name="password"
              // value={clear} onClick={(e) => setClear(e.target.value)}
              onChange={handleInputChange}
            />
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>

            {/* Password Strength indicator */}

            <Card cardClass={styles.group}>
              <ul className="form-list">
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(upperCase)}
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(number)}
                    &nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(specialCharacter)}
                    &nbsp; special character (!&@#$*^%)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(passwordLength)}
                    &nbsp; At least 6 character
                  </span>
                </li>
              </ul>
            </Card>

            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
            {loading && "Please wait..."}
            {err && <h3 style={{color: 'green', fontSize: '15px', marginTop: '10px'}}>Registration Successfull</h3>}
          </form>
          <span className={styles.register}>
            <Link style={{color: 'black'}}>Hello,</Link> &nbsp; &nbsp;
            <p> &nbsp;Already have an Account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
