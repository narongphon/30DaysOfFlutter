import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TCCHomeRefresh = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tCCHomeRefreshView}>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={styles.groupView3}>
        <View style={styles.rectangleView} />
        <View style={styles.groupView2}>
          <View style={styles.groupView1}>
            <View style={styles.groupView}>
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={styles.text}></Text>
            </View>
            <Text style={styles.text1}>
              เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-482.png")}
      />
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Text style={styles.text2}>ตกลง</Text>
      <View style={styles.groupView4}>
        <View style={styles.barsNavigationNavigationBarView}>
          <View style={styles.statusBarView}>
            <Image
              style={styles.pinRightIcon}
              resizeMode="cover"
              source={require("../assets/pin-right.png")}
            />
            <Image
              style={styles.signalIcon}
              resizeMode="cover"
              source={require("../assets/signal.png")}
            />
            <Text style={styles.timeText}>9:41 AM</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupView6}>
        <View style={styles.groupView5}>
          <View style={styles.menuBottomView}>
            <View style={styles.tabMenuView}>
              <View style={styles.tabMenuActiveView1}>
                <View style={styles.tabMenuActiveView}>
                  <Image
                    style={styles.boundsIcon}
                    resizeMode="cover"
                    source={require("../assets/bounds12.png")}
                  />
                  <View style={styles.objectView}>
                    <Text style={styles.text3}>หน้าแรก</Text>
                  </View>
                  <Text style={styles.text4}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.menuBottomView1}>
            <View style={styles.tabMenuView1}>
              <View style={styles.tabMenuActiveView3}>
                <View style={styles.tabMenuActiveView2}>
                  <Image
                    style={styles.boundsIcon1}
                    resizeMode="cover"
                    source={require("../assets/bounds12.png")}
                  />
                  <View style={styles.objectView1}>
                    <Text style={styles.text5}>รายงาน</Text>
                  </View>
                  <Text style={styles.text6}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.menuBottomView2}>
            <View style={styles.tabMenuView2}>
              <View style={styles.tabMenuActiveView5}>
                <View style={styles.tabMenuActiveView4}>
                  <Image
                    style={styles.boundsIcon2}
                    resizeMode="cover"
                    source={require("../assets/bounds12.png")}
                  />
                  <View style={styles.objectView2}>
                    <Text style={styles.text7}>ข่าวสาร</Text>
                  </View>
                  <Text style={styles.text8}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupView9}>
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group-708.png")}
        />
        <View style={styles.groupView8}>
          <View style={styles.groupView7}>
            <Pressable
              style={styles.groupPressable}
              onPress={() => navigation.navigate("Notification")}
            >
              <Image
                style={styles.ellipseIcon1}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={styles.text9}></Text>
            </Pressable>
            <Text style={styles.text10}>
              เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
            </Text>
          </View>
        </View>
        <Text style={styles.text11}>ตกลง</Text>
      </View>
      <View style={styles.groupView11}>
        <View style={styles.groupView10}>
          <Image
            style={styles.ellipseIcon2}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.text12}></Text>
        </View>
        <Text style={styles.text13}>เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 380,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 320,
    height: 90,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 46,
    height: 46,
  },
  text: {
    position: "absolute",
    top: 11,
    left: 13,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 222,
    width: 46,
    height: 46,
  },
  text1: {
    position: "absolute",
    top: 14,
    left: 0,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 268,
    height: 46,
  },
  groupView2: {
    position: "absolute",
    top: 22,
    left: 26,
    width: 268,
    height: 46,
  },
  groupView3: {
    position: "absolute",
    top: 128,
    left: 20,
    width: 320,
    height: 90,
  },
  groupIcon: {
    position: "absolute",
    top: 44,
    left: 0,
    width: 116.23,
    height: 50,
  },
  groupIcon1: {
    position: "absolute",
    height: "35.68%",
    width: "171.61%",
    top: "-5.06%",
    right: "-41.48%",
    bottom: "69.38%",
    left: "-30.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  text2: {
    position: "absolute",
    marginTop: 331,
    top: "50%",
    left: "48.73%",
    fontSize: 13,
    fontFamily: "Thonburi",
    color: "#4a4a4a",
    textAlign: "center",
    display: "none",
  },
  pinRightIcon: {
    position: "absolute",
    top: 3,
    right: 5,
    width: 72,
    height: 15,
    overflow: "hidden",
  },
  signalIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 323.67,
    height: 20,
  },
  timeText: {
    position: "absolute",
    top: 4,
    left: "1.52%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "center",
  },
  statusBarView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 20,
  },
  barsNavigationNavigationBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 20,
    overflow: "hidden",
  },
  groupView4: {
    position: "absolute",
    top: 2,
    left: 0,
    width: 360,
    height: 20,
  },
  boundsIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text3: {
    position: "absolute",
    marginTop: 8,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#e44160",
    textAlign: "center",
  },
  objectView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text4: {
    position: "absolute",
    marginTop: -14,
    width: "23.33%",
    top: "50%",
    left: "37.78%",
    fontSize: 18,
    fontFamily: "Font Awesome 5 Free",
    color: "#e44160",
    textAlign: "center",
  },
  tabMenuActiveView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120,
    height: 42,
  },
  boundsIcon1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text5: {
    position: "absolute",
    marginTop: 8,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  objectView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text6: {
    position: "absolute",
    marginTop: -14,
    width: "23.33%",
    top: "50%",
    left: "37.78%",
    fontSize: 18,
    fontFamily: "Font Awesome 5 Free",
    color: "#d0d0d0",
    textAlign: "center",
  },
  tabMenuActiveView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView1: {
    position: "absolute",
    top: 0,
    left: 120,
    width: 120,
    height: 42,
  },
  boundsIcon2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text7: {
    position: "absolute",
    marginTop: 8,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  objectView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text8: {
    position: "absolute",
    marginTop: -14,
    width: "23.33%",
    top: "50%",
    left: "37.78%",
    fontSize: 18,
    fontFamily: "Font Awesome 5 Free",
    color: "#d0d0d0",
    textAlign: "center",
  },
  tabMenuActiveView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView2: {
    position: "absolute",
    top: 0,
    left: 240,
    width: 120,
    height: 42,
  },
  groupView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 42,
  },
  groupView6: {
    position: "absolute",
    top: 598,
    left: 0,
    width: 360,
    height: 42,
  },
  groupIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 360,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 46,
    height: 46,
  },
  text9: {
    position: "absolute",
    top: 11,
    left: 13,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupPressable: {
    position: "absolute",
    top: 0,
    left: 222,
    width: 46,
    height: 46,
  },
  text10: {
    position: "absolute",
    top: 14,
    left: 0,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  groupView7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 268,
    height: 46,
  },
  groupView8: {
    position: "absolute",
    top: 157,
    left: 46,
    width: 268,
    height: 46,
  },
  text11: {
    position: "absolute",
    marginTop: -308,
    top: "50%",
    left: "40.42%",
    fontSize: 13,
    fontFamily: "Thonburi",
    color: "#4a4a4a",
    textAlign: "center",
    display: "none",
  },
  groupView9: {
    position: "absolute",
    top: 238,
    left: 0,
    width: 360,
    height: 360,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 46,
    height: 46,
  },
  text12: {
    position: "absolute",
    top: 11,
    left: 13,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
  },
  groupView10: {
    position: "absolute",
    top: 0,
    left: 214,
    width: 46,
    height: 46,
  },
  text13: {
    position: "absolute",
    top: 14,
    left: 0,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "left",
  },
  groupView11: {
    position: "absolute",
    top: 46,
    left: 80,
    width: 260,
    height: 46,
  },
  tCCHomeRefreshView: {
    position: "relative",
    backgroundColor: "#f5f5f5",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TCCHomeRefresh;
