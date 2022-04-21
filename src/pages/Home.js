import { StyleSheet, Text, View, Button } from 'react-native';
import UserTextInput from '../components/UserTextInput';
import React, { useLayoutEffect, useState } from 'react'

export default function Home({ navigation }) {

    const [quilometragem, setQuilometragem] = useState("")
    const [gasolinaUsada, setGasolinaUsada] = useState("") 
    const [resultado, setResultado] = useState(0)

    return (
        <View style={styles.container}>
            <UserTextInput
                value={quilometragem}
                set={setQuilometragem}
                placeHolderText="Informe a distancia percorrida"
            />

            <UserTextInput
                value={gasolinaUsada}
                set={setGasolinaUsada}
                placeHolderText="Informe a quantidade de combustivel usada"
            />
            <View>
                <Button
                    title='Calcular'
                    onPress={() => navigation.navigate("Resultado", { paramKey1: quilometragem, paramKey2: gasolinaUsada })}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
