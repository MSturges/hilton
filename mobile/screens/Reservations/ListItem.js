import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Actions } from "react-native-router-flux";

import { withTheme } from "../../contexts/ThemeContext";

const ListItem = props => {
  const { item, theme } = props;
  const s = styles(theme);
  return (
    <View style={s.listItem}>
      <Text style={s.textPrimary}>{item.hotelName}</Text>
      <View style={s.infoContainer}>
        <Text style={s.textPrimary}>{item.customerName}</Text>
        <Text style={s.textPrimary}>Arival: {item.arivalDate}</Text>
        <Text style={s.textPrimary}>Depart: {item.departDate}</Text>
      </View>
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    listItem: {
      backgroundColor: theme.primaryTwo,
      height: 120,
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
    infoContainer: {
      width: 100
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
