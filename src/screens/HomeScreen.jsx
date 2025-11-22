import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Groceries");
  const navigation = useNavigation();

  const categories = [
    "Groceries",
    "Services",
    "Deals",
    "Organic",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Health & Wellness",
    "Sports & Outdoors",
  ];

  const featuredProducts = [
    {
      title: "Fresh Vegetables",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfk96A6hVLqWMCWgdah_veRSKUCcCwJnIyKy8e4HGmyU5S0G5svtCHejAyuqnTUabbfDuFf_7Qaw_UPryIZiZgsijDWww4u6ucdTq9rPhuKNzKZvIhthKoNZu8omEdwO6jyaiFWhEw9K-GA_yr2Hn-3V1_khTOtjRQqxS7QUW3u_GiHVwAqW_FHqXyaln9OOFJzGbomDZkBeeYyiNN-nii2MfhATikJ_JrQ6yuR2Xq8713JoDO8EGuOYg-bjv3eCJ5_embYI1bocQ",
    },
    {
      title: "Organic Fruits",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrT0dPU1asoPJDFifP9mgIqZe7dFhl7BMNp9HrvAC2j0E2M7lK98XomDeLiRfS_OYtwHv0aUjwO9aWVf1_ShRJmfdBFJjGyy8r8tpwOn5Z-feOQX6pZbY5otBFz7wNvRXf0M6tyLgAwlmB9c4yG0RULgJ6pHITm85XEryogeH6QwVxEw3Yx7JR4BuaVG7Y9vNbrgbdsm_C_VJHt_yorb78H8jvuA63QWEVpAfRwhD1Ml4tkY_WMQBQ9hXnpcKnhOeNyCZl-r3CSmo",
    },
    {
      title: "Sustainable Cleaning",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQSwjx6rpFktKqtjVnfvjEg-R5xt-HiW-shKka5w6HHXm9rXyn3t661SmOlMcQiGBGzPg-o__apyCzKC1qOT-OJace2YDQAN_SsLgrjFD7i5JCQKV8-Bs2qfwHRp_IqKtrUZICJNs6oIuGBedilEYVrVC7yyR3hEAopc8lXAIf0hb1W4WrI4jd0tVnc9g6eDlRXQumykx3XbS9bnFeH7zoUmZA29n5EscKRl9dW5BBdOn4XYfgj6WbgH2Cf9bPRdFPDaxTLC52_Pc",
    },
    {
      title: "Eco-Friendly Home",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6OXat1X8-snSdft0Z7w3ccTLoem5f2OFZ9uMS7uc16B06Oty1eaDP5zpVdDXQX6jBmtGSaSJwWuPO336djpsqd97eYj8Il-n9rjXCoX920PJDOZHgXkv-s4jpr4ebIxUZn8CLIdDy222kUdrCSVe6nYPhsEeBvIgUoGEilmps46Jd2gAtR8JN43UtUHA74nzCeUemU_n6YVLlObAFSOpZBUc2JQ3IMgs4so4wVA0L8WFB-OrlfCmjLzBuRsh6PdHoc82i4YCoEpQ",
    },
  ];

  const categoryList = [
    {
      title: "Dairy & Eggs",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCibC0oxxZOPaxGu7W9uNo1jmpBbmt3YXTGmjJ6FTOKeX-iAZ81J623Nkxl5TQvL3JKrduC6WpZpAAJAzWtKTZFwmLbgnX-9CdlQtvoGZvQJjJw_kFYgLu38Uh1GWdugKCYxntftOD4FuKSne0Q2ppiRl7PLN-tDE5aqZEyPTUOkEOIyHgPBdoQpgnLxjmufOHfQW32RX6Rbt8LK6eHqXA5vdmr6jjcLB2lr1g4RccFgwVRUDkoeuLYLs3-bXGnvVDHwq_pa-6lfcY",
    },
    {
      title: "Meat & Seafood",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7ILkifQTev7u2-_DiHeVl0Weqf6XCDrdff2TKOWabVXkCrLaK-1q1xmo7CWnA53_C5Xb4peCSbBHAFIaNlT0s4qRotP9yBNvDwAeHpg0DJ_B-Q9eeZmzw4o0e0_k6J9x-7l0WupbIxwuonWIVg1gJ1cvzP0Mr7CQiWnbJcMb1-sFulFIONrh0WxJwDwpxz-SCN_MpP25sRKo3BbWgKxW5gzN8qTdk-wVlpgyHoL7Xq9Mk3-BTE6oJndYqL-0Qj-0Lj8okeFxttk",
    },
    {
      title: "Pantry Staples",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmsNNqcwfTbA4gwyYe8GOrNe3YUfqtXfbz2TgTwrgI_csarAY4nmekPT_WY4gaN-TYlaWyJieHx26g8-vwYker8GW5X56vdi8TI5pBnVi48UwlAhdNm_iKFw60c1dAtdHETIxxJ-kmJ5XG7m46FQsnH_Tg10iqOfDwmDPturm21KUWe4b5qI2mEtRAiiuEF_P3DyVVhn0KuAQVBFUz7WMY2jiUn0UJMgON3FOblqdYra0Ghsl2d5Qza692WEzoFzfEWxrIIkXLUuw",
    },
    {
      title: "Beverages",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADSOqsfokl6wpuoK0KwVonXGRi1pXjgoBbBFU6gLV5iOVaOXkvzpECBy85-W6yV7vHp4CDMslG6JktPU4mMJ4U8Jf8-pnb-zHXLlFDxhQaaQzxdwkCBjYO-crvdsjii1Ge-O7Tagzipwzr3SuI1oJsQMKDoGkfNX9x6IatBbE3_bFTTYEzMQJwLANBFrlGjqpl9FWRok7cEEqZbZsVYJO-uCrvPeGDciZzv4KCp4TNBIMEsRj_eo5oHK0JfXftdBOJ4Y_2-TbAS4g",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>Hello, Sachin</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Notification")}
          >
            <Ionicons name="notifications-outline" size={26} color="#122017" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Feather name="shopping-cart" size={26} color="#122017" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#555" />
          <TextInput
            placeholder="Search for products"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Category Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabContainer}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.tab, cat === selectedCategory && styles.activeTab]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.tabText,
                  cat === selectedCategory && styles.activeTabText,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Products */}
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredProducts.map((item, i) => (
            <View style={styles.productCard} key={i}>
              <ImageBackground
                source={{ uri: item.img }}
                style={styles.productImage}
                imageStyle={{ borderRadius: 16 }}
              />
              <Text style={styles.productTitle}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.grid}>
          {categoryList.map((item, i) => (
            <View style={styles.categoryCard} key={i}>
              <ImageBackground
                source={{ uri: item.img }}
                style={styles.categoryImage}
                imageStyle={{ borderRadius: 16 }}
              />
              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Offer Section */}
        <View style={styles.offerCard}>
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDLFm9Cdg5bjLbz3PrKnuc46a2iYBGi6mp4fARc6djsDJOAM2j-cn0nVk3ofHSIk30m97jTEEbBPtDZhabI6Y2JIHO1QI_WIsuL-Amc0E4KYGUF_5pT-jrEoI7RJz9KpIoAmvwAI67qLZTdXnDbUKK6PhI2bgDpA1oHU2KUg02kWQC9gZUqF5VPOM0EqcgK15MunQbfo2AZxcJ4ih6dnb2a9hRIUq39hN1u4jBo0KH-UtdqnJbEx77LE8L6QlsObeLh_m740aJkT4",
            }}
            style={styles.offerImage}
            imageStyle={{ borderRadius: 16 }}
          />
          <View style={styles.offerTextBox}>
            <Text style={styles.offerTitle}>Save 20% on Organic Produce</Text>
            <Text style={styles.offerDesc}>
              Shop now and enjoy fresh, organic fruits and vegetables at a
              discounted price.
            </Text>
            <Text style={styles.offerNote}>Limited Time Offer</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f8f7" },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "700", color: "#122017" },
  headerIcons: { flexDirection: "row", gap: 10 },
  iconButton: { position: "relative" },
  badge: {
    position: "absolute",
    right: -4,
    top: -4,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "700" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: { flex: 1, marginLeft: 8 },
  tabContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  tab: {
    backgroundColor: "#eaeaea",
    borderRadius: 20,
    marginRight: 10,
    overflow: "visible",
  },
  activeTab: { backgroundColor: "#2ECC71" },
  tabText: {
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: "#122017",
    fontWeight: "500",
  },
  activeTabText: { color: "#fff", fontWeight: "700" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  productCard: { width: 140, marginLeft: 16 },
  productImage: { width: 140, height: 140 },
  productTitle: { marginTop: 8, fontWeight: "500", color: "#122017" },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  categoryCard: { width: "48%", marginBottom: 16 },
  categoryImage: { width: "100%", height: 140 },
  categoryText: { marginTop: 8, fontWeight: "500", color: "#122017" },
  offerCard: {
    backgroundColor: "#d0f5df",
    borderRadius: 16,
    margin: 16,
    overflow: "hidden",
  },
  offerImage: { width: "100%", height: 160 },
  offerTextBox: { padding: 12 },
  offerTitle: { fontSize: 16, fontWeight: "700", color: "#122017" },
  offerDesc: { color: "#333", marginTop: 4 },
  offerNote: { fontSize: 12, color: "#666", marginTop: 4 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#f6f8f7",
    paddingVertical: 8,
  },
  footerItem: { alignItems: "center" },
  footerText: { fontSize: 12, color: "#555" },
  footerTextActive: { fontSize: 12, fontWeight: "700", color: "#2ECC71" },
});
