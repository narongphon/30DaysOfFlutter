import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TCCHomeInitial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tCCHomeInitialView}>
      <Image
        style={styles.bgTrueplusHomeIcon}
        resizeMode="cover"
        source={require("../assets/bgtrueplushome2.png")}
      />
      <View style={styles.groupView2}>
        <View style={styles.rectangleView} />
        <View style={styles.lineView} />
        <View style={styles.groupView}>
          <Text style={styles.text}>ยอดเงินคงเหลือ</Text>
          <Text style={styles.text1}>229,010.65</Text>
          <Text style={styles.text2}>{`ข้อมูล ณ 08/08/2564 09:00 `}</Text>
          <Text style={styles.text3}>{`ข้อมูล ณ 08/08/2564 09:00 `}</Text>
        </View>
        <View style={styles.groupView1}>
          <Text style={styles.text4}>คะแนนคงเหลือ</Text>
          <Text style={styles.text5}>16,120</Text>
        </View>
      </View>
      <View style={styles.groupView3}>
        <View style={styles.rectangleView1} />
        <Text style={styles.mobileMagicTesco}>รหัสร้านค้า 100222113</Text>
      </View>
      <Text style={styles.mobileMagicTesco1}>
        <Text style={styles.mobileMagic}>{`Mobile Magic `}</Text>
        <Text style={styles.tescoLotusRama4}>(Tesco Lotus Rama4)</Text>
      </Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-482.png")}
      />
      <View style={styles.groupView4}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-27.png")}
        />
        <Text style={styles.text6}></Text>
        <View style={styles.notiView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.text7}>99+</Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <Text style={styles.text8}>ตกลง</Text>
      <View style={styles.groupView5}>
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
      <View style={styles.groupView28}>
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
        <View style={styles.rectangleView3} />
        <View style={styles.rectangleView4} />
        <View style={styles.groupView13}>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-526.png")}
          />
          <View style={styles.groupView12}>
            <View style={styles.groupView6}>
              <Image
                style={styles.maskGroupIcon}
                resizeMode="cover"
                source={require("../assets/mask-group1.png")}
              />
              <Text style={styles.wIFIText1}>
                <Text style={styles.wIFITxtContainer}>
                  <Text style={styles.text9}>เน็ตเร็วยิ่งกว่าเบิ้ลราคา</Text>
                  <Text style={styles.wIFIText}>
                    เดิม เน็ตไม่อั้น+WIFIไม่อั้น
                  </Text>
                  <Text style={styles.text10}>ทั้งเดือน</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.groupView7}>
              <Image
                style={styles.maskGroupIcon1}
                resizeMode="cover"
                source={require("../assets/mask-group1.png")}
              />
              <Text style={styles.text13}>
                <Text style={styles.txtText}>
                  <Text style={styles.text11}>เบอร์ฟันธง ตามลัคนาราศี</Text>
                  <Text style={styles.text12}>
                    โดย อ. ลักษณ์ ราชสีห์ โหรฟันธง
                  </Text>
                </Text>
              </Text>
            </View>
            <View style={styles.groupView8}>
              <Image
                style={styles.maskGroupIcon2}
                resizeMode="cover"
                source={require("../assets/mask-group1.png")}
              />
              <Text style={styles.text16}>
                <Text style={styles.txtText1}>
                  <Text style={styles.text14}>เบอร์ฟันธง ตามลัคนาราศี</Text>
                  <Text style={styles.text15}>
                    โดย อ. ลักษณ์ ราชสีห์ โหรฟันธง
                  </Text>
                </Text>
              </Text>
            </View>
            <View style={styles.groupView10}>
              <View style={styles.rectangleCopy2} />
              <View style={styles.groupView9}>
                <Text style={styles.primaryText}>ดูทั้งหมด</Text>
              </View>
            </View>
            <View style={styles.groupView11}>
              <Text style={styles.text17}>ข่าวสาร</Text>
              <Text style={styles.text18}></Text>
            </View>
          </View>
        </View>
        <Text style={styles.text19}>ตกลง</Text>
        <Pressable
          style={styles.viewAllMenu}
          onPress={() => navigation.navigate("TCCHomeExpand")}
        >
          <View style={styles.rectangleCopy21} />
          <View style={styles.groupView14}>
            <Text style={styles.primaryText1}>ดูเมนูทั้งหมด</Text>
            <Text style={styles.text20}></Text>
          </View>
        </Pressable>
        <View style={styles.groupView19}>
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group-5261.png")}
          />
          <View style={styles.groupView15}>
            <Image
              style={styles.image4Icon}
              resizeMode="cover"
              source={require("../assets/image-4.png")}
            />
          </View>
          <Text style={styles.text24}>
            <Text style={styles.text21}>
              ขายซิมเทพทรูรับค่าตอบแทนเพิ่ม 1,000 บาท
              ฟรีโบนัสทบยอดขาย1%ซนอันเดอร์ซะเพลซเวซน
            </Text>
            <Text style={styles.text22}>
              อันเดอร์ซะ เพลซเวเฟอร์ม้งตุ๊กแชมป์เจ๊แคร์สไตรค์
            </Text>
            <Text style={styles.text23}>
              เพรียวบางไฮไลต์สป็อตฮิต สังโฆว้าวอัตลักษณ์ ...
            </Text>
          </Text>
          <View style={styles.groupView17}>
            <View style={styles.rectangleCopy22} />
            <View style={styles.groupView16}>
              <Text style={styles.primaryText2}>ดูทั้งหมด</Text>
            </View>
          </View>
          <View style={styles.groupView18}>
            <Text style={styles.text25}>แคมเปญ</Text>
            <Text style={styles.text26}></Text>
          </View>
        </View>
        <View style={styles.groupView21}>
          <View style={styles.groupView20}>
            <View style={styles.iconHomeView}>
              <Image
                style={styles.groupIcon4}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Image
                style={styles.unionIcon}
                resizeMode="cover"
                source={require("../assets/union2.png")}
              />
              <Image
                style={styles.unionIcon1}
                resizeMode="cover"
                source={require("../assets/union3.png")}
              />
              <Image
                style={styles.unionIcon2}
                resizeMode="cover"
                source={require("../assets/union4.png")}
              />
              <Text style={styles.mobiText}>
                <Text style={styles.text27}>ลงทะเบียน</Text>
                <Text style={styles.text28}>ซิม</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.iconHomeView1}>
          <Image
            style={styles.groupIcon5}
            resizeMode="cover"
            source={require("../assets/group-51517.png")}
          />
          <Text style={styles.mobiText1}>ย้ายค่าย</Text>
        </View>
        <View style={styles.iconHomeView2}>
          <Image
            style={styles.groupIcon6}
            resizeMode="cover"
            source={require("../assets/group-5152.png")}
          />
          <Text style={styles.mobiText2}>ขาย</Text>
        </View>
        <View style={styles.groupView22}>
          <View style={styles.iconHomeView3}>
            <Image
              style={styles.groupIcon7}
              resizeMode="cover"
              source={require("../assets/group-515.png")}
            />
            <Image
              style={styles.unionIcon3}
              resizeMode="cover"
              source={require("../assets/union15.png")}
            />
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/.png")}
            />
            <Image
              style={styles.unionIcon4}
              resizeMode="cover"
              source={require("../assets/union3.png")}
            />
            <Text style={styles.mobiText3}>
              <Text style={styles.text29}>บริการหลัง</Text>
              <Text style={styles.text30}>การขาย</Text>
            </Text>
          </View>
        </View>
        <View style={styles.groupView23}>
          <View style={styles.iconHomeView4}>
            <Image
              style={styles.groupIcon8}
              resizeMode="cover"
              source={require("../assets/group-515.png")}
            />
            <Text style={styles.mobiText4}>
              <Text style={styles.text31}>ขาย/รับสิทธิ์</Text>
              <Text style={styles.text32}>ทีมบุก</Text>
            </Text>
            <Image
              style={styles.groupIcon9}
              resizeMode="cover"
              source={require("../assets/group-683.png")}
            />
          </View>
        </View>
        <View style={styles.groupView26}>
          <View style={styles.groupView24}>
            <View style={styles.iconHomeView5}>
              <Image
                style={styles.groupIcon10}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Text style={styles.mobiText5}>ขายแพ็กเกจ เสริม</Text>
            </View>
            <Image
              style={styles.unionIcon5}
              resizeMode="cover"
              source={require("../assets/union17.png")}
            />
            <Image
              style={styles.unionIcon6}
              resizeMode="cover"
              source={require("../assets/union1.png")}
            />
            <Image
              style={styles.groupIcon11}
              resizeMode="cover"
              source={require("../assets/group-602.png")}
            />
          </View>
          <View style={styles.groupView25}>
            <View style={styles.iconHomeView6}>
              <Image
                style={styles.groupIcon12}
                resizeMode="cover"
                source={require("../assets/group-515.png")}
              />
              <Image
                style={styles.unionIcon7}
                resizeMode="cover"
                source={require("../assets/union.png")}
              />
              <Image
                style={styles.unionIcon8}
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
              <Text style={styles.mobiText6}>
                <Text style={styles.text33}>ยกเลิก</Text>
                <Text style={styles.text34}>แพ็กเกจ</Text>
                <Text style={styles.text35}>เสริม</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.groupView27}>
          <View style={styles.iconHomeView7}>
            <Image
              style={styles.groupIcon13}
              resizeMode="cover"
              source={require("../assets/group-515.png")}
            />
            <Image
              style={styles.groupIcon14}
              resizeMode="cover"
              source={require("../assets/group-610.png")}
            />
            <Text style={styles.mobiText7}>เติมเงิน</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupView30}>
        <View style={styles.groupView29}>
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
                    <Text style={styles.text36}>หน้าแรก</Text>
                  </View>
                  <Text style={styles.text37}></Text>
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
                    <Text style={styles.text38}>รายงาน</Text>
                  </View>
                  <Text style={styles.text39}></Text>
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
                    <Text style={styles.text40}>ซื้อสินค้า</Text>
                  </View>
                  <Text style={styles.text41}></Text>
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
                    <Text style={styles.text42}>ข่าวสาร</Text>
                  </View>
                  <Text style={styles.text43}></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgTrueplusHomeIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 430,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#fff",
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
  lineView: {
    position: "absolute",
    top: 10.5,
    left: 159.5,
    borderStyle: "solid",
    borderColor: "rgba(74, 74, 74, 0.3)",
    borderRightWidth: 1,
    width: 1,
    height: 69,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.8)",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 17,
    left: 0,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#e44160",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 45,
    left: 0,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.6)",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 45,
    left: 161,
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.6)",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 287,
    height: 60,
  },
  text4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.8)",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    top: 17,
    left: 0,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#e44160",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 15,
    left: 175,
    width: 83,
    height: 47,
  },
  groupView2: {
    position: "absolute",
    top: 128,
    left: 20,
    width: 320,
    height: 90,
  },
  rectangleView1: {
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
  groupView3: {
    position: "absolute",
    top: 90,
    left: 80,
    width: 124,
    height: 18,
  },
  mobileMagic: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  tescoLotusRama4: {
    margin: 0,
  },
  mobileMagicTesco1: {
    position: "absolute",
    top: 48,
    left: 80,
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "Kanit",
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "left",
    width: 174,
    height: 32,
  },
  groupIcon: {
    position: "absolute",
    top: 44,
    left: 0,
    width: 116.23,
    height: 50,
  },
  ellipseIcon: {
    position: "absolute",
    top: 7,
    left: 0,
    width: 30,
    height: 30,
  },
  text6: {
    position: "absolute",
    top: 16,
    left: 8,
    fontSize: 15,
    lineHeight: 12,
    fontFamily: "Font Awesome 5 Free",
    color: "#fff",
    textAlign: "center",
    width: 14,
    height: 12.49,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    backgroundColor: "#fab517",
    width: 30,
    height: 16,
  },
  text7: {
    position: "absolute",
    top: 3,
    left: 4,
    fontSize: 13,
    lineHeight: 10,
    fontFamily: "Kanit",
    color: "#fff",
    textAlign: "center",
  },
  notiView: {
    position: "absolute",
    top: 0,
    left: 10,
    width: 30,
    height: 16,
  },
  groupView4: {
    position: "absolute",
    top: 37,
    left: 310,
    width: 40,
    height: 37,
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
  text8: {
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
  groupView5: {
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
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 50,
    backgroundColor: "#fff",
    width: 264,
    height: 100,
  },
  rectangleView4: {
    position: "absolute",
    top: 50,
    left: 0,
    backgroundColor: "#fff",
    width: 360,
    height: 1131,
  },
  groupIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 320,
    height: 381,
  },
  maskGroupIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120,
    height: 90,
  },
  text9: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  wIFIText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text10: {
    margin: 0,
  },
  wIFITxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  wIFIText1: {
    position: "absolute",
    top: 15,
    left: 130,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.8)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 150,
  },
  groupView6: {
    position: "absolute",
    top: 51,
    left: 0,
    width: 280,
    height: 90,
  },
  maskGroupIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120,
    height: 90,
  },
  text11: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text12: {
    margin: 0,
  },
  txtText: {
    lineBreak: "anywhere",
    width: "100%",
  },
  text13: {
    position: "absolute",
    top: 0,
    left: 130,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.8)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 150,
  },
  groupView7: {
    position: "absolute",
    top: 151,
    left: 0,
    width: 280,
    height: 90,
  },
  maskGroupIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120,
    height: 90,
  },
  text14: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text15: {
    margin: 0,
  },
  txtText1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  text16: {
    position: "absolute",
    top: 0,
    left: 130,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.8)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 150,
  },
  groupView8: {
    position: "absolute",
    top: 251,
    left: 0,
    width: 280,
    height: 90,
  },
  rectangleCopy2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 90,
    height: 32,
  },
  primaryText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupView9: {
    position: "absolute",
    top: 6,
    left: 19,
    width: 52,
    height: 21,
  },
  groupView10: {
    position: "absolute",
    top: 0,
    left: 190,
    width: 90,
    height: 32,
  },
  text17: {
    position: "absolute",
    top: 0,
    left: 28,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  text18: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupView11: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 84,
    height: 27,
  },
  groupView12: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 280,
    height: 341,
  },
  groupView13: {
    position: "absolute",
    top: 348,
    left: 20,
    width: 320,
    height: 381,
  },
  text19: {
    position: "absolute",
    marginTop: -718.5,
    top: "50%",
    left: "40.42%",
    fontSize: 13,
    fontFamily: "Thonburi",
    color: "#4a4a4a",
    textAlign: "center",
    display: "none",
  },
  rectangleCopy21: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fbfbfb",
    width: 320,
    height: 32,
  },
  primaryText1: {
    position: "absolute",
    top: 0,
    left: 18,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  text20: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: 13,
    fontFamily: "Font Awesome 5 Free",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupView14: {
    position: "absolute",
    top: 6,
    left: 114,
    width: 92,
    height: 21,
  },
  viewAllMenu: {
    position: "absolute",
    top: 296,
    left: 20,
    width: 320,
    height: 32,
  },
  groupIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 320,
    height: 412,
  },
  image4Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    width: 280,
    height: 210,
  },
  groupView15: {
    position: "absolute",
    top: 72,
    left: 20,
    width: 280,
    height: 210,
  },
  text21: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text22: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text23: {
    margin: 0,
  },
  text24: {
    position: "absolute",
    top: 292,
    left: 21,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "rgba(74, 74, 74, 0.8)",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 279,
  },
  rectangleCopy22: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 90,
    height: 32,
  },
  primaryText2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupView16: {
    position: "absolute",
    top: 6,
    left: 19,
    width: 52,
    height: 21,
  },
  groupView17: {
    position: "absolute",
    top: 20,
    left: 210,
    width: 90,
    height: 32,
  },
  text25: {
    position: "absolute",
    top: 0,
    left: 27,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Kanit",
    color: "#4a4a4a",
    textAlign: "left",
  },
  text26: {
    position: "absolute",
    top: 3,
    left: 0,
    fontSize: 20,
    fontFamily: "Font Awesome 5 Free",
    color: "#4a4a4a",
    textAlign: "center",
  },
  groupView18: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 95,
    height: 27,
  },
  groupView19: {
    position: "absolute",
    top: 749,
    left: 20,
    width: 320,
    height: 412,
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
  unionIcon: {
    position: "relative",
    width: 28,
    height: 40.11,
  },
  unionIcon1: {
    position: "relative",
    width: 16.08,
    height: 16.08,
  },
  unionIcon2: {
    position: "relative",
    width: 9.75,
    height: 9.51,
  },
  text27: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text28: {
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
  iconHomeView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView20: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView21: {
    position: "absolute",
    top: 20,
    left: 102,
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
    top: 158,
    left: 20,
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
    top: 158,
    left: 107,
    width: 70,
    height: 118,
  },
  groupIcon7: {
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
  unionIcon3: {
    position: "relative",
    width: 28,
    height: 40.11,
  },
  icon: {
    position: "absolute",
    top: 13,
    left: 29,
    width: 13,
    height: 13.57,
  },
  unionIcon4: {
    position: "relative",
    width: 16.08,
    height: 16.08,
  },
  text29: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text30: {
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
  groupView22: {
    position: "absolute",
    top: 158,
    left: 189,
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
  text31: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text32: {
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
  groupIcon9: {
    position: "absolute",
    top: 12,
    left: 15,
    width: 39.48,
    height: 38,
  },
  iconHomeView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 70,
    height: 118,
  },
  groupView23: {
    position: "absolute",
    top: 158,
    left: 271,
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
  iconHomeView5: {
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
  groupIcon11: {
    position: "absolute",
    top: 16.57,
    left: 30,
    width: 10,
    height: 7.44,
  },
  groupView24: {
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
  unionIcon7: {
    position: "relative",
    width: 10.05,
    height: 10.05,
  },
  unionIcon8: {
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
  text33: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text34: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text35: {
    margin: 0,
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
  groupView25: {
    position: "absolute",
    top: 0,
    left: 87,
    width: 70,
    height: 118,
  },
  groupView26: {
    position: "absolute",
    top: 20,
    left: 189,
    width: 157,
    height: 118,
  },
  groupIcon13: {
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
  groupIcon14: {
    position: "absolute",
    top: 12,
    left: 17,
    width: 36,
    height: 30.93,
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
  groupView27: {
    position: "absolute",
    top: 20,
    left: 15,
    width: 70,
    height: 118,
  },
  groupView28: {
    position: "absolute",
    top: 238,
    left: 0,
    width: 360,
    height: 1181,
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
  text36: {
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
  text37: {
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
  text38: {
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
  text39: {
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
  text40: {
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
  text41: {
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
  text42: {
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
  text43: {
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
  groupView29: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    height: 42,
  },
  groupView30: {
    position: "absolute",
    top: 598,
    left: 0,
    width: 360,
    height: 42,
  },
  tCCHomeInitialView: {
    position: "relative",
    backgroundColor: "#f5f5f5",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TCCHomeInitial;
