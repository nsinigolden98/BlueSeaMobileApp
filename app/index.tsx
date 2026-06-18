import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>BS</Text>
      </View>

      <Text style={styles.title}>BlueSea Mobile</Text>

      <View style={styles.loader}>
        <ActivityIndicator size="small" color="#ffffff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>

      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#1E88E5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    color: "#1E88E5",
    fontSize: 48,
    fontWeight: "bold",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 40,
  },

  loader: {
    alignItems: "center",
  },

  loadingText: {
    color: "#A0A0A0",
    marginTop: 10,
  },

  version: {
    position: "absolute",
    bottom: 40,
    color: "#666666",
    fontSize: 12,
  },
});