import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Body2UI from '../widgets/Body2UI';

const ExpScrollView = ({ Card }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {Card.map((id, index) => (
                <Body2UI book={id} books={index} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
    },
});

export default ExpScrollView;
