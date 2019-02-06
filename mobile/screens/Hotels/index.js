import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { withTheme } from "../../contexts/ThemeContext";
import Layout from "../../components/Layout";
import ListItem from "./ListItem";

const Hotels = props => {
  const s = styles(props.theme);

  return (
    <Query query={HotelQuery}>
      {({ loading, data }) => {
        if (loading) return <Text>Loading</Text>;
        return (
          <Layout>
            <FlatList
              data={data.getHotels}
              style={s.list}
              keyExtractor={room => room.id}
              renderItem={ListItem}
            />
          </Layout>
        );
      }}
    </Query>
  );
};

const HotelQuery = gql`
  query {
    getHotels {
      id
      name
      rooms {
        id
        roomName
        price
        beds
        baths
      }
    }
  }
`;

const styles = theme =>
  StyleSheet.create({
    list: {
      padding: 16,
      alignSelf: "stretch",
      backgroundColor: theme.primaryOne,
      zIndex: 1
    }
  });

export default withTheme(Hotels);
