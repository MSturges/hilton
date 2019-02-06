import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { withTheme } from "../../contexts/ThemeContext";
import Layout from "../../components/Layout";

const Hotels = props => {
  const s = styles(props.theme);

  // return (
  //   <Layout>
  //     <View style={s.container}>
  //       <Text style={s.text}>HotelRooms</Text>
  //     </View>
  //   </Layout>
  // );
  // return (
  //   <Query query={RatesQuery} variables={{ first: 10 }}>
  //     {({ loading, data }) => {
  //       if (loading) return null;

  //       // console.error("data", data.rates.totalCount);

  //       return (
  //         <Layout>
  //           <View style={s.container}>
  //             <Text style={s.text}>HotelRooms: {data.rates.totalCount}</Text>
  //           </View>
  //         </Layout>
  //       );
  //     }}
  //   </Query>
  // );
  return (
    <Query query={HotelQuery}>
      {({ loading, data, error }) => {
        console.log("loading", loading);
        if (loading) return <Text>Loading</Text>;

        console.error("error", error);
        console.error("data", data);

        return (
          <Layout>
            <View style={s.container}>
              <Text style={s.text}>HotelRooms: </Text>
            </View>
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
    }
  }
`;

// const RatesQuery = gql`
//   query($first: Int) {
//     rates(first: $first) {
//       totalCount
//     }
//   }
// `;

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

export default withTheme(Hotels);
