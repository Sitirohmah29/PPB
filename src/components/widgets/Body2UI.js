import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Body2UI = ({ books }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: books.img}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{books.judul}</Text>
        <Text style={styles.author}>{books.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 150, // Diganti menjadi nilai absolut untuk tinggi
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    flexDirection: "row", // Diganti menjadi "row" agar sesuai dengan layout yang diinginkan
    alignItems: "center",
    marginBottom: 16,
    marginTop: 15,
    marginHorizontal: 15,
  },
  
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginLeft: 20, // Diganti menjadi marginLeft agar gambar berada di sisi kiri
  },
  details: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E4A6A",
  },
  author: {
    fontSize: 14,
    color: "#2E4A6A",
  },
});

export default Body2UI;
