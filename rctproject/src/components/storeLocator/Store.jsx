import React, { Component } from "react";
import axios from "axios";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Map from "./Map";
import { Box, CityBox, Div, Flex, InnerBox, P, Small } from "./Styles";
import TopNav from "../dashboard/TopNavBar/TopNav";
import RouteNav from "../dashboard/TopNavBar/RouteNav";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      currentCity: "Mumbai",
      currentStore: "Warden Road",
    };
  }

  changeCity = (city) => {
    const { stores: data } = this.state;
    this.setState({
      currentCity: city,
      currentStore: data.find((cities) => cities.city === city).locations[0]
        .title,
    });
  };

  changeStore = (store) => {
    this.setState({ currentStore: store });
  };

  getStores = async () => {
    const config = {
      method: "get",
      url: "http://localhost:5000/api/stores/stores",
    };
    try {
      const response = await axios(config);
      this.setState({
        stores: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getStores();
  }

  render() {
    const { stores: data } = this.state;

    if (data.length === 0) {
      return null;
    }

    const { currentCity, currentStore } = this.state;
    const { changeCity, changeStore } = this;
    console.log(this.state);
    const storeCoordinates = data
      .find((cities) => cities.city === currentCity)
      .locations.find((location) => location.title === currentStore);

    return (
      <>
        <Flex>
          <Box>
            {data.map((cities) => {
              if (cities.city === currentCity) {
                return (
                  <CityBox key={cities.city} style={{ background: "#b71761" }}>
                    <Div
                      onClick={() => changeCity(cities.city)}
                      style={{ color: "#fff" }}
                    >
                      <div>{cities.city}</div>
                      <div>
                        <NavigateNextIcon />
                      </div>
                    </Div>
                  </CityBox>
                );
              } else {
                return (
                  <CityBox key={cities.city}>
                    <Div onClick={() => changeCity(cities.city)}>
                      <div>{cities.city}</div>
                      <div>
                        <NavigateNextIcon />
                      </div>
                    </Div>
                  </CityBox>
                );
              }
            })}
          </Box>
          <Box>
            {data
              .find((cities) => cities.city === currentCity)
              .locations.map((location) => (
                <InnerBox key={location.title}>
                  <P onClick={() => changeStore(location.title)}>
                    {location.title}
                  </P>
                  <Small>{location.address}</Small>
                  <Small>{location.timings}</Small>
                </InnerBox>
              ))}
          </Box>
          <Box big>
            <Map
              coordinates={{
                lat: storeCoordinates.lat,
                long: storeCoordinates.long,
              }}
            />
          </Box>
        </Flex>
      </>
    );
  }
}

export default Store;
