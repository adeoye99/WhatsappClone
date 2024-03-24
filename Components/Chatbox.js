import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Chat() {
  return (
    <View style={styles.container}>
      {/* <Link href="/chatView"> */}
        <View style={styles.section1}>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat1.png",
            }}
            style={styles.chat_image}
          />
        </View>
        <View style={styles.section2}>
          <View style={styles.section2_content}>
            <Text style={styles.chat_title}>Kenneth</Text>
            <Text style={styles.chat_time}>1:18 PM</Text>
          </View>
          <View style={styles.section2_content1}>
            <Text style={styles.chat_text}>recent messages sent </Text>
          </View>
        </View>
      {/* </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    gap: 2,
    flexDirection: "row",
    borderColor: "red",
    backgroundColor: "#111C24",
    padding: 10,
  },
  header: {
    backgroundColor: "#111C24",
    paddingBottom: 5,
  },

  section1: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  section2: {
    flexDirection: "column",
    // justifyContent: "space-between",
    position: "relative",
    // backgroundColor: "red",
    width: "75%",
    padding: 10,
  },
  chat_title: {
    color: "#FFFFFF",
    fontSize: 18,
    // textAlign: "center", // Centering the text horizontally
  },
  chat_time: {
    color: "#FFFFFF",
    fontSize: 15,
    // textAlign: "right",
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },
  chat_image: {
    width: 100,
    height: 100,
    borderRadius: 100, // Half of the width and height
    overflow: "hidden",
    backgroundColor: "black",
  },
  section2_content: {
    width: "100%",
    // backgroundColor:"red"
  },
  section2_content1: {
    marginTop: 30,
  },
  chat_text: {
    color: "#FFFFFF",
  },
});
