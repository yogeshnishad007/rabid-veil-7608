import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import throttle from "lodash.throttle";
import { Box, InputBase, Divider, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import StarIcon from "@material-ui/icons/Star";
import styles from "./TopNav.module.css";
import { Link } from "react-router-dom";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: 900,
    height: "36px",
    border: "1px solid #AAACA9",
    float: "left",
    borderRadius: "8px",
    borderRight: "0px",
    [theme.breakpoints.up("md")]: {
      width: 900,
      alignItems: "center",
      marginLeft: "2%",
    },
    [theme.breakpoints.down("md")]: {
      width: 600,
      alignItems: "center",
      marginLeft: "2%",
    },
    [theme.breakpoints.down("sm")]: {
      width: 350,
      alignItems: "center",
      marginLeft: "2%",
    },
  },
  topDiv: {
    backgroundColor: "#c80066",
    color: "white",
    display: "block",
    height: "60px",
    top: 0,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "90px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "120px",
      width: "100%",
    },
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: "0.2%",
    height: "36px",
    background: "#7CCB55 ",
    top: 0,
    borderRadius: "8px",
  },
  iconColor: {
    color: "white",
    textAlign: "center",
  },
  phone: {
    color: "#c80066",
    paddingTop: "1%",
    paddingLeft: "2%",
  },

  divider: {
    height: 18,
    margin: 4,
    float: "left",
  },
  newBox: {
    float: "right",
    marginRight: "2%",
    width: "7%",
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function TopBar() {
  const classes = useStyles();
  const [val, setVal] = useState("");
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [otp, setOtp] = useState(false);
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const userData =
    useSelector((state) => state.auth.userData) ||
    JSON.parse(localStorage.getItem("user"));

  // console.log(loginStatus)

  const { searchData, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleInput = (e) => {
    setVal(e.target.value);
    dispatch(getBySearch(val));
  };

  const thrott = throttle(handleInput, 1000);

  let [cartCount, setCartCount] = React.useState(0);

  const mainCartLength = JSON.parse(localStorage.getItem("mainCartDataLength"));

  // const handleEnter = (e) => {
  //   switch (e.keyCode) {
  //     case 13: {
  //       history.push("/search-page");
  //       break;
  //     }
  //     default: {
  //       return;
  //     }
  //   }
  // };

  useEffect(() => {
    setCartCount(mainCartLength);
    window.scrollTo(0, 0);
  }, [mainCartLength]);

  return (
    <>
      <Box>
       
        <LoginReg
          login={login}
          setLogin={setLogin}
          register={register}
          setRegister={setRegister}
          otp={otp}
          setOtp={setOtp}
        />

        <Box xs={12} sm={6} md={3}>
          <Box classes={{ root: styles.logo }}>
            <Link className={styles.photo} to="/">
              <img
                src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
                alt="logo"
              />
            </Link>
          </Box>

          <Box>
            <Box className={classes.login} m={1}>
              <Link className={styles.Toplink} to="/store-locator">
                Store Locator
              </Link>
              <Link className={styles.Toplink} to="/freshFast">
                {" "}
                Fresh & Fast
              </Link>
              {loginStatus ? (
                <>
                  <div className={styles.hoverUser}>
                    {userData.username}
                    <div className={styles.innerHoverUser}>
                      <Button onClick={handleLogout}>LogOut</Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setRegister(true);
                      setLogin(false);
                    }}
                    className={styles.topRight}
                  >
                    Register
                  </button>
                  <button
                    onClick={() => {
                      setLogin(true);
                      setRegister(false);
                    }}
                    className={styles.topRight}
                  >
                    Login
                  </button>
                </>
              )}
            </Box>

            <Box>
              <Box
                classes={{ root: styles.hoverDivSearch }}
                className={classes.root}
              >
                <InputBase
                  // onKeyUp={handleEnter}
                  name="val"
                  value={val}
                  onChange={thrott}
                  className={classes.input}
                  placeholder="Start Shopping..."
                />
                <Box className={classes.iconButton}>
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon className={classes.iconColor} />
                  </IconButton>
                </Box>
                {val.length === 0 ? (
                  <Box classes={{ root: styles.innerHoverDivSearch }}>
                    <p className={styles.trend}>Trending Searches</p>
                    <p>
                      <Link
                        to="/home/Fruits-and-Vegetables/Exotic-Vegetables"
                        className={styles.afterTrend}
                      >
                        Exotic Vegetables
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Fruits-and-Vegetables/Daily-Vegetables"
                        className={styles.afterTrend}
                      >
                        Daily Vegetables{" "}
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Indian Grocery/Daily Essentials"
                        className={styles.afterTrend}
                      >
                        Daily essentials{" "}
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Indian Grocery/Milk and Cream"
                        className={styles.afterTrend}
                      >
                        Milk and Cream{" "}
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Indian Grocery/Cooking Pastes and Sauces"
                        className={styles.afterTrend}
                      >
                        Cooking Pastes and Sauces
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Meats, Seafood and Eggs/Cold Cuts and Sausages"
                        className={styles.afterTrend}
                      >
                        Cold Cuts and Sausages{" "}
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Meats, Seafood and Eggs/Frozen"
                        className={styles.afterTrend}
                      >
                        Frozen{" "}
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Breakfast, Dairy and Bakery/Bakery"
                        className={styles.afterTrend}
                      >
                        Bakery{" "}
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/home/Breakfast, Dairy and Bakery/Bars and Others"
                        className={styles.afterTrend}
                      >
                        Bars and Others{" "}
                      </Link>
                    </p>
                  </Box>
                ) : (
                  !isLoading &&
                  val.length > 0 && (
                    <Box classes={{ root: styles.innerHoverDivSearch }}>
                      {searchData.map((item, i) => (
                        <Box key={i} classes={{ root: styles.getsea }}>
                          <Box>
                            <img
                              width="70px"
                              src={item.product["image"]}
                              alt={item.product["title"]}
                            />
                          </Box>
                          <Box>
                            <Link
                              className={styles.newLink}
                              to={`/product/${item._id}`}
                            >
                              {item.product["title"]}
                            </Link>
                          </Box>
                          <Box>1 Pc</Box>
                          <Box>₹ {item.product["price"]}</Box>
                          <Box>Qty</Box>
                          <Box> {/* <AddProduct  /> */}</Box>
                        </Box>
                      ))}
                      {/* <Box
                        onClick={() => history.push("/search-page")}
                        classes={{ root: styles.allPro }}
                      >
                        View All Products{" "}
                      </Box> */}
                    </Box>
                  )
                )}
              </Box>

              <Box className={classes.newBox}>
                <Box>
                  <StarIcon classes={{ root: styles.starCart }} />
                  <Divider className={classes.divider} orientation="vertical" />
                  <Link to="/cart">
                    <StyledBadge badgeContent={cartCount} color="primary">
                      <ShoppingCartOutlinedIcon
                        classes={{ root: styles.starCart }}
                      />
                    </StyledBadge>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default TopBar;
