import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          This is my first native app
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5, // Android shadow
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#6b7280",
  },
});
