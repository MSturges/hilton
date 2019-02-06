import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";

import { withTheme } from "../../contexts/ThemeContext";

const ListItem = props => {
  const { item, theme, hotelID, hotelName } = props;
  const s = styles(theme);

  return (
    <TouchableOpacity
      style={s.listItem}
      onPress={() =>
        Actions.createReservation({
          roomData: {
            roomID: item.id,
            hotelID: hotelID,
            hotelName: hotelName,
            roomName: item.roomName,
            price: item.price,
            beds: item.beds,
            baths: item.baths
          }
        })
      }
    >
      <View>
        <Text style={s.textPrimary}>{item.roomName}</Text>
        <Text style={s.textPrimary}>${item.price}/Night</Text>
      </View>
      <View>
        <Text style={s.textSecondary}>Beds: {item.beds}</Text>
        <Text style={s.textSecondary}>Baths: {item.baths}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = theme =>
  StyleSheet.create({
    listItem: {
      backgroundColor: theme.primaryTwo,
      height: 80,
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
