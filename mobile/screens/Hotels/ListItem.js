import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { withTheme } from "../../contexts/ThemeContext";

const ListItem = props => {
  const { item, theme } = props;
  const s = styles(theme);

  return (
    <TouchableOpacity
      style={s.listItem}
      onPress={() =>
        Actions.hotelRooms({
          hotelID: item.id,
          title: item.name,
          rooms: item.rooms
        })
      }
    >
      <Text style={s.textPrimary}>{item.name}</Text>
      <Text style={s.textSecondary}>Available rooms: {item.rooms.length}</Text>
    </TouchableOpacity>
  );
};

const styles = theme =>
  StyleSheet.create({
    listItem: {
      backgroundColor: theme.primaryTwo,
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 8,
      marginBottom: 16,

      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6
      },
      shadowOpacity: 0.37,
      shadowRadius: 6,
      elevation: 12
    },
    textPrimary: {
      color: theme.fontPrimary,
      fontSize: 16
    },
    textSecondary: {
      color: theme.fontSecondary,
      fontSize: 16
    }
  });

export default withTheme(ListItem);
