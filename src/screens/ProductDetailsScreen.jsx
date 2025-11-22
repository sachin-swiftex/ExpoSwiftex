import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const cardWidth = (width - 36) / 2;
const product = {
  name: "Organic Hass Avocado",
  description:
    "Creamy, rich, and packed with nutrients. Perfect for salads, toast, or guacamole. Sourced from local farms.",
  price: 2.99,
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAR-OKahI8WIy6scSPyzQjnhjwDgg4s7oKlSZK39T2IRorNlvqlwDUEmwr7eX9LdxGYwaatb_Kfu2xZiEtssI_qTKtn7hMyIhz3PFrdbWDWB01v0IJ6AzaO-ISM46qRRWDlO_NhWXwIFckiqpK4fEMK-gVUa9L4OEK3-51bbvlJXAniO97dOUVNcyw7Ar01kqTioKVvyhKvZt81sP3m7jVE2t6RWlyJ1y8pES67-0cn12OKOEXrJyhJIKtMrOwMONF5wPwtnFyRyg",
};

const relatedProducts = [
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
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAy6xJfAWgcSKfYaV4XVEm4fZXi1-cmttdIkO4gGBVXcDyPIv8kreMLSdkVNedjr3BGwSobHDBd-GGajsaPhLrRLEYIqouZAQVuHS8F63WWa3Q0qFAX80s0CrqJsky95EG6BSF2xha7TtSDEp__fRe0f8uB5CIZVaaP67uoQj9MsdYDe10qj_7_OVs8fWVOSM5z-l7YBFTbvryEjnP8PAtYyxctu8rmnWrGptLPm1NrTAe-_LCedrqHF-OdOM6XjoPJ4fEk6001qFg",
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
];

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  const renderRelatedItem = ({ item }) => (
    <View style={styles.relatedCard}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.relatedImage}
      />
      <View style={styles.relatedInfo}>
        <Text style={styles.relatedName}>{item.name}</Text>
        <Text style={styles.relatedPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

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
          <Text style={styles.headerTitle}>{product.name}</Text>
          <View style={{ width: 32 }} />
        </View>
        <ScrollView style={styles.scroll}>
          {/* Product Image */}
          <ImageBackground
            source={{ uri: product.image }}
            style={styles.productImage}
          />

          {/* Product Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDesc}>{product.description}</Text>
            <Text style={styles.productPrice}>
              ${product.price.toFixed(2)}{" "}
              <Text style={styles.priceUnit}>/ each</Text>
            </Text>
          </View>

          {/* Related Products */}
          <View style={styles.relatedContainer}>
            <Text style={styles.sectionTitle}>Related Products</Text>
            <FlatList
              data={relatedProducts}
              renderItem={renderRelatedItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          </View>
        </ScrollView>

        {/* Footer Add to Cart Button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.footerButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#f6f8f7", // light background
  },
  scroll: {
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: 300,
  },
  infoContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#122017",
  },
  productDesc: {
    fontSize: 16,
    color: "#4f4f4f",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2ECC71",
    marginTop: 12,
  },
  priceUnit: {
    fontSize: 16,
    fontWeight: "400",
    color: "#666",
  },
  relatedContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#122017",
    marginBottom: 12,
  },
  relatedCard: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  relatedImage: {
    width: "100%",
    height: 120,
  },
  relatedInfo: {
    padding: 8,
  },
  relatedName: {
    fontWeight: "700",
    color: "#122017",
  },
  relatedPrice: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  addButton: {
    marginTop: 8,
    backgroundColor: "#2ECC71",
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#f6f8f7",
  },
  footerButton: {
    backgroundColor: "#2ECC71",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  footerButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
