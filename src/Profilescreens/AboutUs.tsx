import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import Colors from "../Compenents/Colors/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as OpenAnything from "react-native-openanything";

const About = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.Container1}>
        <Text style={styles.CompanyText}>Halal {"\n"}Cruises</Text>
        <Text style={styles.CompanyDesc}>
          This app is the creation of Cocktail Intl, a trusted
          technology provider.
        </Text>
      </View>
      <View style={styles.Container2}>
        <TouchableOpacity onPress={() => OpenAnything.Call("+1 647 632 9295")}>
          <FontAwesome name="phone" size={44} color="#055068" />
        </TouchableOpacity>
        <Text style={styles.Descmain}>Phone</Text>
        <Text style={styles.CompanyDesc}>Connect by phone</Text>
      </View>
      <View style={styles.Container3}>
        <TouchableOpacity onPress={() => OpenAnything.Email("booking@halalcruises.ca")}>
          <MaterialIcons name="email" size={44} color="#055068" />
        </TouchableOpacity>
        <Text style={styles.Descmain}>Email</Text>
        <Text style={styles.CompanyDesc}>Send an email</Text>
      </View>
      <View style={styles.Container4}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.instagram.com/liber_edge/")
          }
        >
          <Entypo name="instagram" size={44} color="#055068" />
        </TouchableOpacity>
        <Text style={styles.Descmain}>Social account</Text>
        <Text style={styles.CompanyDesc}>Tap the icon to connect with me</Text>
      </View>
    </View>
    // <View style={styles.aboutContainer}>
    //   <Text style={styles.mainHeader}> Vinod bahadur thapa </Text>
    //   <Text style={styles.paraStyle}> I am a full stack developer 😀 </Text>

    //   <View>
    //     <Image
    //       style={styles.imgStyle}
    //       source={{
    //         uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //       }}
    //     />
    //   </View>

    //   <View style={styles.aboutLayout}>
    //     <Text style={styles.aboutSubHeader}> About me </Text>
    //     <Text style={[styles.paraStyle, styles.aboutPara]}>
    //       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
    //       commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
    //       adipiscing elit. Aenean commodo ligula eget dolor.
    //     </Text>
    //   </View>

    //   <Text style={styles.mainHeader}> Follow me on Social Network </Text>

    //   <View style={styles.menuContainer}>
    //     <TouchableOpacity
    //       style={styles.buttonStyle}
    //       onPress={() =>
    //         Linking.openURL("https://www.instagram.com/thapatechnical/")
    //       }
    //     >
    //       <Image
    //         style={styles.iconStyle}
    //         source={{
    //           uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    //         }}
    //       />
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       style={styles.buttonStyle}
    //       onPress={() =>
    //         Linking.openURL(
    //           "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
    //         )
    //       }
    //     >
    //       <Image
    //         style={styles.iconStyle}
    //         source={{
    //           uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
    //         }}
    //       />
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       style={styles.buttonStyle}
    //       onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}
    //     >
    //       <Image
    //         style={styles.iconStyle}
    //         source={{
    //           uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
    //         }}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    display: "flex",
    gap: 15,
    marginBottom: 15,
  },
  Container1: {
    flex: 0.3,
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Container2: {
    flex: 0.23,
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    marginHorizontal: 15,
    padding: 20,
    display: "flex",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Container3: {
    flex: 0.23,
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    marginHorizontal: 15,
    padding: 20,
    display: "flex",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Container4: {
    flex: 0.23,
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    marginHorizontal: 15,
    padding: 20,
    display: "flex",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  CompanyText: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.UniLInkPrimary,
    marginBottom: 20,
  },
  CompanyDesc: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.DefaultFontColor,
  },
  Descmain: {
    fontSize: 19,
    fontWeight: "600",
    color: Colors.Black,
  },
  //   aboutContainer: {
  //     display: "flex",
  //     alignItems: "center",
  //   },
  //   imgStyle: {
  //     width: 150,
  //     height: 150,
  //     borderRadius: 100,
  //   },
  //   mainHeader: {
  //     fontSize: 18,
  //     color: "#344055",
  //     textTransform: "uppercase",
  //     fontWeight: "500",
  //     marginTop: 50,
  //     marginBottom: 10,
  //     fontFamily: "JosefinSans_700Bold",
  //   },
  //   paraStyle: {
  //     fontSize: 18,
  //     color: "#7d7d7d",
  //     paddingBottom: 30,
  //   },
  //   aboutLayout: {
  //     backgroundColor: "#4c5dab",
  //     paddingHorizontal: 30,
  //     marginVertical: 30,
  //   },
  //   aboutSubHeader: {
  //     fontSize: 18,
  //     color: "#fff",
  //     textTransform: "uppercase",
  //     fontWeight: "500",
  //     marginVertical: 15,
  //     fontFamily: "JosefinSans_700Bold",
  //     alignSelf: "center",
  //   },
  //   aboutPara: {
  //     color: "#fff",
  //   },
  //   menuContainer: {
  //     width: "100%",
  //     flexDirection: "row",
  //     justifyContent: "space-evenly",
  //   },
  //   iconStyle: {
  //     width: "100%",
  //     height: 50,
  //     aspectRatio: 1,
  //   },
});

export default About;
