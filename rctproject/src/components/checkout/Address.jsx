import React, {useState} from 'react'
import { Box,TextField, Checkbox} from '@material-ui/core'
import styles from './checkout.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Address() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [orderInputs, setOrderInputs] = useState({first_name: "", last_name: "", address: "", landmark: "", pincode: "", country: "", state: "", city: "", mobile_no: ""})
    // const dispatch = useDispatch()
    const userDeatils = JSON.parse(localStorage.getItem("user"))
    // console.log(userDeatils)
    const loginStatus = JSON.parse(localStorage.getItem("status")) || false
    // let userDeliveryDetailsTemp
    let userDeliveryDetails
    let myCart = []
    for(let i=0; i<localStorage.length; i++) 
    {

    //   console.log(Object.keys(localStorage))
      if(Object.keys(localStorage)[i] !== "rzp_device_id"   )
      {
        if (((localStorage.getItem(localStorage.key(i)))) === "true" ||
        localStorage.getItem(localStorage.key(i)) === "false" ||
        Object.keys(localStorage)[i] === "user" || Object.keys(localStorage)[i] === "mapbox.eventData:YWhtZWRyemFraGFu" 
          || Object.keys(localStorage)[i] === "mapbox.eventData.uuid:YWhtZWRyemFraGFu" ||
          Object.keys(localStorage)[i] === "OrderSummary"  || Object.keys(localStorage)[i] ==="mainCartDataLength" )
          { 
            continue
          }
          else
          {
            // console.log(localStorage.getItem( localStorage.key( i ) ), "LOCAL STORAGE")
            let temp = JSON.parse(localStorage.getItem( localStorage.key( i ) ))
            // console.log(temp, "TEMP")
            myCart.push(temp) 

          }
      }
    }


    const handleChange = (event) => setOrderInputs({

        ...orderInputs,
        [event.target.name] : event.target.value
    })

    const handleClose = () => {
        setOpen(false);
      };

    const handleReviewAndPlaceOrder = () => {

        if(loginStatus === false)
        {
            alert("Please Login to place order")
            return
        }

        if(orderInputs.first_name , orderInputs.last_name , 
            orderInputs.address , orderInputs.landmark ,
             orderInputs.pincode ,
            orderInputs.country , orderInputs.state, 
            orderInputs.city , orderInputs.mobile_no )
            {
                        setOpen(true);
                        // alert("Order Placed")
                const finalOrder = {
                    username: userDeatils.username,
                    full_address: [{

                        first_name: orderInputs.first_name,
                        last_name: orderInputs.last_name,
                        address: orderInputs.address,
                        landmark: orderInputs.landmark,
                        pincode: orderInputs.pincode,
                        country: orderInputs.country,
                        state: orderInputs.state,
                        city: orderInputs.city,
                        mobile_no: orderInputs.mobile_no
                    }],
                    products: myCart

                }

                localStorage.setItem("OrderSummary", JSON.stringify(finalOrder))
                
                userDeliveryDetails= JSON.parse(localStorage.getItem("OrderSummary")) 
                
            }
            else
            {
                alert("Some fields are empty!")
                return
            }

        
       
    }
    
    // console.log(userDeliveryDetails)
    // if(userDeliveryDetails)
    // {
    //     userDeliveryDetailsTemp = userDeliveryDetails.full_address
    //     console.log(userDeliveryDetailsTemp)
    // }

    return (
        <>
            
              
              {loginStatus? 
              <>
              <Box>
                <Box>ADDRESS <span>DETAILS</span></Box>
                <Box ><button onClick={handleReviewAndPlaceOrder} className={ styles.btn }>REVIEW AND PLACE ORDER</button></Box>
                <Box classes={{ root: styles.ship }}>
                Enter Shipping Address<br/>
                <small>(Fields marked with * are mandatory)
                    </small></Box>
                    <Box>
                    <Box classes={{ root: styles.box }}>
                       First Name*</Box>
                    <Box> <TextField name="first_name" onChange={ handleChange}  variant="outlined" required /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Last Name*</Box>
                    <Box> <TextField name="last_name" onChange={ handleChange}  variant="outlined" required /></Box>
                </Box>

                <Box>
                    <Box classes ={{root:styles.box}}>
                        Address*</Box>
                    <Box> <TextField name="address" onChange={ handleChange}  variant="outlined" required/></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Landmark*</Box>
                    <Box> <TextField name="landmark" onChange={ handleChange}  variant="outlined" required/></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Pincode*</Box>
                    <Box> <TextField name="pincode" onChange={ handleChange}  variant="outlined"  required/></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Country*</Box>
                    <Box> <TextField name="country" onChange={ handleChange}  variant="outlined" required/></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        State*</Box>
                    <Box> <TextField name="state" onChange={ handleChange}  variant="outlined" required/></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        City*</Box>
                    <Box> <TextField name="city" onChange={ handleChange} variant="outlined" required /></Box>
                </Box>
                <Box>
                    <Box classes={{ root: styles.box }}>
                        Mobile No*</Box>
                    <Box> <TextField name="mobile_no" onChange={ handleChange}  variant="outlined" required /></Box>
                </Box>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <h1 id="transition-modal-title">Order Placed</h1>
                        <p id="transition-modal-description">Go to Order Summary to check your order</p>
                    </div>
                    </Fade>
                </Modal>
                </Box>
                    </>
                    :
                  <h1 style={{textAlign: "center"}}>Please Login first</h1>
                }
               
            
        </>
    )
}
export default Address;
