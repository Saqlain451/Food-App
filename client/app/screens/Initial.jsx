import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { logo, splashBg } from "../constants/Image";

const Initial = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={splashBg} style={styles.imageBackground}>
        <View style={styles.spacer}></View>
        <View style={styles.mainContent}>
          <View style={{ alignItems: "center" }}>
            <Image source={logo} />
          </View>
          <View style={{ gap: 24 }}>
            <Text style={styles.mainText}>Non-Contact Deliveries</Text>
            <Text style={styles.secondaryText}>
              When placing an order, select the option “Contactless delivery”
              and the courier will leave your order at the door.
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("Main")}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>order now</Text>
            </TouchableOpacity>
            <Text style={styles.secondaryBtnText}>Dismiss</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Initial;

import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

//     flex: 1,
//   },
//   imageBackground: {
//     width: "100%",
//     height: "100%",
//   },
//   spacerView: {
//     height: "34%",
//   },
//   contentView: {
//     backgroundColor: "white",
//     borderTopLeftRadius: 15,
//     borderTopEndRadius: 15,
//     paddingHorizontal: 20,
//     paddingVertical: 50,
//     height:"66%"
//     // gap: 24,
//   },
//   contentText: {
//     color: "#2D0C57",
//     fontFamily: "Sf-bold",
//     fontSize: 34,
//     textAlign: "center",
//     lineHeight: 40,
//   },
//   contentSmText: {
//     color: "#9586A8",
//     fontFamily: "sf-regular",
//     fontSize: 17,
//     textAlign: "center",
//   },
//   buttonStyle: {
//     width: "100%",
//     color: "white",
//     height: 56,
//     borderRadius: 8,
//     justifyContent: "center",
//     backgroundColor: "#0BCE83",
//     marginTop:20
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
// });

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  spacer: {
    height: "34%",
  },
  mainContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 54,
    height: "66%",
  },
  mainText: {
    color: "#2D0C57",
    fontFamily: "Sf-bold",
    fontSize: 34,
    textAlign: "center",
    lineHeight: 40,
  },
  secondaryText: {
    color: "#9586A8",
    fontFamily: "sf-regular",
    fontSize: 17,
    textAlign: "center",
  },
  primaryButton: {
    width: "100%",
    color: "white",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#0BCE83",
    marginTop: 20,
  },
  primaryButtonText: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily : "sf-medium",
    fontSize : 15
  },
  secondaryBtnText: {
    textAlign: "center",
    color: "#9586A8",
    textTransform: "uppercase",
    fontFamily : "sf-medium",
    fontSize : 15
  },
});
