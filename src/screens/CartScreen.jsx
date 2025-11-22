// CartScreen.js
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const cartItems = [
  {
    id: 1,
    name: "Organic Apples",
    quantity: 1,
    price: 20,
    priceWithFixedValue: 291.85,
    size: "1kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3H4W01JuhkcmkNWTsfcFZ71koixgsUq7y02cmmb6hsAmyZNdplG_il3zLiI_WQh0-MJSSfg_L-F5lshyyI5P46xbkiHdAqvXqJVFvXAf05ByxMq1aLlrtIPl87lDJ0G76RLcTqyvO_1pHRZn8YQ0VaA3z32Kkg23PXd5i_9RtuQIOK-RZl5Br1CIY0kPlLcWIvw1Sm3Pm4Qv6iyeg60WquweDNe1TWm_DQV5_RMFWDVV80hI4CkOpCRnyKXd-0pSwTE7TMrBqjPc",
  },
  {
    id: 2,
    name: "Fresh Spinach",
    quantity: 1,
    price: 30,
    priceWithFixedValue: 184.35,
    size: "500g",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPWmK5QHlEJUAHA1yBNffPkVhsEP1qT42R-2gV9801pabVyMsXxJfTGKImt0AgeObv53SkgmYvDkFqRdjD-i7hvGTns09PfW0sdDeHb5RmfhXB7iS39lKhwBAWTVIQofun1uxCLXT5XdRvCl7eWxJ-iOcrY7ozvdM4q5ZkrE5IIfiA17KIVl7cZtAyr9HkLfkq2XQ75ktSx7kc7X3lzNFUapihi9glHOPbBsAvIVbDMamhYxbJkDVBzYdxMD7LSrsHDnPtH8vgpio",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    quantity: 1,
    price: 40,
    priceWithFixedValue: 206.85,
    size: "1 loaf",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqtsYfrjqelhd83z7Kiku6MFtG2HUlsoVev-XbSNd5dokp3s2sQGAOt1zhUmjV01TVQ4MCrmK4IEZYrjADfjhN7jOEBk8z3-KHUNIOqclqyRwb0hbwYifMtWM7av7xv8sPzsjn4lim3uToXtWAi4S9esDhcYYEs-xrlEcUJMRHjrb5ZYWXqHkaZIzNpeOnET6793-UgksptJVxvoI68n1kHocflwphXKXqrMgxdUhKyiqDYEjsJStdJ1wO7V8p LtH7YG7-Pm9TqjQ",
  },
  {
    id: 4,
    name: "Free-Range Eggs",
    quantity: 2,
    price: 50,
    priceWithFixedValue: 669.0,
    size: "1 dozen",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD4brj5CIfD_ObC_ZmuV_EjgyPyExjExB89QkqKmBoH3CdMD41RJZvSv2EuFXUOooQkE3Zswzs4LWoyLsj6RyIb5Kw4lhRlD7qGvNMOIse79rITHfMQ8IV9hDs8kTog6penT6Y1Ju_HedyVsUL22Z-NiyuI62UxedAY0zsiPOz7ufARy0BpZrK_GMGke333p_mu6G_HmDOOEroHRItCrMb0-BuytfqRFuLghwtvQX6gEkoSeWaENVD8urMjw2GPguqHAvSXEdEdaM",
  },
  {
    id: 5,
    name: "Almond Milk",
    quantity: 1,
    price: 60,
    priceWithFixedValue: 242.35,
    size: "1 liter",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4jUsJB7N20OretI-1aBd2NHXndMxMUFpaHOLEk_tT8x4quSsfn9KNVmgIAwCnnC265ZVm8xjpv2AjOmRh_ZGc30quUwWPhCVG2lJvTHTruQVBtKjCpimmKHlB0LqjhnWQ1B2HUcBkXTNVCIUbLhW_tPblQJqct0Yn77D7urR8uBXeM3PeJKcNf0n_Xfwns5IH4Mj8aoJP8YDV25Li2dcXPbx7W0-mLXi7vczAe9kWL3kFJTdPuzdH0IwFgDnrz8mkaBMTpmfhx5w",
  },
  {
    id: 6,
    name: "Organic Apples",
    quantity: 1,
    price: 40,
    priceWithFixedValue: 291.85,
    size: "1kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3H4W01JuhkcmkNWTsfcFZ71koixgsUq7y02cmmb6hsAmyZNdplG_il3zLiI_WQh0-MJSSfg_L-F5lshyyI5P46xbkiHdAqvXqJVFvXAf05ByxMq1aLlrtIPl87lDJ0G76RLcTqyvO_1pHRZn8YQ0VaA3z32Kkg23PXd5i_9RtuQIOK-RZl5Br1CIY0kPlLcWIvw1Sm3Pm4Qv6iyeg60WquweDNe1TWm_DQV5_RMFWDVV80hI4CkOpCRnyKXd-0pSwTE7TMrBqjPc",
  },
  {
    id: 7,
    name: "Fresh Spinach",
    quantity: 1,
    price: 50,
    priceWithFixedValue: 184.35,
    size: "500g",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPWmK5QHlEJUAHA1yBNffPkVhsEP1qT42R-2gV9801pabVyMsXxJfTGKImt0AgeObv53SkgmYvDkFqRdjD-i7hvGTns09PfW0sdDeHb5RmfhXB7iS39lKhwBAWTVIQofun1uxCLXT5XdRvCl7eWxJ-iOcrY7ozvdM4q5ZkrE5IIfiA17KIVl7cZtAyr9HkLfkq2XQ75ktSx7kc7X3lzNFUapihi9glHOPbBsAvIVbDMamhYxbJkDVBzYdxMD7LSrsHDnPtH8vgpio",
  },
];

