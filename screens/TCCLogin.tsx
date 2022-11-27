import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TCCLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tCCLoginView}>
      <View style={styles.groupView2}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={styles.bgTrueplusIcon}
          resizeMode="cover"
          source={require("../assets/bgtrueplus.png")}
        />
        <View style={styles.groupView}>
          <View style={styles.rectangleCopyView} />
          <Text style={styles.uSERNAMEText}>รหัสตัวแทนคู่ค้า</Text>
          <Text style={styles.text}></Text>
        </View>
        <View style={styles.groupView1}>
          <View style={styles.rectangleCopyView1} />
          <Text style={styles.uSERNAMEText1}>รหัสผ่าน</Text>
          <Text style={styles.text1}></Text>
        </View>
        <Pressable
          style={styles.rectangleCopy2}
          onPress={() => navigation.navigate("TCCHomeInitial")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-copy-2.png")}
          />
        </Pressable>
        <Text style={styles.lOGINText}>เข้าสู่ระบบ</Text>
        <Text style={styles.lOGINText1}>ลืมรหัสผ่าน</Text>
        <Text style={styles.lOGINText2}>เปลี่ยนรหัสผ่าน</Text>
      </View>
      <Image
        style={styles.rectangleCopy21}
        resizeMode="cover"
        source={require("../assets/rectangle-copy-21.png")}
      />
      <Text style={styles.lOGINText3}>เข้าสู่ระบบครั้งแรก</Text>
      <Text style={styles.lOGINText4}>ลงทะเบียนตัวแทนเติมเงิน</Text>
      <Image
        style={styles.icoTruePlusIcon}
        resizeMode="cover"
        source={require("../assets/icotrueplus1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 640,
  },
  bgTrueplusIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 640,
  },
  rectangleCopyView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  uSERNAMEText: {
    position: "absolute",
    marginTop: -12,
    width: "70.67%",
    top: "50%",
    left: "15.67%",
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.7)",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    marginTop: -9,
    width: "4.98%",
    top: "50%",
    left: "5.34%",
    fontSize: 16,
    fontFamily: "Font Awesome 5 Free",
    color: "rgba(74, 74, 74, 0.3)",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    height: "6.56%",
    width: "83.33%",
    top: "56.41%",
    right: "8.33%",
    bottom: "37.03%",
    left: "8.33%",
  },
  rectangleCopyView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  uSERNAMEText1: {
    position: "absolute",
    marginTop: -12,
    width: "70.67%",
    top: "50%",
    left: "15.67%",
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.7)",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    marginTop: -9,
    width: "4.98%",
    top: "50%",
    left: "5.34%",
    fontSize: 16,
    fontFamily: "Font Awesome 5 Free",
    color: "rgba(74, 74, 74, 0.3)",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    height: "6.56%",
    width: "83.33%",
    top: "66.09%",
    right: "8.33%",
    bottom: "27.34%",
    left: "8.33%",
  },
  icon: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleCopy2: {
    position: "absolute",
    left: "8.33%",
    top: "75.78%",
    right: "8.33%",
    bottom: "17.66%",
    width: "83.33%",
    height: "6.56%",
  },
  lOGINText: {
    position: "absolute",
    marginTop: 175,
    width: "27.78%",
    top: "50%",
    left: "36.11%",
    fontSize: 16,
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "center",
  },
  lOGINText1: {
    position: "absolute",
    marginTop: 227,
    width: "27.78%",
    top: "50%",
    left: "8.33%",
    fontSize: 14,
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
    opacity: 0.8,
  },
  lOGINText2: {
    position: "absolute",
    marginTop: 227,
    width: "27.78%",
    top: "50%",
    left: "63.89%",
    fontSize: 14,
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "right",
    opacity: 0.8,
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 640,
  },
  rectangleCopy21: {
    position: "absolute",
    height: "7.81%",
    width: "100%",
    top: "92.19%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  lOGINText3: {
    position: "absolute",
    marginTop: 285,
    top: "50%",
    left: "8.61%",
    fontSize: 14,
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  lOGINText4: {
    position: "absolute",
    marginTop: 285,
    top: "50%",
    left: "51.94%",
    fontSize: 14,
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "right",
  },
  icoTruePlusIcon: {
    position: "absolute",
    top: 110,
    left: 80,
    width: 200,
    height: 140,
  },
  tCCLoginView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TCCLogin;
