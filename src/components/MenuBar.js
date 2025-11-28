import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useResponsiveStyles from "../hooks/useResponsiveStyles";
import { MaterialIcons } from "@expo/vector-icons";

const menuList = ["Player's Profile", "Game Instructions"];
export default function MenuBar({ open, onPress }) {
  const { isMobile, isTablet, isDesktop } = useResponsiveStyles();

  if (!open) return null;

  return (
    <View
      style={[
        isMobile && styles.container,
        isTablet && styles.containerTablet,
        isDesktop && styles.containerDesktop,
      ]}
    >
      <View style={styles.menubar}>
        {menuList.map((item, index) => (
          <TouchableOpacity key={index}  style={styles.menuItem} onPress={onPress}>
            <Text style={styles.text}>{item}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    zIndex: 1000,
  },

  containerTablet: {
    width: "100%",
    alignSelf: "center",
    zIndex: 1000,
  },
  containerDesktop: {
    width: "60%",
    alignSelf: "center",
    zIndex: 1000,
  },

  menubar: {
    width: "70%",
    marginTop: 5,
    backgroundColor: "#0a2a58",
    right: 20,
    zIndex: 1000,
    position: "absolute",
    elevation: 10,
  },

  text: {
    flex:1,
    color: "#fff",
    fontSize: 16,
    padding: 8,
  },

  menuItem: {
    padding: 4,
    flexDirection:"row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#fff",
    justifyContent: "space-between",
  },
});
