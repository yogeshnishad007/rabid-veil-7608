import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { usergetOrder } from "./../Redux/orderSummary/actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// const history = useHistory()
function PastPurchases() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDeatils = JSON.parse(localStorage.getItem("user")) || "null";
  const history = useHistory();
  React.useEffect(() => {
    if (
      userDeatils === undefined ||
      userDeatils.username === undefined ||
      userDeatils === null
    ) {
      history.push("/");
    }
    dispatch(usergetOrder(userDeatils.username));
  }, []);
  const pastPurchaseSummary = useSelector(
    (state) => state.summaryRoot.summaryArr
  );
  // Object.values(pastPurchaseSummary).map(item =>

  //         Object.values(item).map(item =>

  //             console.log(item.title)

  //             )

  //      )

  const handleGoBack = () => {
    history.push("/");
  };

  const loginStatus = JSON.parse(localStorage.getItem("status")) || false;

  return (
    <>
      {loginStatus ? (
        <>
          <h1 style={{ textAlign: "center" }}>Past Purcahses </h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Product Name</TableCell>
                  <TableCell align="right">Product Category</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Sub-total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.values(pastPurchaseSummary).map((item) =>
                  Object.values(item).map((row) => (
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row">
                        <img
                          src={row.imageLink}
                          height="100px"
                          alt={row.title}
                        />
                      </TableCell>
                      <TableCell align="right">{row.title}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.inCartQty}</TableCell>
                      <TableCell align="right">₹{row.price}</TableCell>
                      <TableCell align="right">
                        ₹{row.inCartQty * row.price}{" "}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <p style={{ textAlign: "center" }}>
            <button onClick={handleGoBack}> Go Back</button>
          </p>
        </>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Please Login to see your purchase history
        </h1>
      )}
    </>
  );
}

export default PastPurchases;
