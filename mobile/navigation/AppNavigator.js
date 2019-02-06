import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

// hotels stack
import Hotels from "../screens/Hotels";
import HotelRooms from "../screens/HotelRooms";
import CreateReservation from "../screens/CreateReservation";
// reservation stack
import Reservations from "../screens/Reservations";
import ViewReservation from "../screens/ViewReservation";
// settings stack
import Settings from "../screens/Settings";

const AppNavigator = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Stack key="hotels">
          <Scene key="hotels" component={Hotels} title="Hotels" />
          <Scene back key="hotelRooms" component={HotelRooms} title="Rooms" />
          <Scene
            back
            key="createReservation"
            component={CreateReservation}
            title="Make Reservation"
          />
        </Stack>
        <Stack key="reservations">
          <Scene
            key="reservations"
            component={Reservations}
            title="Reservations"
          />
          <Scene
            back
            key="reservation"
            component={ViewReservation}
            title="Reservation"
          />
        </Stack>
        <Stack key="settings">
          <Scene key="settings" component={Settings} title="Reservations" />
        </Stack>
      </Scene>
    </Router>
  );
};

export default AppNavigator;
