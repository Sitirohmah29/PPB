import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const BodyUI = ({ book }) => {
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i >= rating) {
        // Render a filled star
        stars.push(<FontAwesome5Icon key={i} name="star" size={16} color="#FFD700" />);
      } else {
        // Render an empty star
        stars.push(<FontAwesome5Icon key={i} name="star" size={16} color="#D3D3D3" />);
      }
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerimg}>
        <Text style={styles.rate}>{book.rating}</Text>
        <Image source={{ uri: book.img }} style={styles.image} />
        <View style={styles.details}>
          <View style={styles.text}>{renderStarRating(book.rating)}</View>
          <Text style={styles.title}>{book.title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "100%",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "grey",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  containerimg: {
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: "105%",
    height: "85%",
    borderRadius: 10,
    marginBottom: 5,
  },
  rate: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E4A6A",
    marginLeft: 100,
  },
  details: {
    marginTop: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E4A6A",
  },
  text: {
    flexDirection: "row",
    marginBottom: 5,
  },
});

export default BodyUI;
