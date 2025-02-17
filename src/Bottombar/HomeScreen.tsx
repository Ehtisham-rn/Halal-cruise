import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../Compenents/Colors/Colors";
import { useFonts } from "expo-font";
import { Dimensions } from "react-native";
import ProfileComponent from "../Compenents/Re-useable-Components/ProfileComponent";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const [quoteData, setQuoteData] = useState([null]);
 
  useEffect(() => {
    fetchQuoteData();
  }, []);

  const fetchQuoteData = () => {
    setRefreshing(true);
    fetch(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    )
      .then((response) => response.json())
      .then((data) => setQuoteData(data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setRefreshing(false));
  };

  const [visible, setvisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const closeModal = () => {
    setvisible(false);
  };
  // useEffect(() => {
  //   setSelectedCourse("");
  //   setSelectedItem("");
  //   setvisible(false);
  // }, []);
  console.log(selectedCourse, "This is course value");
  console.log(visible, "This is visible value");

  const courses = [
    {
      name: "Destinations",
      image: require("../Compenents/Assets/destinations.png"),
    },
    {
      name: "Cruise Ships",
      image: require("../Compenents/Assets/ship.png"),
    },

    {
      name: "Travel Dates",
      image: require("../Compenents/Assets/article.png"),
    },
   

   

    // Add more courses as needed
  ];


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.HomeBox6,
        width: width * 0.86,
        height: 107,
        borderRadius: 10,
        // justifyContent: "space-between",
        padding: 15,
        margin: 7,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:20
      }}
      onPress={() => {
        setvisible(true);
        console.log("Visible state updated:", true);
        setSelectedCourse(item.name);

        if (item.name === "Destinations") {
          navigation.navigate("DestinationsScreen"); // Replace with your actual screen name
        } else if (item.name === "Cruise Ships") {
          navigation.navigate("CruiseShipsScreen"); // Replace with your actual screen name
        } else if (item.name === "Travel Dates") {
          navigation.navigate("TravelDatesScreen"); // Replace with your actual screen name
        }
      }}



    
    >
      <Image
        source={item.image}
        style={{ width: 38, height: 38, resizeMode: "contain" }}
      />
      <Text
        style={{
          fontSize: 21,
          fontWeight: "bold",
          color: Colors.Black,
        }}
        numberOfLines={3}
        ellipsizeMode="tail"
        adjustsFontSizeToFit
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const handleSearch = (text) => {
    
    setSearchText(text);

    const filtered = courses.filter((course) =>
      course.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredCourses(filtered);
  };

  const staticQuote = {
    quoteText: "The only way to do great work is to love what you do.",
    quoteAuthor: "Steve Jobs",
  };

  const onRefresh = () => {
    fetchQuoteData();
  };



  return (
    <View style={{ backgroundColor: Colors.White }}>
      <View style={styles.MainContainer}>
     
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.DarkGreenText]}
            />
          }
        >
          <View style={styles.Container1}>
            <ProfileComponent />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NotificationScreen");
              }}
            >
              <Image
                source={require("../Compenents/Assets/Frame.png")}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        

          <View style={styles.Container3}>
            {quoteData && quoteData.quoteText ? (
              <View
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    color: Colors.DarkGreenText,
                    fontWeight: "bold",
                  }}
                >
                  Quote of the Day
                </Text>
                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.DarkGreenText,
                      fontWeight: "bold",
                    }}
                    adjustsFontSizeToFit
                    numberOfLines={5}
                    ellipsizeMode="tail"
                  >
                    {quoteData.quoteText}
                  </Text>
                </View>
                <Text style={{ color: Colors.DarkGreenText }}>
                  "{quoteData.quoteAuthor}"
                </Text>
              </View>
            ) : (
              <View
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    color: Colors.DarkGreenText,
                    fontWeight: "bold",
                  }}
                >
                  Quote of the Day
                </Text>
                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.DarkGreenText,
                      fontWeight: "bold",
                    }}
                  >
                    {staticQuote.quoteText}
                  </Text>
                </View>
                <Text style={{ color: Colors.DarkGreenText }}>
                  - {staticQuote.quoteAuthor}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.ImportContainer3}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: Colors.UniLInkPrimary,
              }}
            >
              Services
            </Text>
            
          </View>
          <View style={styles.Importcontainer4}>
            <FlatList
              data={searchText ? filteredCourses : courses}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              numColumns={1}
              contentContainerStyle={{
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flexGrow: 1,

    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: Colors.White,
  },
  Importcontainer4: {
    height: height * 0.6,

    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  ImportContainer3: {
    height: height * 0.06,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 15,
  },
  Container1: {
    height: height * 0.18,

    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },

  Container3: {
    height: height * 0.2,

    backgroundColor: Colors.HomeBox6,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    // marginTop:25
  },
  container4: {
    height: height * 0.49,

    alignItems: "center",
    justifyContent: "center",
  },
  // InputField: {
  //   flex:1,
  //   borderWidth: 1,
  //   borderColor: Colors.InputFieldBorder,
  //   backgroundColor: Colors.InputFieldBackground,
  //   padding:10,
  //   paddingHorizontal: 40,
  //   borderRadius: 10,
  // },
  TextInputView: {
    flexDirection: "row", // Display children (TextInput and Image) in a row
    alignItems: "center", // Vertically center children
    borderWidth: 1,
    borderColor: Colors.InputFieldBorder,
    backgroundColor: Colors.InputFieldBackground,
    borderRadius: 10,
    padding: 10,
  },

  InputField: {
    flex: 1, // Takes up all available space
    color: Colors.Black,
    fontSize: 18,
    paddingLeft: 10, // Add padding on the left to make space for the image
  },

  SearchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10, // Add margin to separate the icon from the input text
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    backgroundColor: Colors.White,
    height: 340,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 20,
    padding: 20,
    position: "absolute",
    bottom: 0,
  },
  modelMainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
