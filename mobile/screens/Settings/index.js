import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { withTheme } from "../../contexts/ThemeContext";
import Layout from "../../components/Layout";

const Settings = props => {
  const s = styles(props.theme);

  return (
    <Layout>
      <View style={s.container}>
        <Text style={s.text}>Settings</Text>
      </View>
    </Layout>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primaryOne
    },
    text: {
      color: theme.fontPrimary
    }
  });

export default withTheme(Settings);
