import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Button, Box } from "@material-ui/core";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import { registerUser, loginUser } from "../../Redux/auth/action";
import styles from "./styles.module.css";

const useStyles = makeStyles((theme) => ({
  phone: {
    color: "#c80066",
    paddingTop: "1%",
    paddingLeft: "2%",
    marginRight: "1%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  close: {
    float: "right",
    marginLeft: "150px",
  },
  closeLogin: {
    marginLeft: "530px",
  },
}));

function LoginReg({ login, setLogin, register, setRegister, otp, setOtp }) {
  const classes = useStyles();
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const { message, isAuth } = useSelector((state) => state.auth);

  const [state, setState] = useState({
    logEmail: "",
    logPassword: "",
    regEmail: "",
    regPassword: "",
    mobile: "",
    userOtp: "",
  });
  const {
    userOtp,
    regEmail,
    mobile,
    regPassword,
    logEmail,
    logPassword,
  } = state;
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser({ email: logEmail, password: logPassword }));
  };

  useEffect(() => {
    if (isAuth) {
      setRegister(false);
      setLogin(false);
      setOtp(false);
    }
  }, [isAuth]);
  const handleRegister = () => {
    let obj = {
      email: regEmail,
      password: regPassword,
      userOTP: userOtp,
      username: regEmail,
      mobile_no: mobile,
    };
    if (regEmail.length < 3) {
      setEmailError("Invalid Email");
    } else if (
      regEmail.split("@").length !== 2 ||
      regEmail.split(".").length !== 2
    ) {
      setEmailError("Invalid Email");
    } else if (regPassword.length < 5) {
      setPassError("password should be atleast 5 characters");
    } else {
      setEmailError("");
      setRegister(false);
      setLogin(false);
      setOtp(false);
      dispatch(registerUser(obj));
    }
  };
  const handleOtp = async () => {
    if (mobile.length < 10 || isNaN(Number(mobile))) {
      setMobileError("Invalid Number ");
    } else {
      setRegister(false);
      setLogin(false);
      setOtp(true);
      const data = { mobileNumber: mobile };
      var config = {
        method: "post",
        url: "http://localhost:5000/api/user/send-otp",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      try {
        const result = await axios(config);
        // console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <>
      {register ? (
        <Box classes={{ root: styles.login }}>
          <Box classes={{ root: styles.regis }}>
            <Box classes={{ root: styles.newBox }}>
              <Box classes={{ root: styles.oneBox }}>
                <Box classes={{ root: styles.outerBox }}>
                  <PhoneAndroidOutlinedIcon className={classes.phone} />
                  <input
                    className={styles.inn}
                    name="mobile"
                    value={mobile}
                    onChange={handleChange}
                    placeholder="Mobile No."
                  />
                </Box>
                <small style={{ color: "red" }}>{mobileError}</small>
              </Box>
              <Box classes={{ root: styles.oneBox }}>
                <button onClick={handleOtp} className={styles.btnLogin}>
                  Continue
                </button>
              </Box>
              <Box style={{ float: "right", marginLeft: "55%" }}>
                <Button
                  classes={{ root: styles.close }}
                  onClick={() => {
                    setRegister(false);
                    setLogin(false);
                    setOtp(false);
                  }}
                >
                  {" "}
                  <img
                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                    alt="close"
                  ></img>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : !isAuth && login ? (
        <Box classes={{ root: styles.login }}>
          <Box
            classes={{ root: styles.inputBox }}
            style={{ marginLeft: "10%" }}
          >
            <Box classes={{ root: styles.newBox }}>
              <Box classes={{ root: styles.oneBox }}>
                <Box
                  classes={{ root: styles.outerBox }}
                  style={{ width: "200px" }}
                >
                  <EmailIcon className={classes.phone} />
                  <input
                    style={{ width: "150px", fontSize: "16px" }}
                    type="text"
                    name="logEmail"
                    value={logEmail}
                    onChange={handleChange}
                    className={styles.inn}
                    placeholder=" Email Address"
                  />
                </Box>
                <small style={{ color: "red" }}>{message}</small>
              </Box>
              <Box classes={{ root: styles.oneBox }}>
                <Box
                  classes={{ root: styles.outerBox }}
                  style={{ width: "200px" }}
                >
                  <VpnKeyIcon className={classes.phone} />
                  <input
                    style={{ width: "150px", fontSize: "16px" }}
                    type="password"
                    name="logPassword"
                    value={logPassword}
                    onChange={handleChange}
                    className={styles.inn}
                    placeholder=" Password"
                  />
                </Box>
              </Box>
              <Box classes={{ root: styles.oneBox }}>
                <button onClick={handleLogin} className={styles.btnLogin}>
                  Login
                </button>
              </Box>
              <Box style={{ float: "right", marginLeft: "10%" }}>
                <Button
                  className={classes.closeLogin}
                  onClick={() => {
                    setRegister(false);
                    setLogin(false);
                    setOtp(false);
                  }}
                >
                  {" "}
                  <img
                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                    alt="close"
                  ></img>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : otp ? (
        <Box classes={{ root: styles.login }}>
          <Box classes={{ root: styles.inputBox }}>
            <Box classes={{ root: styles.newBox }}>
              <Box classes={{ root: styles.oneBox }}>
                <Box classes={{ root: styles.outerBox }}>
                  <PhoneAndroidOutlinedIcon className={classes.phone} />
                  <input
                    className={styles.inn}
                    name="mobile"
                    value={mobile}
                    disabled
                  />
                </Box>
              </Box>
              <Box classes={{ root: styles.oneBox }}>
                <Box
                  classes={{ root: styles.outerBox }}
                  style={{ padding: "0.7%" }}
                >
                  <input
                    name="userOtp"
                    value={userOtp}
                    onChange={handleChange}
                    className={styles.inn}
                    placeholder="Enter OTP"
                  />
                </Box>
                <small style={{ color: "red" }}>{message}</small>
              </Box>
              <Box classes={{ root: styles.oneBox }}>
                <Box classes={{ root: styles.outerBox }}>
                  <EmailIcon className={classes.phone} />
                  <input
                    style={{ width: "130px" }}
                    name="regEmail"
                    value={regEmail}
                    onChange={handleChange}
                    className={styles.inn}
                    placeholder="Email Address"
                  />
                </Box>
                <small style={{ color: "red" }}>{emailError}</small>
              </Box>

              <Box classes={{ root: styles.oneBox }}>
                <Box classes={{ root: styles.outerBox }}>
                  <VpnKeyIcon className={classes.phone} />
                  <input
                    name="regPassword"
                    type="password"
                    value={regPassword}
                    onChange={handleChange}
                    className={styles.inn}
                    placeholder="set password"
                  />
                </Box>
                <small style={{ color: "red" }}>{passError}</small>
              </Box>
              <Box classes={{ root: styles.oneBox }}>
                <button onClick={handleRegister} className={styles.btnLogin}>
                  Register
                </button>
              </Box>
              <Box style={{ float: "right", marginLeft: "10%" }}>
                <Button
                  className={classes.close}
                  onClick={() => {
                    setRegister(false);
                    setLogin(false);
                    setOtp(false);
                  }}
                >
                  {" "}
                  <img
                    src="https://d1z88p83zuviay.cloudfront.net/Images/login-popup-close.png"
                    alt="close"
                  ></img>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
export default LoginReg;
