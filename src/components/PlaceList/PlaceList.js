import React from "react";
import { View, StyleSheet } from "react-native";
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
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
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