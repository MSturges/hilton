import React, { Component } from "react";
import { ScrollView, View, StyleSheet, TextInput, Text } from "react-native";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Actions } from "react-native-router-flux";

import { withTheme } from "../../contexts/ThemeContext";
import Layout from "../../components/Layout";
import { Button } from "../../components/common";

class CreateReservation extends Component {
  state = {
    customerName: "",
    arivalDate: "",
    departDate: "",
    error: false
  };

  submitForm = createRes => {
    const {
      roomData: { hotelID, roomID, hotelName }
    } = this.props;
    const { customerName, arivalDate, departDate } = this.state;
    createRes({
      variables: {
        hotelID,
        hotelName,
        roomID,
        customerName,
        arivalDate,
        departDate
      }
    })
      .then(res => {
        this.setState({
          customerName: "",
          arivalDate: "",
          departDate: "",
          error: false
        });
        Actions.reservations();
      })
      .catch(err => {
        console.log("err", err);
        this.setState({ error: true });
      });
  };

  render() {
    const {
      theme,
      roomData: { baths, beds, price, roomName }
    } = this.props;
    const { customerName, arivalDate, departDate, error } = this.state;
    const s = styles(theme);

    return (
      <Mutation mutation={CreateReservation_Mutation}>
        {createRes => (
          <Layout>
            <ScrollView style={s.container}>
              <View style={s.formWrapper}>
                <TextInput
                  style={[s.textInput, s.firstTextInput]}
                  editable={false}
                  value={`Room: ${roomName}`}
                />
                <TextInput
                  style={s.textInput}
                  editable={false}
                  value={`Price: $ ${price}`}
                />
                <TextInput
                  style={s.textInput}
                  editable={false}
                  value={`Beds: ${beds}`}
                />
                <TextInput
                  style={s.textInput}
                  editable={false}
                  value={`Baths: ${baths}`}
                />
                <TextInput
                  style={s.textInput}
                  onChangeText={text => this.setState({ customerName: text })}
                  value={customerName}
                  placeholder="Customer Name"
                />
                <TextInput
                  style={s.textInput}
                  onChangeText={text => this.setState({ arivalDate: text })}
                  value={arivalDate}
                  placeholder="Arival Date (mm/dd/yy)"
                />
                <TextInput
                  style={s.textInput}
                  onChangeText={text => this.setState({ departDate: text })}
                  value={departDate}
                  placeholder="Depart Date (mm/dd/yy)"
                />
              </View>
              {error ? <Text style={s.error}>Form invalid</Text> : null}

              <Button
                onPress={() => this.submitForm(createRes)}
                style={s.button}
              >
                Make Reservation
              </Button>
            </ScrollView>
          </Layout>
        )}
      </Mutation>
    );
  }
}

const CreateReservation_Mutation = gql`
  mutation(
    $hotelID: ID!
    $roomID: ID!
    $hotelName: String!
    $customerName: String!
    $arivalDate: String!
    $departDate: String!
  ) {
    createReservation(
      hotelID: $hotelID
      roomID: $roomID
      hotelName: $hotelName
      customerName: $customerName
      arivalDate: $arivalDate
      departDate: $departDate
    ) {
      id
    }
  }
`;

const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 16,
      alignSelf: "stretch"
    },
    formWrapper: {
      backgroundColor: theme.primaryTwo,
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
    textInput: {
      height: 40,
      borderColor: theme.borderPrimary,
      backgroundColor: theme.white,
      color: theme.black,
      borderWidth: 1,
      marginBottom: 16
    },
    firstTextInput: {
      marginTop: 16
    },
    button: {
      height: 60
    },
    text: {
      color: theme.fontPrimary
    },
    error: {
      color: theme.red,
      marginVertical: 16
    }
  });

export default withTheme(CreateReservation);
