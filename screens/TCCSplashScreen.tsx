import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const TCCSplashScreen = () => {
  return (
    <View style={styles.tCCSplashScreenView}>
      <Image
        style={styles.bgTrueplusIcon}
        resizeMode="cover"
        source={require("../assets/bgtrueplus.png")}
      />
      <Image
        style={styles.icoTruePlusIcon}
        resizeMode="cover"
        source={require("../assets/icotrueplus.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgTrueplusIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 640,
  },
  icoTruePlusIcon: {
    position: "absolute",
    top: 250,
    left: 80,
    width: 200,
    height: 140,
  },
  tCCSplashScreenView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TCCSplashScreen;
