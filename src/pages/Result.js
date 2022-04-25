import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

export default function Result({ route }) {

  const [quilometragem, setQuilometragem] = useState(route.params.paramKeyQuilometragem)
  const [gasolinaUsada, , setGasolinaUsada,] = useState(route.params.paramKeyGasolina)
  const [resultado, setResultado] = useState(quilometragem / gasolinaUsada)
  const [resultadoNivel, setResultadoNivel] = useState(0)

  useLayoutEffect(() => {
    verificarNivelConsumo()
  }, [])

  const verificarNivelConsumo = () => {
    setResultado(quilometragem / gasolinaUsada)

    if (resultado >= 12)
      setResultadoNivel("Nivel A")

    if (resultado >= 10 && resultado < 12)
      setResultadoNivel("Nivel B")

    if (resultado >= 8 && resultado < 10)
      setResultadoNivel("Nivel C")

    if (resultado >= 4 && resultado < 8)
      setResultadoNivel("Nivel D")

    if (resultado < 4)
      setResultadoNivel("Nivel E")
  }

  return (

    <View style={styles.container}>

      <Text style={{ fontSize: 16}}>
        Consumo= { parseFloat(resultado.toFixed(2)) } Km/l
        {"\n"}
        Nivel de consumo= {resultadoNivel}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
      borderRadius: 10,
      margin: 5,
      backgroundColor: '#dbdbdb',
      justifyContent: 'center'
  }
});