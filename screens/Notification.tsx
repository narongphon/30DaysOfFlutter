import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Notification = () => {
  return (
    <View style={styles.notificationView}>
      <View style={styles.groupView1}>
        <View style={styles.groupView}>
          <View style={styles.menuBottomView}>
            <View style={styles.tabMenuView}>
              <View style={styles.tabMenuActiveView1}>
                <View style={styles.tabMenuActiveView}>
                  <Image
                    style={styles.boundsIcon}
                    resizeMode="cover"
                    source={require("../assets/bounds.png")}
                  />
                  <View style={styles.objectView}>
                    <Text style={styles.text}>หน้าแรก</Text>
                  </View>
                  <Text style={styles.text1}></Text>
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
                    source={require("../assets/bounds.png")}
                  />
                  <View style={styles.objectView1}>
                    <Text style={styles.text2}>รายงาน</Text>
                  </View>
                  <Text style={styles.text3}></Text>
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
                    source={require("../assets/bounds.png")}
                  />
                  <View style={styles.objectView2}>
                    <Text style={styles.text4}>ซื้อสินค้า</Text>
                  </View>
                  <Text style={styles.text5}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.menuBottomView3}>
            <View style={styles.tabMenuView3}>
              <View style={styles.tabMenuActiveView7}>
                <View style={styles.tabMenuActiveView6}>
                  <Image
                    style={styles.boundsIcon3}
                    resizeMode="cover"
                    source={require("../assets/bounds.png")}
                  />
                  <View style={styles.objectView3}>
                    <Text style={styles.text6}>ข่าวสาร</Text>
                  </View>
                  <Text style={styles.text7}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.maskGroupView}>
        <Image
          style={styles.bgTrueplusHomeIcon}
          resizeMode="cover"
          source={require("../assets/bgtrueplushome1.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-78.png")}
        />
        <View style={styles.groupView3}>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView} />
            <Text style={styles.mobileMagicTesco}>รหัสร้านค้า 100222113</Text>
          </View>
          <Text style={styles.mobileMagicTesco1}>นายชาญชัย ทองหนองหิน</Text>
        </View>
      </View>
      <View style={styles.groupView7}>
        <View style={styles.rectangleView1} />
        <View style={styles.groupView6}>
          <View style={styles.groupView5}>
            <View style={styles.groupView4}>
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={styles.text8}></Text>
            </View>
            <Text style={styles.text9}>
              เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupView11}>
        <View style={styles.rectangleView2} />
        <View style={styles.groupView10}>
          <View style={styles.groupView9}>
            <View style={styles.groupView8}>
              <Image
                style={styles.ellipseIcon1}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={styles.text10}></Text>
            </View>
            <Text style={styles.text11}>
              เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupView15}>
        <View style={styles.rectangleView3} />
        <View style={styles.groupView14}>
          <View style={styles.groupView13}>
            <View style={styles.groupView12}>
              <Image
                style={styles.ellipseIcon2}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Text style={styles.text12}></Text>
            </View>
            <Text style={styles.text13}>
              เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleView4} />
      <View style={styles.groupView18}>
        <View style={styles.groupView17}>
          <View style={styles.groupView16}>
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Text style={styles.text14}></Text>
          </View>
          <Text style={styles.text15}>เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</Text>
        </View>
      </View>
      <View style={styles.groupView20}>
        <View style={styles.groupView19}>
          <View style={styles.rectangleView5} />
          <View style={styles.barsNavigationNavigationBarView}>
            <View style={styles.statusBarView}>
              <View style={styles.pinRightView}>
                <View style={styles.batteryView}>
                  <Image
                    style={styles.batteryIcon}
                    resizeMode="cover"
                    source={require("../assets/battery.png")}
                  />
                  <Text style={styles.text16}>100%</Text>
                </View>
                <Image
                  style={styles.bluetoothIcon}
                  resizeMode="cover"
                  source={require("../assets/bluetooth.png")}
                />
              </View>
              <Text style={styles.timeText}>9:41 AM</Text>
              <View style={styles.signalView}>
                <Text style={styles.carrierText}>TRUE-H</Text>
                <View style={styles.mobileSignalView}>
                  <View style={styles.rectangleView6} />
                  <View style={styles.rectangleView7} />
                  <View style={styles.rectangleView8} />
                  <View style={styles.rectangleView9} />
                </View>
                <Image
                  style={styles.wifiIcon}
                  resizeMode="cover"
                  source={require("../assets/wifi.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.subHeader01}>
          <Text style={styles.text17}>ขาย/รับสิทธิ์สำหรับทีมบุก</Text>
          <View style={styles.icoutlineArrowBackView} />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={styles.text18}></Text>
        </View>
      </View>
      <View style={styles.groupView21}>
        <Text style={styles.text19}>
          ท่านอยู่ในพื้นที่ H ห้วยขวาง ดินแดง กรุงเทพ
        </Text>
        <Text style={styles.text20}></Text>
      </View>
      <View style={styles.rectangleView10} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  text: {
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
  objectView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text1: {
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
    width: 90,
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
  text2: {
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
  text3: {
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
    left: 90,
    width: 90,
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
  text4: {
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
  text5: {
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
    left: 180,
    width: 90,
    height: 42,
  },
  boundsIcon3: {
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
  text6: {
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
  objectView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text7: {
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
  tabMenuActiveView6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView3: {
    position: "absolute",
    top: 0,
    left: 270,
    width: 90,
    height: 42,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 42,
  },
  groupView1: {
    position: "absolute",
    top: 748,
    left: 0,
    width: 360,
    height: 42,
  },
  bgTrueplusHomeIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 430,
  },
  groupIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 1485.25,
    height: 1108.78,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 124,
    height: 17,
  },
  mobileMagicTesco: {
    position: "absolute",
    top: 0,
    left: 8,
    fontSize: 12,
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 124,
    height: 18,
  },
  mobileMagicTesco1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    top: 24,
    left: 20,
    width: 168,
    height: 41,
  },
  maskGroupView: {
    position: "absolute",
    top: 74,
    left: 0,
    width: 360,
    height: 380,
  },
  rectangleView1: {
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
    height: 56,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 46,
    height: 46,
  },
  text8: {
    position: "absolute",
    top: 11,
    left: 13,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
  },
  groupView4: {
    position: "absolute",
    top: 0,
    left: 222,
    width: 46,
    height: 46,
  },
  text9: {
    position: "absolute",
    top: 14,
    left: 0,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "left",
  },
  groupView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 268,
    height: 46,
  },
  groupView6: {
    position: "absolute",
    top: 5,
    left: 26,
    width: 268,
    height: 46,
  },
  groupView7: {
    position: "absolute",
    top: 164,
    left: 20,
    width: 320,
    height: 56,
  },
  rectangleView2: {
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
    height: 56,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 46,
    height: 46,
  },
  text10: {
    position: "absolute",
    top: 11,
    left: 13,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 222,
    width: 46,
    height: 46,
  },
  text11: {
    position: "absolute",
    top: 14,
    left: 0,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "left",
  },
  groupView9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 268,
    height: 46,
  },
  groupView10: {
    position: "absolute",
    top: 5,
    left: 26,
    width: 268,
    height: 46,
  },
  groupView11: {
    position: "absolute",
    top: 230,
    left: 20,
    width: 320,
    height: 56,
  },
  rectangleView3: {
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
    height: 56,
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
  groupView12: {
    position: "absolute",
    top: 0,
    left: 222,
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
  groupView13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 268,
    height: 46,
  },
  groupView14: {
    position: "absolute",
    top: 5,
    left: 26,
    width: 268,
    height: 46,
  },
  groupView15: {
    position: "absolute",
    top: 296,
    left: 20,
    width: 320,
    height: 56,
  },
  rectangleView4: {
    position: "absolute",
    top: 410,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    width: 360,
    height: 338,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 46,
    height: 46,
  },
  text14: {
    position: "absolute",
    top: 11,
    left: 13,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupView16: {
    position: "absolute",
    top: 0,
    left: 222,
    width: 46,
    height: 46,
  },
  text15: {
    position: "absolute",
    top: 14,
    left: 0,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  groupView17: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 268,
    height: 46,
  },
  groupView18: {
    position: "absolute",
    top: 556,
    left: 46,
    width: 268,
    height: 46,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000",
    width: 360,
    height: 24,
  },
  batteryIcon: {
    position: "absolute",
    marginTop: -6,
    top: "50%",
    right: 0,
    width: 26.5,
    height: 11.5,
  },
  text16: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    right: 29.5,
    fontSize: 12,
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "right",
    width: 33,
  },
  batteryView: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    right: 0.5,
    width: 62.5,
    height: 14,
  },
  bluetoothIcon: {
    position: "absolute",
    top: 0.93,
    left: 0.16,
    width: 7.1,
    height: 12.14,
  },
  pinRightView: {
    position: "absolute",
    top: 3,
    right: 5,
    width: 72,
    height: 15,
    overflow: "hidden",
  },
  timeText: {
    position: "absolute",
    top: 4,
    left: "43.19%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "center",
  },
  carrierText: {
    position: "absolute",
    marginTop: -6.5,
    top: "50%",
    left: 26,
    fontSize: 12,
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView6: {
    position: "absolute",
    height: "45%",
    width: "18.18%",
    top: "105%",
    right: "45.45%",
    bottom: "-50%",
    left: "36.36%",
    borderRadius: 1,
    backgroundColor: "#fff",
  },
  rectangleView7: {
    position: "absolute",
    height: "60%",
    width: "18.18%",
    top: "90%",
    right: "18.18%",
    bottom: "-50%",
    left: "63.64%",
    borderRadius: 1,
    backgroundColor: "#fff",
  },
  rectangleView8: {
    position: "absolute",
    height: "80%",
    width: "18.18%",
    top: "70%",
    right: "-9.09%",
    bottom: "-50%",
    left: "90.91%",
    borderRadius: 1,
    backgroundColor: "#fff",
  },
  rectangleView9: {
    position: "absolute",
    height: "100%",
    width: "18.18%",
    top: "50%",
    right: "-36.36%",
    bottom: "-50%",
    left: "118.18%",
    borderRadius: 1,
    backgroundColor: "#fff",
  },
  mobileSignalView: {
    position: "relative",
    backgroundColor: "#fff",
    width: 16.5,
    height: 10,
  },
  wifiIcon: {
    position: "relative",
    width: 14.34,
    height: 10,
  },
  signalView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 139,
    height: 20,
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
    top: 2,
    left: 0,
    width: 360,
    height: 20,
    overflow: "hidden",
  },
  groupView19: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 24,
  },
  text17: {
    position: "absolute",
    marginTop: -13,
    marginLeft: -94,
    top: "50%",
    left: "50%",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "center",
  },
  icoutlineArrowBackView: {
    position: "absolute",
    top: 8,
    left: 7,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    height: "40%",
    width: "3.89%",
    top: "30%",
    right: "3.65%",
    bottom: "30%",
    left: "92.46%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  text18: {
    position: "absolute",
    top: 17,
    left: 20,
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
  },
  subHeader01: {
    position: "absolute",
    top: 24,
    left: 0,
    backgroundColor: "#313c46",
    width: 360,
    height: 50,
    overflow: "hidden",
  },
  groupView20: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 74,
  },
  text19: {
    position: "absolute",
    top: 0,
    left: 14,
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  text20: {
    position: "absolute",
    top: 2,
    left: 0,
    fontSize: 12,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
  },
  groupView21: {
    position: "absolute",
    top: 372,
    left: 66,
    width: 228,
    height: 18,
  },
  rectangleView10: {
    position: "absolute",
    top: 447,
    left: 36,
    backgroundColor: "rgba(196, 196, 196, 0)",
    width: 60,
    height: 60,
  },
  notificationView: {
    position: "relative",
    backgroundColor: "#f5f5f5",
    flex: 1,
    width: "100%",
    height: 790,
    overflow: "hidden",
  },
});

export default Notification;
