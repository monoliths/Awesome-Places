import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import ListItem from "./../ListItem/ListItem";


// We can functionally return jsx here since we dont need to manage state
// when listing out our places.
const placeList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => props.OnItemDeleted(i)}
        />
    ));
    return (
        <ScrollView style={styles.listContainer}>
            {placesOutput}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee'
    }
});

export default placeList;