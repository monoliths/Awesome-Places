import React, { Component } from 'react';

import { View, StyleSheet, TextInput, Button } from 'react-native';

// This component will have some state to it thereforce we use a class
class PlaceInput extends Component {
    state = {
        placeName: ''
    };

    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };


    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder='Some Place...'
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                />
                <Button
                    style={styles.placeButton}
                    title='Add Place'
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    }
});

export default PlaceInput;