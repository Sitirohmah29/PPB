import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Headers from './widgets/HeaderUI';
import {Book, Genres, ListBook} from "./utils/ConstData";
import GenresFlatList from './modules/FlatListUI';
import BodyFlatList from './modules/BodyFlatListUI';
import ExpScrollView from './modules/ExpScrollView';

class CategoriesUI extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false}/>
                <View style={styles.header}>
                    <Headers/>
                </View>
                <View style={styles.genre}>
                    <GenresFlatList Data={Genres} />
                </View>
                <View style={styles.body}>
                    <BodyFlatList rate={ListBook} />
                </View>
                <View style={styles.fantasy}>
                    <ExpScrollView Card={Book} /> 
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        flex: 1,
        backgroundColor: "red",
    },
    genre: {
        flex: 1.5,
        backgroundColor: "green",
    },
    body: {
        flex: 5,
        backgroundColor: "pink",
        padding: 10,
    },
    fantasy:{
        flex: 10,
        backgroundColor: "yellow",
    },
});

export default CategoriesUI;
