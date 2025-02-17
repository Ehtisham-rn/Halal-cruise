import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Colors from '../Compenents/Colors/Colors';
import ProfileComponent from '../Compenents/Re-useable-Components/ProfileComponent';
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from '../../FirebaseConfig';
import LottieView from "lottie-react-native";
import animationData2 from "../Compenents/Assets/loading.json";
import { Calendar } from 'react-native-calendars';

const { width, height } = Dimensions.get("window");

export const TravelDatesScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null); // Store the selected date
  const [cruises, setCruises] = useState([]);
  const [loading, setLoading] = useState(false); // Manage loading state

 useEffect(() => {
  const fetchCruises = async () => {
    if (selectedDate) {
      setLoading(true);
      try {
        const cruisesRef = collection(FIREBASE_DB, "Cruise");

        // Format selected date to "2 January 2025" (matching the backend)
        const selectedFormattedDate = new Date(selectedDate).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        console.log("Formatted selected date:", selectedFormattedDate);

        // Fetch cruises where the Date matches the formatted date
        const q = query(cruisesRef, where("Date", "==", selectedFormattedDate));
        const querySnapshot = await getDocs(q);

        const cruisesData = [];
        querySnapshot.forEach((doc) => {
          cruisesData.push({ id: doc.id, ...doc.data() });
        });

        setCruises(cruisesData);
        console.log("Fetched cruises:", cruisesData);
      } catch (error) {
        console.error("Error fetching cruises:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (selectedDate) {
    fetchCruises();
  }
}, [selectedDate]);
 // Trigger effect when selectedDate changes

  const onDayPress = (day) => {
    setSelectedDate(day.dateString); // Store the selected date as a string in YYYY-MM-DD format
  };

  // If no date is selected, show a message prompting to select a date
  if (!selectedDate) {
    return (
      <View style={{ backgroundColor: Colors.White }}>
      <View style={styles.MainContainer_main}>
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
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Please select a date to view cruises</Text>
        <Calendar
          onDayPress={onDayPress} // Set selected date on day press
        />
      </View>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          style={styles.loadingAnimation}
          source={animationData2}
          autoPlay
          loop
        />
        <Text>Loading cruises...</Text>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: Colors.White }}>
      <View style={styles.MainContainer_main}>
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

        <View style={styles.ImportContainer3}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: Colors.UniLInkPrimary,
            }}
          >
            Available Cruises For {selectedDate}
          </Text>
        </View>

        <View style={styles.wrapperContainer}>
          
          {cruises.length === 0 ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text>No Cruises Available for this Date</Text>
            </View>
          ) : (
            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={false}
            >
              {cruises.map((cruise) => (
                <TouchableOpacity
                  key={cruise.id}
                  style={styles.mainContainer}
                  onPress={() =>
                    navigation.navigate("CruiseDetailScreen", { cruiseId: cruise.id })
                  }
                >
                  <View>
                    <Image
                      source={{ uri: cruise.Image }}
                      style={{ width: 58, height: 58, resizeMode: "cover", borderRadius: 10 }}
                    />
                  </View>
                  <View>
                    <Text style={styles.mainContainerText}>{cruise.Name}</Text>
                    <Text style={styles.secContainerText}>
                      Cruises at this Date: {cruise.Cruises_number}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer_main: {
    minHeight: height * 1.1,
    marginHorizontal: 20,
    backgroundColor: Colors.White,
  },
  ImportContainer3: {
    height: height * 0.03,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  Container1: {
    height: height * 0.18,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingAnimation: {
    width: 200,
    height: 200,
  },
  mainContainer: {
    width: "100%",
    height: 100,
    backgroundColor: Colors.HomeBox2,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 10,
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  mainContainerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  secContainerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  wrapperContainer: {
    backgroundColor: Colors.White,
  },
  scrollViewContent: {
    marginTop: 20,
  },
});
