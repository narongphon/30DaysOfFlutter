import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TCCHomeExpand = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tCCHomeExpandView}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.bgTrueplusHomeIcon}
        resizeMode="cover"
        source={require("../assets/bgtrueplushome.png")}
      />
      <Text style={styles.text}>เมนูทั้งหมด</Text>
      <Text style={styles.text1}></Text>
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
                    <Text style={styles.text2}>หน้าแรก</Text>
                  </View>
                  <Text style={styles.text3}></Text>
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
                    <Text style={styles.text4}>รายงาน</Text>
                  </View>
                  <Text style={styles.text5}></Text>
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
                    <Text style={styles.text6}>ซื้อสินค้า</Text>
                  </View>
                  <Text style={styles.text7}></Text>
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
                    <Text style={styles.text8}>ข่าวสาร</Text>
                  </View>
                  <Text style={styles.text9}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupView3}>
        <View style={styles.groupView2}>
          <View style={styles.menuBottomView4}>
            <View style={styles.tabMenuView4}>
              <View style={styles.tabMenuActiveView9}>
                <View style={styles.tabMenuActiveView8}>
                  <Image
                    style={styles.boundsIcon4}
                    resizeMode="cover"
                    source={require("../assets/bounds4.png")}
                  />
                  <View style={styles.objectView4}>
                    <Text style={styles.text10}>หน้าแรก</Text>
                  </View>
                  <Text style={styles.text11}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.menuBottomView5}>
            <View style={styles.tabMenuView5}>
              <View style={styles.tabMenuActiveView11}>
                <View style={styles.tabMenuActiveView10}>
                  <Image
                    style={styles.boundsIcon5}
                    resizeMode="cover"
                    source={require("../assets/bounds4.png")}
                  />
                  <View style={styles.objectView5}>
                    <Text style={styles.text12}>รายงาน</Text>
                  </View>
                  <Text style={styles.text13}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.menuBottomView6}>
            <View style={styles.tabMenuView6}>
              <View style={styles.tabMenuActiveView13}>
                <View style={styles.tabMenuActiveView12}>
                  <Image
                    style={styles.boundsIcon6}
                    resizeMode="cover"
                    source={require("../assets/bounds4.png")}
                  />
                  <View style={styles.objectView6}>
                    <Text style={styles.text14}>ซื้อสินค้า</Text>
                  </View>
                  <Text style={styles.text15}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.menuBottomView7}>
            <View style={styles.tabMenuView7}>
              <View style={styles.tabMenuActiveView15}>
                <View style={styles.tabMenuActiveView14}>
                  <Image
                    style={styles.boundsIcon7}
                    resizeMode="cover"
                    source={require("../assets/bounds4.png")}
                  />
                  <View style={styles.objectView7}>
                    <Text style={styles.text16}>ข่าวสาร</Text>
                  </View>
                  <Text style={styles.text17}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
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
      <View style={styles.bgTccHomeView}>
        <View style={styles.groupView25}>
          <View style={styles.groupView6}>
            <Image
              style={styles.squircleIcon}
              resizeMode="cover"
              source={require("../assets/squircle.png")}
            />
            <Image
              style={styles.squircleIcon1}
              resizeMode="cover"
              source={require("../assets/squircle.png")}
            />
            <View style={styles.rectangleView} />
            <View style={styles.rectangleView1} />
            <View style={styles.groupView5}>
              <View style={styles.iconHomeView}>
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require("../assets/group-515.png")}
                />
                <Text style={styles.mobiText}>
                  <Text style={styles.text18}>ขาย/รับสิทธิ์</Text>
                  <Text style={styles.text19}>ทีมบุก</Text>
                </Text>
                <Image
                  style={styles.groupIcon1}
                  resizeMode="cover"
                  source={require("../assets/group-683.png")}
                />
              </View>
            </View>
            <Text style={styles.text20}>ตกลง</Text>
          </View>
          <Text style={styles.text21}>ขายและบริการ</Text>
          <View style={styles.groupView7}>
            <View style={styles.iconHomeView1}>
              <Image
                style={styles.groupIcon2}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Image
                style={styles.groupIcon3}
                resizeMode="cover"
                source={require("../assets/group-610.png")}
              />
              <Text style={styles.mobiText1}>เติมเงิน</Text>
            </View>
          </View>
          <View style={styles.groupView8}>
            <View style={styles.iconHomeView2}>
              <Image
                style={styles.groupIcon4}
                resizeMode="cover"
                source={require("../assets/group-5152.png")}
              />
              <Text style={styles.mobiText2}>ขาย</Text>
            </View>
          </View>
          <View style={styles.groupView9}>
            <View style={styles.iconHomeView3}>
              <Image
                style={styles.groupIcon5}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Image
                style={styles.unionIcon}
                resizeMode="cover"
                source={require("../assets/union.png")}
              />
              <Image
                style={styles.unionIcon1}
                resizeMode="cover"
                source={require("../assets/union1.png")}
              />
              <Image
                style={styles.vector65Stroke}
                resizeMode="cover"
                source={require("../assets/vector-65-stroke.png")}
              />
              <Image
                style={styles.vector66Stroke}
                resizeMode="cover"
                source={require("../assets/vector-66-stroke.png")}
              />
              <Image
                style={styles.line8Stroke}
                resizeMode="cover"
                source={require("../assets/line-8-stroke.png")}
              />
              <Text style={styles.mobiText3}>
                <Text style={styles.text22}>ยกเลิก</Text>
                <Text style={styles.text23}>แพ็กเกจ</Text>
                <Text style={styles.text24}>เสริม</Text>
              </Text>
            </View>
          </View>
          <View style={styles.groupView10}>
            <View style={styles.iconHomeView4}>
              <Image
                style={styles.groupIcon6}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Image
                style={styles.groupIcon7}
                resizeMode="cover"
                source={require("../assets/group-609.png")}
              />
              <Text style={styles.mobiText4}>
                <Text style={styles.text25}>ลงทะเบียน</Text>
                <Text style={styles.text26}>ยืนยันตัวตน</Text>
              </Text>
            </View>
          </View>
          <View style={styles.groupView11}>
            <View style={styles.iconHomeView5}>
              <Image
                style={styles.groupIcon8}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Text style={styles.mobiText5}>
                <Text style={styles.text27}>เปลี่ยนโปร</Text>
                <Text style={styles.text28}>ฮัลโหล</Text>
              </Text>
              <Image
                style={styles.groupIcon9}
                resizeMode="cover"
                source={require("../assets/group-605.png")}
              />
            </View>
          </View>
          <View style={styles.groupView12}>
            <View style={styles.iconHomeView6}>
              <Image
                style={styles.groupIcon10}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Image
                style={styles.unionIcon2}
                resizeMode="cover"
                source={require("../assets/union2.png")}
              />
              <Image
                style={styles.unionIcon3}
                resizeMode="cover"
                source={require("../assets/union3.png")}
              />
              <Image
                style={styles.unionIcon4}
                resizeMode="cover"
                source={require("../assets/union4.png")}
              />
              <Text style={styles.mobiText6}>ลงทะเบียนซิม</Text>
            </View>
          </View>
          <View style={styles.groupView14}>
            <View style={styles.iconHomeView7}>
              <Image
                style={styles.groupIcon11}
                resizeMode="cover"
                source={require("../assets/group-5157.png")}
              />
              <Text style={styles.mobiText7}>โปรรายเดือนขายดี</Text>
            </View>
            <View style={styles.groupView13}>
              <View style={styles.iconHomeView8}>
                <Image
                  style={styles.groupIcon12}
                  resizeMode="cover"
                  source={require("../assets/group-515.png")}
                />
                <Image
                  style={styles.groupIcon13}
                  resizeMode="cover"
                  source={require("../assets/group-619.png")}
                />
                <Text style={styles.mobiText8}>เครื่องพร้อมซิมรายเดือน</Text>
              </View>
            </View>
          </View>
          <View style={styles.groupView15}>
            <View style={styles.iconHomeView9}>
              <Image
                style={styles.groupIcon14}
                resizeMode="cover"
                source={require("../assets/group-5159.png")}
              />
              <Text style={styles.mobiText9}>
                <Text style={styles.text29}>ยกเลิก</Text>
                <Text style={styles.text30}>เติมเงิน</Text>
              </Text>
            </View>
          </View>
          <View style={styles.groupView16}>
            <View style={styles.iconHomeView10}>
              <Image
                style={styles.groupIcon15}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Text style={styles.mobiText10}>
                <Text style={styles.text31}>ขายแพ็กเกจ</Text>
                <Text style={styles.text32}>เสริม</Text>
              </Text>
            </View>
            <Image
              style={styles.unionIcon5}
              resizeMode="cover"
              source={require("../assets/union5.png")}
            />
            <Image
              style={styles.unionIcon6}
              resizeMode="cover"
              source={require("../assets/union1.png")}
            />
            <Image
              style={styles.groupIcon16}
              resizeMode="cover"
              source={require("../assets/group-602.png")}
            />
          </View>
          <View style={styles.groupView21}>
            <Text style={styles.text33}>บริหารร้านค้าและตัวแทน L2</Text>
            <View style={styles.lineView} />
            <View style={styles.groupView17}>
              <View style={styles.iconHomeView11}>
                <Image
                  style={styles.groupIcon17}
                  resizeMode="cover"
                  source={require("../assets/group-51511.png")}
                />
                <Text style={styles.mobiText11}>{`ผูกเบอร์ L2 `}</Text>
              </View>
            </View>
            <View style={styles.groupView18}>
              <View style={styles.iconHomeView12}>
                <Image
                  style={styles.groupIcon18}
                  resizeMode="cover"
                  source={require("../assets/group-515.png")}
                />
                <Text style={styles.mobiText12}>
                  <Text style={styles.text34}>จัดการ</Text>
                  <Text style={styles.text35}>คลังสินค้า</Text>
                </Text>
              </View>
              <Image
                style={styles.unionIcon7}
                resizeMode="cover"
                source={require("../assets/union7.png")}
              />
              <Image
                style={styles.unionIcon8}
                resizeMode="cover"
                source={require("../assets/union8.png")}
              />
            </View>
            <View style={styles.groupView20}>
              <View style={styles.groupView19}>
                <View style={styles.iconHomeView13}>
                  <Image
                    style={styles.groupIcon19}
                    resizeMode="cover"
                    source={require("../assets/group-51513.png")}
                  />
                  <Text style={styles.mobiText13}>สั่งซื้อสินค้า S2</Text>
                </View>
              </View>
              <View style={styles.iconHomeView14}>
                <Image
                  style={styles.groupIcon20}
                  resizeMode="cover"
                  source={require("../assets/group-51514.png")}
                />
                <Text style={styles.mobiText14}>
                  <Text style={styles.text36}>จัดการ</Text>
                  <Text style={styles.text37}>พนักงานขาย</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.groupView24}>
            <View style={styles.lineView1} />
            <Text style={styles.text38}>True Point Plus</Text>
            <View style={styles.groupView22}>
              <View style={styles.iconHomeView15}>
                <Image
                  style={styles.groupIcon21}
                  resizeMode="cover"
                  source={require("../assets/group-515.png")}
                />
                <Text style={styles.mobiText15}>
                  <Text style={styles.text39}>แลกของ</Text>
                  <Text style={styles.text40}>รางวัล</Text>
                </Text>
              </View>
              <Image
                style={styles.rectangle12Stroke}
                resizeMode="cover"
                source={require("../assets/rectangle-12-stroke.png")}
              />
              <Image
                style={styles.unionIcon9}
                resizeMode="cover"
                source={require("../assets/union9.png")}
              />
            </View>
            <View style={styles.groupView23}>
              <View style={styles.iconHomeView16}>
                <Image
                  style={styles.groupIcon22}
                  resizeMode="cover"
                  source={require("../assets/group-515.png")}
                />
                <Pressable
                  style={styles.unionPressable}
                  onPress={() => navigation.navigate("TCCHomeRefresh")}
                >
                  <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/union10.png")}
                  />
                </Pressable>
                <Image
                  style={styles.unionIcon10}
                  resizeMode="cover"
                  source={require("../assets/union11.png")}
                />
                <Text style={styles.mobiText16}>
                  <Text style={styles.text41}>รายงาน</Text>
                  <Text style={styles.text42}>พ้อยท์พลัส</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.iconHomeView17}>
        <Image
          style={styles.groupIcon23}
          resizeMode="cover"
          source={require("../assets/group-51517.png")}
        />
        <Text style={styles.mobiText17}>ย้ายค่าย</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    top: 24,
    left: 0,
    width: 360,
    height: 339,
  },
  bgTrueplusHomeIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 300,
  },
  text: {
    position: "absolute",
    top: 39,
    left: 137,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    top: 45,
    left: 20,
    fontSize: 20,
    lineHeight: 16,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
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
  objectView: {
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
  objectView1: {
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
  objectView2: {
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
  text8: {
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
  text9: {
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
    top: 978,
    left: 0,
    width: 360,
    height: 42,
  },
  boundsIcon4: {
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
  text10: {
    position: "absolute",
    marginTop: 8,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: 8,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#e0001d",
    textAlign: "center",
  },
  objectView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text11: {
    position: "absolute",
    marginTop: -14,
    width: "23.33%",
    top: "50%",
    left: "37.78%",
    fontSize: 18,
    fontFamily: "Font Awesome 5 Free",
    color: "#e0001d",
    textAlign: "center",
  },
  tabMenuActiveView8: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView9: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 90,
    height: 42,
  },
  boundsIcon5: {
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
  text12: {
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
  objectView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text13: {
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
  tabMenuActiveView10: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView11: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView5: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView5: {
    position: "absolute",
    top: 0,
    left: 90,
    width: 90,
    height: 42,
  },
  boundsIcon6: {
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
  text14: {
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
  objectView6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text15: {
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
  tabMenuActiveView12: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView13: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView6: {
    position: "absolute",
    top: 0,
    left: 180,
    width: 90,
    height: 42,
  },
  boundsIcon7: {
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
  text16: {
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
  objectView7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text17: {
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
  tabMenuActiveView14: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  tabMenuActiveView15: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  tabMenuView7: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  menuBottomView7: {
    position: "absolute",
    top: 0,
    left: 270,
    width: 90,
    height: 42,
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 42,
  },
  groupView3: {
    position: "absolute",
    top: 2199,
    left: 0,
    width: 360,
    height: 42,
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
  squircleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  squircleIcon1: {
    position: "absolute",
    top: 0,
    left: 260,
    width: 100,
    height: 100,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 50,
    backgroundColor: "#fff",
    width: 264,
    height: 100,
  },
  rectangleView1: {
    position: "absolute",
    top: 50,
    left: 0,
    backgroundColor: "#fff",
    width: 360,
    height: 842,
  },
  groupIcon: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text18: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text19: {
    margin: 0,
  },
  mobiText: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupIcon1: {
    position: "absolute",
    top: 12,
    left: 15,
    width: 39.48,
    height: 38,
  },
  iconHomeView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView5: {
    position: "absolute",
    top: 343,
    left: 276,
    width: 70,
    height: 118,
  },
  text20: {
    position: "absolute",
    marginTop: -545,
    top: "50%",
    left: "40.42%",
    fontSize: 13,
    fontFamily: "Thonburi",
    color: "#4a4a4a",
    textAlign: "center",
    display: "none",
  },
  groupView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 892,
  },
  text21: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  groupIcon2: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon3: {
    position: "absolute",
    top: 12,
    left: 17,
    width: 36,
    height: 30.93,
  },
  mobiText1: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView7: {
    position: "absolute",
    top: 67,
    left: 15,
    width: 70,
    height: 118,
  },
  groupIcon4: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mobiText2: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView8: {
    position: "absolute",
    top: 343,
    left: 15,
    width: 70,
    height: 118,
  },
  groupIcon5: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  unionIcon: {
    position: "relative",
    width: 10.05,
    height: 10.05,
  },
  unionIcon1: {
    position: "relative",
    width: 24,
    height: 39.88,
  },
  vector65Stroke: {
    position: "absolute",
    top: 19.93,
    left: 31.71,
    width: 6.59,
    height: 3.17,
  },
  vector66Stroke: {
    position: "absolute",
    top: 17,
    left: 30,
    width: 10,
    height: 4.15,
  },
  line8Stroke: {
    position: "absolute",
    top: 22.73,
    left: 33.78,
    width: 2.44,
    height: 1.71,
  },
  text22: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text23: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text24: {
    margin: 0,
  },
  mobiText3: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView9: {
    position: "absolute",
    top: 205,
    left: 189,
    width: 70,
    height: 118,
  },
  groupIcon6: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon7: {
    position: "absolute",
    height: "20.34%",
    width: "51.55%",
    top: "15.25%",
    right: "24.16%",
    bottom: "64.41%",
    left: "24.29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text25: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text26: {
    margin: 0,
  },
  mobiText4: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView10: {
    position: "absolute",
    top: 205,
    left: 276,
    width: 70,
    height: 118,
  },
  groupIcon8: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text27: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text28: {
    margin: 0,
  },
  mobiText5: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupIcon9: {
    position: "absolute",
    top: 14,
    left: 19,
    width: 32.75,
    height: 32,
  },
  iconHomeView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView11: {
    position: "absolute",
    top: 205,
    left: 102,
    width: 70,
    height: 118,
  },
  groupIcon10: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  unionIcon2: {
    position: "relative",
    width: 28,
    height: 40.11,
  },
  unionIcon3: {
    position: "relative",
    width: 16.08,
    height: 16.08,
  },
  unionIcon4: {
    position: "relative",
    width: 9.75,
    height: 9.51,
  },
  mobiText6: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView12: {
    position: "absolute",
    top: 67,
    left: 102,
    width: 70,
    height: 118,
  },
  groupIcon11: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mobiText7: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupIcon12: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon13: {
    position: "absolute",
    top: 10,
    left: 23,
    width: 24.07,
    height: 40,
  },
  mobiText8: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView13: {
    position: "absolute",
    top: 0,
    left: 87,
    width: 70,
    height: 118,
  },
  groupView14: {
    position: "absolute",
    top: 343,
    left: 102,
    width: 157,
    height: 118,
  },
  groupIcon14: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text29: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text30: {
    margin: 0,
  },
  mobiText9: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView15: {
    position: "absolute",
    top: 67,
    left: 189,
    width: 70,
    height: 118,
  },
  groupIcon15: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text31: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text32: {
    margin: 0,
  },
  mobiText10: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  unionIcon5: {
    position: "relative",
    width: 10.19,
    height: 12.92,
  },
  unionIcon6: {
    position: "relative",
    width: 24,
    height: 39.88,
  },
  groupIcon16: {
    position: "absolute",
    top: 16.57,
    left: 30,
    width: 10,
    height: 7.44,
  },
  groupView16: {
    position: "absolute",
    top: 67,
    left: 276,
    width: 70,
    height: 118,
  },
  text33: {
    position: "absolute",
    top: 20,
    left: 5,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    top: -0.5,
    left: 4.5,
    borderStyle: "solid",
    borderColor: "#e5e5e5",
    borderTopWidth: 1,
    width: 321,
    height: 1,
  },
  groupIcon17: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mobiText11: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView11: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView17: {
    position: "absolute",
    top: 68,
    left: 174,
    width: 70,
    height: 118,
  },
  groupIcon18: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text34: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text35: {
    margin: 0,
  },
  mobiText12: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  unionIcon7: {
    position: "relative",
    width: 37,
    height: 31.95,
  },
  unionIcon8: {
    position: "relative",
    width: 38.35,
    height: 38,
  },
  groupView18: {
    position: "absolute",
    top: 67,
    left: 0,
    width: 70,
    height: 118,
  },
  groupIcon19: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mobiText13: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView13: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView19: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupIcon20: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text36: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text37: {
    margin: 0,
  },
  mobiText14: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView14: {
    position: "absolute",
    top: 1,
    left: 174,
    width: 70,
    height: 118,
  },
  groupView20: {
    position: "absolute",
    top: 67,
    left: 87,
    width: 244,
    height: 119,
  },
  groupView21: {
    position: "absolute",
    top: 481,
    left: 15,
    width: 331,
    height: 186,
  },
  lineView1: {
    position: "absolute",
    top: -0.5,
    left: 1.5,
    borderStyle: "solid",
    borderColor: "#e5e5e5",
    borderTopWidth: 1,
    width: 321,
    height: 1,
  },
  text38: {
    position: "absolute",
    top: 20,
    left: 0,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  groupIcon21: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text39: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text40: {
    margin: 0,
  },
  mobiText15: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  rectangle12Stroke: {
    position: "absolute",
    top: 19.8,
    left: 30.33,
    width: 8.34,
    height: 27.57,
  },
  unionIcon9: {
    position: "relative",
    width: 37,
    height: 35.37,
  },
  groupView22: {
    position: "absolute",
    top: 67,
    left: 0,
    width: 70,
    height: 118,
  },
  groupIcon22: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  unionPressable: {
    position: "relative",
    width: 26,
    height: 39.27,
  },
  unionIcon10: {
    position: "relative",
    width: 18.33,
    height: 30.18,
  },
  text41: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text42: {
    margin: 0,
  },
  mobiText16: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView16: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView23: {
    position: "absolute",
    top: 67,
    left: 87,
    width: 70,
    height: 118,
  },
  groupView24: {
    position: "absolute",
    top: 687,
    left: 20,
    width: 322,
    height: 185,
  },
  groupView25: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 892,
  },
  bgTccHomeView: {
    position: "absolute",
    top: 86,
    left: 0,
    width: 360,
    height: 892,
  },
  groupIcon23: {
    position: "absolute",
    height: "50.85%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "49.15%",
    left: "7.14%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mobiText17: {
    position: "absolute",
    width: "100%",
    top: "59.32%",
    left: "0%",
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  iconHomeView17: {
    position: "absolute",
    top: 291,
    left: 15,
    width: 70,
    height: 118,
  },
  tCCHomeExpandView: {
    position: "relative",
    backgroundColor: "#f5f5f5",
    flex: 1,
    width: "100%",
    height: 1020,
    overflow: "hidden",
  },
});

export default TCCHomeExpand;
