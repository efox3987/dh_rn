import React from "react";
import {
    View, StyleSheet, Text
} from 'react-native';

const Analysis = () => {
    return (
        <View style={styles.main}>
            <Text>
                Analysis
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

export default Analysis;