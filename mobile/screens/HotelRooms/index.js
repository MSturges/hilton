import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { withTheme } from "../../contexts/ThemeContext";
import Layout from "../../components/Layout";
import ListItem from "./ListItem";

const HotelRooms = props => {
  const { theme, rooms, hotelID, title } = props;
  const s = styles(theme);

  return (
    <Layout>
      <FlatList
        data={rooms}
        style={s.list}
        keyExtractor={room => room.id}
        renderItem={({ item }) => (
          <ListItem item={item} hotelID={hotelID} hotelName={title} />
        )}
      />
    </Layout>
  );
};

const styles = theme =>
  StyleSheet.create({
    list: {
      padding: 16,
      alignSelf: "stretch",
      backgroundColor: theme.primaryOne,
      zIndex: 1
    }
  });

export default withTheme(HotelRooms);
