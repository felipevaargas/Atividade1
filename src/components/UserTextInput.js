import { View, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

export default function UserTextInput(props) {

    const [placeHolderText, SetPlaceHolderText] = useState(props.placeHolderText ? props.placeHolderText : "")

    return (
        <View>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder={placeHolderText}
                value={props.value}
                onChangeText={props.set}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 320,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
});