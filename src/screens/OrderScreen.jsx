// OrdersScreen.js
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// Sample orders data
const ORDERS = [
  { id: "123456", date: "15 May 2025", total: 550, status: "Delivered" },
  { id: "789012", date: "20 Apr 2025", total: 320.5, status: "Delivered" },
  { id: "345678", date: "5 Apr 2025", total: 180.99, status: "Delivered" },
  { id: "901234", date: "1 Mar 2025", total: 720.2, status: "Delivered" },
  { id: "567890", date: "10 Feb 2025", total: 410.5, status: "Delivered" },
];

export default function OrdersScreen() {
  const navigation = useNavigation();
  const renderOrder = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.orderId}>Order #{item.id}</Text>
          <Text style={styles.orderDate}>Placed on {item.date}</Text>
        </View>
        <Text style={styles.orderStatus}>{item.status}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.orderTotal}>Rs.{item.total.toFixed(2)}</Text>
        <View style={styles.cardActions}>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reorderBtn}>
            <MaterialIcons name="replay" size={16} color="#fff" />
            <Text style={styles.reorderText}>Reorder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Orders</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Orders List */}
        <FlatList
          data={ORDERS}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F4F2" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
    color: "#111714",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 0.5,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between" },
  orderId: { fontSize: 14, fontWeight: "600", color: "#111714" },
  orderDate: { fontSize: 12, color: "#648772", marginTop: 2 },
  orderStatus: { fontSize: 14, fontWeight: "500", color: "#2ECC71" },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F4F2",
    paddingTop: 12,
  },
  orderTotal: { fontSize: 16, fontWeight: "700", color: "#111714" },
  cardActions: { flexDirection: "row", alignItems: "center", gap: 12 },
  viewDetails: { fontSize: 12, fontWeight: "600", color: "#2ECC71" },
  reorderBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#2ECC71",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24,
  },
  reorderText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E0E6E3",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 10, marginTop: 2, color: "#648772", fontWeight: "500" },
});
