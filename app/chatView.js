import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image , ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Chat from "./Components/Chatbox";

export default function ChatView () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.section1}>
          <Text style={styles.title}>WhatsApp</Text>
          <View style={styles.header_icons}>
            <Ionicons name="camera-outline" size={24} color="black" />
            <Ionicons name="search" size={24} color="black" />
          </View>
        </View>
        <View style={styles.section2}>
          <FontAwesome name="users" size={24} color="black" />
          <Text style={styles.headerText}>Chat</Text>
          <Text style={styles.headerText}>Update</Text>
          <Text style={styles.headerText}>Status</Text>
        </View>
        
      </View>
      <ScrollView>
           <Chat/>
           <Chat/>
           <Chat/>
           <Chat/>
          
        </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    backgroundColor: "#365E57",
    paddingBottom: 5,
  },

  section1: {
    paddingTop: 30,
    // paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
  },
  section2: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
  },

  header_icons: {
    flexDirection: "row",
    gap: 6,
    position: "absolute",
    right: 4,
    bottom: 0,
  },
  section: {
    flexDirection: "row",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 25,
    color: "white",
  },
  headerText: {
    fontSize: 15,
  },
});
