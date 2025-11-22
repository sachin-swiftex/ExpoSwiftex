import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const productsData = {
  "Fresh Produce": [
    {
      id: "1",
      name: "Organic Apples",
      rating: 4.8,
      oldPrice: 3.49,
      price: 2.99,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA_v_0l3bZGf4_uGXpkjPmWZMI4NTGqaJNZtmyggFQ1O4-4j4qmmpFn25yz2QtZdYwdX0qu2kjJJ-w-pj-Qzs8t_N9ayJ_N3oUjFMOonI59b3KMKcQVCy6f7VaNvgacMIxAgMiGtRpNlsEBAYN_dadENWA09PIicxXBIdhASrUxjUBpPDyIvSw3Wuo7uuYA73afeAC-_w3emb4dmhDH4yx_Kp59a7Z8GS9ZAwUlhR6HEAD43mdxcHWEjwljqYshQkRpzmYGySSIIMk",
    },
    {
      id: "2",
      name: "Bananas",
      rating: 4.5,
      oldPrice: 1.99,
      price: 1.49,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXufLeFKj2SxI4H9nWPnJnXZ54bxKmGvFPZQqo-TCFe-hG1x1nAevHw-hkZu97tJyeB8EBjtxbBsAzKlMn4E7fBikKkMk7vGOm426mW4st6rgmBpHdarkLDFsMR0M35G4ClhXAbc2LRnv9Qbos_MB5S3I5G0SZFmEgzdUWVEseE-TV0x4W0a-6gectMLZZPDD-6dUg0A0azTJC_EVOnkfQ_wQWpGN8dVOrPJDbDMIQ2Rqe-yGR80jB-dsE7LdkkbZz0BwXRAw8q_Q",
    },
    {
      id: "3",
      name: "Strawberries",
      rating: 4.7,
      oldPrice: 4.99,
      price: 4.29,
      image:
        "https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSkCbedOzEGrghVhStLgid_a0LztXJ6SGffPEeGoloxys7shN8hh_VGf_FhjKQkNHwbDeqpq4IY6dCvmcxW2GWmxLC46QNzfVGNU27NKqYv4eOJViWp3a7hryb7t9JknS_xh06RJbj6nE-cKeJoYA3N2GQXp1NG1b88x1o__j4i3rUeO4mn44k2kXG-X5DY4HM43eNLjbkRa_cHEjtFaB0YjtKvqBZEYihDOs109139n-5FBwGB8nN1O_iFIXph8i73-1BzjaH3P66gxJzEvIiSUBDUBK5Yv_jjsUEt0a5cv4psNeonyJXLByVbyq2917Upau6-wuH9hy5jqE4rXkTKRBHmTmprIOiNupkIv7U0_qHo5SLVn64Y8C_moXidCnhEvElaDisEK8FfxkGZ4a9GTxLwLXpyQUOW7ZXRS1fo1WAyx9h0O3kLsUZMeCUEtIy2c7_oyLmj5MWqQLWjVo-wrVrJX5mKxqubyHFR_tyGnTX2gC3vjor3KYh4gka_2ChMBIrwa1S99zRER582QoMesx6-F_41D2b8frWn1gitDwTbVu2tvBUa0qdbi015zUjOf97Nk29T4stO6jJZkGvXYy77n7nojs2y92al8_FDvb9-FMURcNX5YZVaTZ2UUvCdQwZ2SUaZcLIfMDGn_4OLr8W_PUagEMUM69cA7Wie98xiU2uaLxe7FJHinoRytfFXIACxtWWSLeqUiWwyiOkCdZxiuah7xVKyBIZQKHFfcCP1VZF2Vdu6q0tV5-uvflnCd02ZWhUA6KtPiasCgAZJLffpQyD7CSsmT9bFCB6qIYossG-K6CmtnvJbgb70tYCE0SR4zYi6d3ZVQdaJpkBARmd6BnLyc-ZV4ELQd0Qve_-pPr4awcyVUMHiPa8VILAJpfq6IRxxlvnbiT0sFeTo8dcxlX_rmVvrjh09mRGK7UBQv5j4-g7xwlgM3b_3vPwrIm28IW5DwKasvNQMBlD1PhMarhXYXL5LqGU0XZhZVMdjcZY-hFiZL9WWOTawasHq9vaqJWeABGGub8BS2sF2Nt0mt45cjs7GqqZabzHb-mFvTqXZBD0OzFBX8OYESvjWjfSXlpiJo46qYNFMC6AEcOzTdBmWIbtZbXkSwowWYxlmGAkl--Q4nvx1MPmZ8ylylI-d2AGMZDSUZoll4ZFUCQinQCGz8m_V1QLujY17vijBOFjSmY_k=s1024-rj",
    },
    {
      id: "4",
      name: "Avocado",
      rating: 4.9,
      oldPrice: 2.49,
      price: 1.99,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAy6xJfAWgcSKfYaV4XVEm4fZXi1-cmttdIkO4gGBVXcDyPIv8kreMLSdkVNedjr3BGwSobHDBd-GGajsaPhLrRLEYIqouZAQVuHS8F63WWa3Q0qFAX80s0CrqJsky95EG6BSF2xha7TtSDEp__fRe0f8uB5CIZVaaP67uoQj9MsdYDe10qj_7_OVs8fWVOSM5z-l7YBFTbvryEjnP8PAtYyxctu8rmnWrGptLPm1NrTAe-_LCedrqHF-OdOM6XjoPJ4fEk6001qFg",
    },
  ],
  "Dairy & Eggs": [
    {
      id: "5",
      name: "Organic Milk",
      rating: 4.9,
      oldPrice: 5.0,
      price: 4.49,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfGO1nTF0RTBb3kQiJ_xNuXnceHxkBeZLmoHULb2o42ic9A-fWWl8W3SuxTuP4fZ6SZF7kT_EaWhGZXq5NuFpoMSojxeNOIZIjZqkc3s5dl9H7e7mj9_eRGym4fC-svtG8e4xhwZi0rtQ2JyFQycAoEVwB5SAhtwTYalnrVseR-_u3Hb7VSfXr6nuKWU_clHgklyRYT_WKZMeFDFihqNiGkCAvY0lL8-OUi1NAze1LvrZ-o8QQECAbWnDC-_jajzrM3S4WRuX3bHs",
    },
    {
      id: "6",
      name: "Free-Range Eggs",
      rating: 4.7,
      oldPrice: 3.99,
      price: 3.29,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCdmAZilKIhAg80vX8xi2pqGf4Q-dzSGGfBTAg-n2uYkzbS0FYF-xiS8vH3u1eoNLnXdsZbAiu5s7iG6pIkKll7qkSq_gEjoqBeA7MchtBbbRZjfsza4OE8Gc42RhZpKVdYdKsENRZmDnZsnnPh9ybeR7v16h_jr_nia8qic8z4-jJAfV9rH_PX6Fj3RcTlJ9kkaxJnpNDrjTFt0WerP4dfdS-Q0uvbiMJAr3ML4z4OtcSO3iH4ILzenPcHTDvScF8wwQHc3h7MsEE",
    },
  ],
  Bakery: [
    {
      id: "7",
      name: "Sourdough Bread",
      rating: 4.8,
      oldPrice: 5.99,
      price: 4.99,
      image:
        "https://lh3.googleusercontent.com/gg-dl/AJfQ9KR_Bwd9ABrP43_JtvGRzwysUoY9SLxszrWq7mRdi3Tg78JJDJYmjByCc_Eg4_8mblcY-bsR0bs6II56DnR7XZB6XZnn4rndMbGbMOzYj8bGRMbnwaXTMfw45w4uUFiEh5BwVIbf_ztR8hEylSLf3qHxULURvxnDBwmYWZZzv-ruwAja=s1024-rj",
    },
    {
      id: "8",
      name: "Croissants",
      rating: 4.7,
      oldPrice: 2.5,
      price: 1.99,
      image:
        "https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KQhbf8O830mI_gx56Q7ChRVBjidOtRw0rbrUVwky4XMgykyuvhQJIqpRonMYOCAX7hSGtU9brKonBL2otbZIf0XralNa4qYUb6unVx90lR3pI7WLjDoydwuh8_jyh72m478v04Cey8ryVgphuINJulXx40GoVl0haljo3Mv96FuDipgK26EO6FXygGNGHCC3AHtR_PKktcrgzTtu6FidcbOUzn_xIh2-eBqZQ9sVCijGPTyiKmwH_bOGne7auZ0JHAEricrWLLJph3jhY9yPCql_Xi45XCpT6OgIlfTdIPNyIBMxO1CAYqkcsTw5-ebZDARFVPlUwa0O4MfxNlxHTxzGAdSrckAS_7mEHok4USERNgQrQKKwmU5MD6Ih4YRFox1ETNCcvE7xnntoO-nfoUOiNyaTLsA3ydWpmw2gax-lzYPb-0iV1rANiYl1MVET1gNwdesJI5IY3ut_Cjoa5AAes2WM4lpruCIJezUSsuL_YuV8o8eyjn-w5SylXedD9DJxcXJ2E__vmzGcrKcCy6U0GpoTJZ24wKo17t25-RjcKY3-jui7G_n4LBwHUGE3c857aBaeP_paTIiFP1INS5RlZfxks0RgMs7OM6X5OD1NRPwEn6C2__dfi58YXbOrllj0rOFwvcejH-lDxKHso6TIat3tJ93k_GhoHUDk_YwbLSIRthJRlyfIVNnJwuvQj2se0w_gNmnFN4emcooSO1orMlChBsEkUo4SL4V1lKswNv7c_TwogM0Yj2qhMP_T4_Dx2VoO8G-I5I5zW7anrUzGq95uh4dLWqHAcjylgnx7-az4m2i80D6s3Bl-1XId5AetJBX8UAnOnPd9dloxcOBeOwfgDV0yQO7_DswiPZe6oO4NhAVsWWIFIYnNtggNMPPTPvFsbtlG6Wq5MdzyvEk8p8Zu822NSH9hyMhnbYN8ORaAbnNL_apAWPOXTUx-JgmW1pSjkfW2OmDFchn_z-3HZk6MGrY3cXTacE26VdAcONG17xGMSHwHS-hv8Wvie0nHNp5MRcQ3Mrc_0wFpx1Q0XS04lHeEPPY8PVKEweNsE-qPRXVYFnLf52G5Yc1f2lLjNb0WVYU9BjPI72isf6Kt1yCZHdXtmC3wAaqhAWaqojuLKNGu2LexcNGhUXgD-YiHsBHFKgrSK0meLYjzMWUjvmAkB0hCYI=s1024-rj",
    },
  ],
  Vegitables: [
    {
      id: "9",
      name: "Broccoli",
      rating: 4.9,
      oldPrice: 2.99,
      price: 1.99,
      image:
        "https://lh3.googleusercontent.com/gg-dl/AJfQ9KR_Bwd9ABrP43_JtvGRzwysUoY9SLxszrWq7mRdi3Tg78JJDJYmjByCc_Eg4_8mblcY-bsR0bs6II56DnR7XZB6XZnn4rndMbGbMOzYj8bGRMbnwaXTMfw45w4uUFiEh5BwVIbf_ztR8hEylSLf3qHxULURvxnDBwmYWZZzv-ruwAja=s1024-rj",
    },
  ],
};

