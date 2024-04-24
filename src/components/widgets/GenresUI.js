import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const GenresUI = ({ items }) => {
  return (
    <View style={styles.container}>
         <View style={styles.genre}>
            {items.aktif ? (
                <Text style={styles.text}>{items.name}</Text>
            ):(
                <Text >{items.name}</Text>
            )}
                
            </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
},
genre: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
},
});

export default GenresUI;
