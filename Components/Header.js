import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  console.log("the")
  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.title}>Whatsapp </Text>
      </View>
    
     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FD267A",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  title: {

    fontSize: 25
  }

});
