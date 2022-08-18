import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const AppBar = () => {
    return (
        <View style={[styles.main, styles.shadowProp]}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 80,
        backgroundColor: 'red',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
    },

})

export default AppBar;