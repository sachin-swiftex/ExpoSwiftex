import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentScreen() {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState("Credit Card");

  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "UPI",
    "Cash on Delivery",
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios-new" size={22} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Scrollable content */}
        <ScrollView contentContainerStyle={styles.content}>
          {/* Payment Method Section */}
          <View>
            <Text style={styles.sectionTitle}>Payment Method</Text>
            {paymentMethods.map((method, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.paymentOption,
                  selectedMethod === method && styles.paymentOptionSelected,
                ]}
                onPress={() => setSelectedMethod(method)}
              >
                <Text style={styles.paymentText}>{method}</Text>
                <View
                  style={[
                    styles.radioOuter,
                    selectedMethod === method && styles.radioOuterSelected,
                  ]}
                >
                  {selectedMethod === method && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Order Summary Section */}
          <View style={{ marginTop: 24 }}>
            <Text style={styles.sectionTitle}>Order Summary</Text>
            <View style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>Rs.45.00</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Delivery Fee</Text>
                <Text style={styles.summaryValue}>Rs.5.00</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryTotal}>Total</Text>
                <Text style={styles.summaryTotal}>Rs.500.00</Text>
              </View>
            </View>
          </View>

          {/* Confirm Button */}
          <View style={{ marginTop: 32 }}>
            <TouchableOpacity style={styles.confirmButton} onPress={()=>{
                navigation.navigate("OrderConfirmation")
            }}>
              <Text style={styles.confirmText}>Confirm Payment</Text>
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
    backgroundColor: "#f6f8f7",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  backButton: {
    padding: 8,
    borderRadius: 100,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111",
  },
  paymentOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 8,
  },
  paymentOptionSelected: {
    borderColor: "#38e07b",
    shadowColor: "#38e07b",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
  },
  paymentText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111",
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#9ca3af",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterSelected: {
    borderColor: "#38e07b",
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#38e07b",
  },
  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  summaryLabel: {
    color: "#6b7280",
    fontSize: 14,
  },
  summaryValue: {
    fontWeight: "500",
    color: "#111",
    fontSize: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 8,
  },
  summaryTotal: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  confirmButton: {
    backgroundColor: "#38e07b",
    borderRadius: 12,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    backgroundColor: "#fff",
    paddingTop: 6,
    paddingBottom: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});
