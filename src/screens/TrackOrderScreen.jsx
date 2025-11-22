// TrackOrderScreen.js
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Animated,
  Alert,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const STATUS_STEPS = [
  {
    key: "confirmed",
    title: "Order Confirmed",
    subtitle: "Your order has been received.",
  },
  {
    key: "prepared",
    title: "Order Prepared",
    subtitle: "Your items are being packed.",
  },
  {
    key: "out_for_delivery",
    title: "Out for Delivery",
    subtitle: "Your order is on its way!",
  },
  { key: "delivered", title: "Delivered", subtitle: "Enjoy your groceries!" },
];

export default function TrackOrderScreen() {
  const navigation = useNavigation();
  const [isMuted, setIsMuted] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0); // index in STATUS_STEPS
  const [isCancelled, setIsCancelled] = useState(false);
  const spinnerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isCancelled) return;

    // Auto-advance until delivered
    let interval = null;
    if (statusIndex < STATUS_STEPS.length - 1) {
      interval = setInterval(() => {
        setStatusIndex((prev) => {
          if (prev >= STATUS_STEPS.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 6000); // advance every 6 seconds (simulated)
    }
    return () => clearInterval(interval);
  }, [statusIndex, isCancelled]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinnerAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      })
    ).start();
  }, [spinnerAnim]);

  const spinnerRotate = spinnerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  function handleCancelOrder() {
    // simple confirm
    Alert.alert(
      "Cancel Order",
      "Are you sure you want to cancel this order?",
      [
        { text: "No", style: "cancel" },
        {
          text: "Yes, Cancel",
          style: "destructive",
          onPress: () => {
            setIsCancelled(true);
            setStatusIndex(0);
            Alert.alert("Order Cancelled", "Your order has been cancelled.");
          },
        },
      ],
      { cancelable: true }
    );
  }

  function handleContactDriver() {
    // simulate contacting driver
    Alert.alert("Contact Driver", "Calling driver...", [
      { text: "OK", onPress: () => console.log("simulate call") },
    ]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Feather name="arrow-left" size={22} color="#111714" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Track Order</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* ETA / Order ID Row */}
          <View style={styles.infoRow}>
            <View>
              <Text style={styles.infoSubtitle}>Estimated Delivery</Text>
              <Text style={styles.etaText}>10:30 - 10:45 AM</Text>
            </View>
            <View style={styles.orderIdBox}>
              <Text style={styles.infoSubtitle}>Order ID</Text>
              <Text style={styles.orderIdText}>#123456</Text>
            </View>
          </View>

          {/* Notifications / Mute */}
          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.cardTitle}>Notifications</Text>
              <View style={styles.muteRow}>
                <Text style={styles.muteLabel}>Mute</Text>
                <Switch
                  value={isMuted}
                  onValueChange={setIsMuted}
                  trackColor={{ false: "#ddd", true: "rgba(56,224,123,0.25)" }}
                  thumbColor={isMuted ? "#38e07b" : "#fff"}
                />
              </View>
            </View>
          </View>

          {/* Order Status Timeline */}
          <View style={[styles.card, { paddingBottom: 24 }]}>
            <Text style={[styles.cardTitle, { marginBottom: 12 }]}>
              Order Status
            </Text>

            <View style={styles.timelineContainer}>
              {STATUS_STEPS.map((step, idx) => {
                const active = isCancelled ? false : idx <= statusIndex;
                const isCurrent = !isCancelled && idx === statusIndex;
                // Node content
                return (
                  <View key={step.key} style={styles.timelineItem}>
                    <View style={styles.timelineMarkerWrap}>
                      <View
                        style={[
                          styles.markerOuter,
                          active
                            ? styles.markerOuterActive
                            : styles.markerOuterInactive,
                          isCurrent && styles.markerOuterCurrent,
                        ]}
                      >
                        {/* special spinner for out_for_delivery */}
                        {step.key === "out_for_delivery" && isCurrent ? (
                          <Animated.View
                            style={{ transform: [{ rotate: spinnerRotate }] }}
                          >
                            <Feather name="refresh-cw" size={14} color="#fff" />
                          </Animated.View>
                        ) : (
                          <Feather
                            name={active ? "check" : "circle"}
                            size={12}
                            color={active ? "#fff" : "#9aa6a0"}
                          />
                        )}
                      </View>
                    </View>

                    <View style={styles.timelineContent}>
                      <Text
                        style={[
                          styles.stepTitle,
                          active ? styles.stepTitleActive : null,
                        ]}
                      >
                        {step.title}
                      </Text>
                      <Text style={styles.stepSubtitle}>{step.subtitle}</Text>
                    </View>
                  </View>
                );
              })}
            </View>

            {isCancelled && (
              <View style={styles.cancelNotice}>
                <Text style={styles.cancelText}>This order was cancelled.</Text>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Footer with action buttons */}
        <View style={styles.footer}>
          <View style={styles.footerButtons}>
            <TouchableOpacity
              style={[styles.ghostBtn, isCancelled ? { opacity: 0.5 } : null]}
              onPress={handleCancelOrder}
              disabled={isCancelled}
            >
              <Text style={styles.ghostBtnText}>Cancel Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={handleContactDriver}
            >
              <Text style={styles.primaryBtnText}>Contact Driver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#f6f8f7",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111714",
  },

  scrollContent: {
    paddingBottom: 24,
  },

  map: {
    height: 220,
    margin: 12,
    borderRadius: 14,
    overflow: "hidden",
  },
  mapImage: {
    resizeMode: "cover",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  infoSubtitle: {
    color: "#648772",
    fontSize: 13,
  },
  etaText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#38e07b",
    marginTop: 2,
  },
  orderIdBox: {
    alignItems: "flex-end",
  },
  orderIdText: {
    fontWeight: "600",
    color: "#111714",
    marginTop: 2,
  },

  card: {
    marginHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e1e7e3",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111714",
  },

  muteRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  muteLabel: {
    marginRight: 8,
    color: "#648772",
    fontSize: 13,
    fontWeight: "600",
  },

  /* Timeline */
  timelineContainer: {
    paddingVertical: 6,
    paddingLeft: 12,
    position: "relative",
  },
  timelineLine: {
    position: "absolute",
    left: 27,
    top: 12,
    alignSelf: "center",
    bottom: 0,
    width: 2,
    backgroundColor: "#e1e7e3",
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 18,
    alignItems: "flex-start",
  },
  timelineMarkerWrap: {
    width: 54,
    alignItems: "center",
  },
  markerOuter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  markerOuterActive: {
    backgroundColor: "#38e07b",
  },
  markerOuterInactive: {
    borderWidth: 2,
    borderColor: "#cfd8d3",
    backgroundColor: "#fff",
  },
  markerOuterCurrent: {
    shadowColor: "#38e07b",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },

  timelineContent: {
    flex: 1,
    paddingRight: 8,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#6b7280",
  },
  stepTitleActive: {
    color: "#111714",
  },
  stepSubtitle: {
    fontSize: 13,
    color: "#648772",
    marginTop: 2,
  },

  cancelNotice: {
    marginTop: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff0f0",
    borderWidth: 1,
    borderColor: "#fca5a5",
  },
  cancelText: {
    color: "#ef4444",
    fontWeight: "700",
  },

  footer: {
    backgroundColor: "#f6f8f7",
    borderTopWidth: 1,
    borderTopColor: "#e1e7e3",
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 18,
  },
  footerButtons: {
    flexDirection: "row",
    gap: 10,
  },
  ghostBtn: {
    flex: 1,
    backgroundColor: "rgba(56,224,123,0.12)",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  ghostBtnText: {
    color: "#38e07b",
    fontWeight: "700",
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#38e07b",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    color: "#000",
    fontWeight: "700",
  },
});
