import { StyleSheet, Text, View, Button } from 'react-native';
import UserTextInput from '../components/UserTextInput';
import React, { useState } from 'react'

export default function Home({ navigation }) {

    const [quilometragem, setQuilometragem] = useState('')
    const [gasolinaUsada, setGasolinaUsada] = useState('')
    const [avisoValor, setAvisoValor] = useState("Informe os valores abaixo!")


    const onPress = () => {

        if (quilometragem > 0 && gasolinaUsada > 0)
            navigation.navigate("Resultado", { paramKeyQuilometragem: quilometragem, paramKeyGasolina: gasolinaUsada })
            setAvisoValor("Informe os valores abaixo")

        if (quilometragem == "" || gasolinaUsada == "")
            setAvisoValor("Adicione valores válidos!")

        if (quilometragem == 0 && gasolinaUsada == 0)
            setAvisoValor("Adicione valores válidos!")
            setQuilometragem("")
            setGasolinaUsada("")
    }

    return (
        <View style={styles.container}>
            <Text>
                {avisoValor}
            </Text>

            <UserTextInput
                value={quilometragem}
                set={setQuilometragem}
                placeHolderText="Infome a distância percorrida em Km"
            />

            <UserTextInput
                value={gasolinaUsada}
                set={setGasolinaUsada}
                placeHolderText="Informe o consumo de combustível em Litros"
            />
            <Button
                title='Calcular'
                color='#cccaca'
                onPress={onPress}
            />
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
