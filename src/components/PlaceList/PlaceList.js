import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "./../ListItem/ListItem";


// We can functionally return jsx here since we dont need to manage state
// when listing out our places.
const placeList = props => {
    placeRenderer = info => (
        <ListItem 
            placeName={info.item.value} 
            onItemPressed={() => props.OnItemDeleted(info.item.key)}
        />
    );

    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={placeRenderer}>
        </FlatList>
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