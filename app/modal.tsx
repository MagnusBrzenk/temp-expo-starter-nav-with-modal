import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";

import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  const router = useRouter();

  const navigateToScreen = (screenPath: string) => {
    router.push(screenPath as any);
  };

  console.log("Modal opened");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu 6</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button
        title="Close Modal"
        onPress={() => {
          router.push("/");
          console.log("Modal closed");
        }}
      />

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToScreen("/(tabs)/one")}
      >
        <Text style={styles.menuText}>Option 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToScreen("/(tabs)/two")}
      >
        <Text style={styles.menuText}>Option 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigateToScreen("/profile")}
      >
        <Text style={styles.menuText}>Option 3</Text>
      </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
  menuItem: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: "70%",
    alignItems: "center",
  },
  menuText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