export default function CartScreen() {
  const navigation = useNavigation();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <SafeAreaView style={{ flex: 1, height: "100vh" }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#111714" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cart</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView
          style={{ height: "100vh" }}
          contentContainerStyle={styles.scrollContent}
        >
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.info}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemSize}>{item.size}</Text>
                  <Text style={styles.itemPrice}>
                    Rs.{item.price.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    style={styles.minusBtn}
                    onPress={() => {
                      // Handle quantity decrease
                    }}
                  >
                    <Ionicons name="remove" size={18} color="#2ECC71" />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.plusBtn}
                    onPress={() => {
                      // Handle quantity increase
                    }}
                  >
                    <Ionicons name="add" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            scrollEnabled={false}
          />
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.subtleText}>Subtotal</Text>
              <Text style={styles.valueText}>Rs.{subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.subtleText}>Delivery Fee</Text>
              <Text style={styles.valueText}>Rs.{deliveryFee.toFixed(2)}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalPrice}>Rs.{total.toFixed(2)}</Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => {
                navigation.navigate("Payment");
              }}
            >
              <Text style={styles.checkoutText}>Checkout</Text>
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
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8e4",
    backgroundColor: "#f6f8f7",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
    color: "#111714",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e1e8e4",
    marginBottom: 12,
    padding: 12,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  itemName: {
    fontWeight: "700",
    color: "#111714",
    fontSize: 16,
  },
  itemSize: {
    color: "#648772",
    fontSize: 13,
  },
  itemPrice: {
    fontWeight: "700",
    color: "#111714",
    fontSize: 15,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  minusBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(46, 204, 113, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  plusBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#2ECC71",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    width: 24,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  summaryBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e1e8e4",
    padding: 16,
    marginTop: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  subtleText: {
    color: "#648772",
  },
  valueText: {
    color: "#111714",
    fontWeight: "600",
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: "#e1e8e4",
    marginVertical: 10,
  },
  totalText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111714",
  },
  totalPrice: {
    fontSize: 17,
    fontWeight: "700",
    color: "#2ECC71",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e1e8e4",
    backgroundColor: "#f6f8f7",
  },
  checkoutBtn: {
    backgroundColor: "#2ECC71",
    borderRadius: 8,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
