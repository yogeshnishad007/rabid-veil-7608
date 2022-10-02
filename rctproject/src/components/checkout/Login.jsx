import React, { useState }from "react";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styles from "./checkout.module.css";
import { loginUser } from "../Redux/auth/action";
function LoginForm() {
  const dispatch = useDispatch()
  const { isAuth,message} = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const handleLogin = () => {
    dispatch(loginUser({ email: email, password: pass }));

  };


  return (
    <>
      {isAuth ?
        <>
          <Box>YOU ARE LOGGED IN SUCCESSFULLY.</Box>
          <Box>Welcome to our website.</Box>
        </> :
        <Box classes={{ root: styles.main }}>
          <Box classes={{ root: styles.first }}>
            <Box>Login into NatureBasket</Box>
            <Box classes={{ root: styles.email }}>
              <Box>Enter your EmailID</Box>
              <Box>
                <input name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email ID" />
              </Box>
              <Box>Enter your Password</Box>
              <Box>
                <input name="pass"
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Password" />
              </Box>
              <small style={{ color: "red" }}>{message}</small>
            </Box>
            <Box>
              <button onClick={handleLogin} className={styles.button}>LOGIN </button>
            </Box>
          </Box>
          <Box classes={{ root: styles.second }}>
            <button className={styles.button}>REGISTER</button>
          </Box>
        </Box>
      }
    </>
  );
}
export default LoginForm;