export default function ProductsScreen() {
  const navigation = useNavigation();
  const [gridView, setGridView] = useState(true);

  const renderProduct = (item) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails");
      }}
      style={[styles.productCard, gridView ? styles.gridCard : styles.listCard]}
    >
      <Image
        source={{ uri: item.image }}
        style={[
          styles.productImage,
          gridView ? styles.gridImage : styles.listImage,
        ]}
      />
      <View style={gridView ? styles.gridInfo : styles.listInfo}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.rating}>
          <MaterialIcons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.priceText}>
            <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <MaterialIcons name="add-shopping-cart" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={[styles.toggleButton, gridView && styles.activeButton]}
            onPress={() => setGridView(true)}
          >
            <MaterialIcons
              name="grid-view"
              size={20}
              color={gridView ? "white" : "#111714"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, !gridView && styles.activeButton]}
            onPress={() => setGridView(false)}
          >
            <MaterialIcons
              name="view-list"
              size={20}
              color={!gridView ? "white" : "#111714"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
      >
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="filter-list" size={16} color="#111714" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        {["All", "Produce", "Dairy", "Bakery", "Meat"].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.filterButton, cat === "All" && styles.activeFilter]}
          >
            <Text
              style={[styles.filterText, cat === "All" && { color: "white" }]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={{ height: "auto" }}>
        {Object.keys(productsData).map((section) => (
          <View key={section} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section}</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={productsData[section]}
              renderItem={({ item }) => renderProduct(item)}
              keyExtractor={(item) => item.id}
              numColumns={gridView ? 2 : 1}
              key={gridView ? "g" : "l"}
              scrollEnabled={false}
            />
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {["home", "grid-view", "shopping-cart", "person"].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.footerItem}>
            <MaterialIcons
              name={icon}
              size={24}
              color={icon === "grid-view" ? "#20df6c" : "#648772"}
            />
            <Text
              style={[
                styles.footerText,
                icon === "grid-view" && {
                  color: "#20df6c",
                  fontWeight: "bold",
                },
              ]}
            >
              {["Home", "Products", "Cart", "Profile"][index]}
            </Text>
          </TouchableOpacity>
        ))}
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
    padding: 16,
    backgroundColor: "#f6f8f7",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  headerButtons: { flexDirection: "row", gap: 8 },
  toggleButton: {
    padding: 8,
    borderRadius: 999,
    backgroundColor: "#fff",
    marginLeft: 8,
  },
  activeButton: { backgroundColor: "#20df6c" },
  filterScroll: { paddingHorizontal: 16, height: 40, marginBottom: 8 },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#fff",
    marginRight: 8,
  },
  activeFilter: { backgroundColor: "#20df6c" },
  filterText: { color: "#111714", fontWeight: "500" },
  section: { paddingHorizontal: 16, marginBottom: 16 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111714" },
  seeAll: { fontSize: 14, fontWeight: "500", color: "#20df6c" },
  productCard: {
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
    overflow: "hidden",
  },
  gridCard: { flex: 1, margin: 4 },
  listCard: { flexDirection: "row", padding: 8 },
  productImage: { resizeMode: "cover" },
  gridImage: { width: "100%", height: 120 },
  listImage: { width: 80, height: 80, borderRadius: 8 },
  gridInfo: { padding: 8 },
  listInfo: { flex: 1, justifyContent: "space-between", paddingLeft: 8 },
  productName: { fontWeight: "600", fontSize: 14, color: "#111714" },
  rating: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  ratingText: { marginLeft: 4, fontSize: 12, color: "#648772" },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  priceText: { flexDirection: "row", alignItems: "center" },
  oldPrice: {
    textDecorationLine: "line-through",
    fontSize: 12,
    color: "#648772",
  },
  price: { fontWeight: "bold", marginLeft: 4, fontSize: 14, color: "#111714" },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#20df6c",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#f0f4f2",
    backgroundColor: "#f6f8f7",
  },
  footerItem: { alignItems: "center" },
  footerText: { fontSize: 10, color: "#648772", marginTop: 2 },
});
