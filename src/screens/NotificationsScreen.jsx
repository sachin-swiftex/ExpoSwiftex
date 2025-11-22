// NotificationsScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample notification data
const NOTIFICATIONS = [
  {
    id: "1",
    title: "Order Delivered",
    description: "Your order #12345 has been delivered.",
    type: "order",
    day: "Today",
  },
  {
    id: "2",
    title: "Payment Successful",
    description: "Your payment of $50.00 was successful.",
    type: "payment",
    day: "Today",
  },
  {
    id: "3",
    title: "Order Shipped",
    description: "Your order #67890 is on its way.",
    type: "order",
    day: "Yesterday",
  },
  {
    id: "4",
    title: "New Arrivals",
    description: "New organic produce available in your area.",
    type: "info",
    day: "Yesterday",
  },
  {
    id: "5",
    title: "Order Prepared",
    description: "Your order #90123 is being prepared.",
    type: "order",
    day: "Today",
  },
  {
    id: "6",
    title: "Order Ready for Pickup",
    description: "Your order #45678 is ready for pickup.",
    type: "order",
    day: "Today",
  },
  {
    id: "7",
    title: "Promotion",
    description: "Get 10% off your next purchase.",
    type: "info",
    day: "Today",
  },
  {
    id: "8",
    title: "New Products",
    description: "New products available in your area.",
    type: "info",
    day: "Today",
  },
  {
    id: "9",
    title: "Order Delayed",
    description:
      "Your order #78901 has been delayed. We apologize for the inconvenience.",
    type: "order",
    day: "Yesterday",
  },
  {
    id: "10",
    title: "Refund Successful",
    description: "Your refund of $20.00 was successful.",
    type: "payment",
    day: "Yesterday",
  },
  {
    id: "11",
    title: "Order Cancelled",
    description: "Your order #12345 has been cancelled.",
    type: "order",
    day: "Yesterday",
  },
  {
    id: "12",
    title: "Order Delivered",
    description: "Your order #12345 has been delivered.",
    type: "order",
    day: "Today",
  },
];

export default function NotificationsScreen() {
  const navigation = useNavigation();
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <View style={styles.iconContainer}>
        {item.type === "order" && (
          <MaterialIcons name="local-shipping" size={28} color="#20df6c" />
        )}
        {item.type === "payment" && (
          <MaterialIcons name="payment" size={28} color="#20df6c" />
        )}
        {item.type === "info" && (
          <MaterialIcons name="new-releases" size={28} color="#20df6c" />
        )}
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.moreBtn}>
        <MaterialIcons name="more-horiz" size={20} color="#6b7280" />
      </TouchableOpacity>
    </View>
  );

  // Group notifications by day
  const groupedNotifications = NOTIFICATIONS.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {});

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#111714" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom:100 }}>
          {Object.keys(groupedNotifications).map((day) => (
            <View key={day} style={{ marginBottom: 24 }}>
              <Text style={styles.dayTitle}>{day}</Text>
              <FlatList
                data={groupedNotifications[day]}
                keyExtractor={(item) => item.id}
                renderItem={renderNotification}
                scrollEnabled={false}
                contentContainerStyle={{ paddingBottom: 12 }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8f7" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 0.5,
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#111714" },

  dayTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111714",
  },

  notificationCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#20df6c20",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  notificationContent: { flex: 1 },
  title: { fontWeight: "700", fontSize: 14, color: "#111714" },
  description: { fontSize: 12, color: "#6b7280", marginTop: 2 },
  moreBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
