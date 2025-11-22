import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrderConfirmationScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios-new"
              size={22}
              color="#112117"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order Confirmation</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Main content */}
        <ScrollView contentContainerStyle={styles.content}>
          {/* Success Icon */}
          <View style={styles.successContainer}>
            <View style={styles.successIcon}>
              <MaterialIcons name="check-circle" size={48} color="#20df6c" />
            </View>
            <Text style={styles.successTitle}>Payment Successful!</Text>
            <Text style={styles.successMessage}>
              Your order has been placed and is being processed. You will
              receive a notification when it's on its way.
            </Text>
          </View>

          {/* Info Cards */}
          <View style={styles.cardList}>
            <View style={styles.infoCard}>
              <View style={styles.iconBox}>
                <MaterialIcons name="receipt-long" size={24} color="#20df6c" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Order Details</Text>
                <Text style={styles.cardSubtitle}>Order #1234567890</Text>
              </View>
            </View>

            <View style={styles.infoCard}>
              <View style={styles.iconBox}>
                <MaterialIcons
                  name="local-shipping"
                  size={24}
                  color="#20df6c"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Delivery Time</Text>
                <Text style={styles.cardSubtitle}>
                  Estimated Delivery: 10:00 AM - 11:00 AM
                </Text>
              </View>
            </View>

            <View style={styles.infoCard}>
              <View style={styles.iconBox}>
                <MaterialIcons name="location-on" size={24} color="#20df6c" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Delivery Address</Text>
                <Text style={styles.cardSubtitle}>
                  Main Road, Patna, Bihar, 800001
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.trackButton} onPress={() => navigation.navigate("TrackOrder")}>
            <Text style={styles.trackText}>Track Order</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#f6f8f7",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#112117",
    flex: 1,
    textAlign: "center",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  successContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  successIcon: {
    backgroundColor: "rgba(32, 223, 108, 0.2)",
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#112117",
    marginBottom: 8,
  },
  successMessage: {
    fontSize: 14,
    textAlign: "center",
    color: "rgba(17, 33, 23, 0.7)",
  },
  cardList: {
    gap: 12,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "rgba(32, 223, 108, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#112117",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "rgba(17, 33, 23, 0.7)",
  },
  footer: {
    backgroundColor: "#f6f8f7",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  trackButton: {
    backgroundColor: "#20df6c",
    borderRadius: 12,
    height: 48,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  trackText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#112117",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#d1d5db",
    paddingVertical: 10,
    marginTop: 8,
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});
