import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Scrollable content */}
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Profile Info */}
          <View style={styles.profileSection}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: "",
                }}
                style={styles.profileImage}
              />
              <TouchableOpacity style={styles.editButton}>
                <MaterialIcons name="edit" size={16} color="#fff" />
              </TouchableOpacity>
            </View>

            <Text style={styles.name}>Sachin Kumar</Text>
            <Text style={styles.email}>abc@gmail.com</Text>
          </View>

          {/* Account Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            {[
              { icon: "person", label: "Personal Information" },
              { icon: "receipt-long", label: "Order Tracking" },
              { icon: "credit-card", label: "Payment Methods" },
              { icon: "location-on", label: "Addresses" },
              { icon: "notifications", label: "Notifications" },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.listItem}>
                <View style={styles.iconWrapper}>
                  <MaterialIcons name={item.icon} size={22} color="#38e07b" />
                </View>
                <Text style={styles.listLabel}>{item.label}</Text>
                <MaterialIcons name="chevron-right" size={22} color="#9ca3af" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Settings Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Settings</Text>
            {[
              { icon: "settings", label: "App Preferences" },
              { icon: "help", label: "Help & Support" },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.listItem}>
                <View style={styles.iconWrapper}>
                  <MaterialIcons name={item.icon} size={22} color="#38e07b" />
                </View>
                <Text style={styles.listLabel}>{item.label}</Text>
                <MaterialIcons name="chevron-right" size={22} color="#9ca3af" />
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.logoutItem}>
              <View
                style={[styles.iconWrapper, { backgroundColor: "#fee2e2" }]}
              >
                <MaterialIcons name="logout" size={22} color="#ef4444" />
              </View>
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    alignSelf: "center",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 24,
  },
  imageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 112,
    height: 112,
    backgroundColor: "#e5e7eb",
    borderRadius: 56,
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#38e07b",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginTop: 12,
  },
  email: {
    fontSize: 14,
    color: "#6b7280",
  },
  section: {
    marginBottom: 24,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 4,
  },
  iconWrapper: {
    backgroundColor: "#dcfce7",
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  listLabel: {
    flex: 1,
    fontSize: 15,
    color: "#111",
    fontWeight: "500",
  },
  logoutItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginTop: 4,
  },
  logoutText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#ef4444",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    backgroundColor: "#fff",
  },
  footerItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerLabel: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 2,
  },
});
