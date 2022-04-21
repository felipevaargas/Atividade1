import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Result({ route }) {

  const [quilometragem, setQuilometragem] = useState(route.params.paramKey1)
  const [gasolinaUsada, , setGasolinaUsada,] = useState(route.params.paramKey2)
  const [resultado, setResultado] = useState(quilometragem / gasolinaUsada)
  const [resultadoNivel, setResultadoNivel] = useState('')

  const verificarNivelConsumo = () => {
    if (resultado >= 12)
      setResultadoNivel("Nivel A")

    if (resultado > 10 && resultado <= 12)
      setResultadoNivel("Nivel B")

    if (resultado > 8 && resultado <= 10)
      setResultadoNivel("Nivel C")

    if (resultado > 4 && resultado <= 8)
      setResultadoNivel("Nivel D")

    if (resultado <= 4)
      setResultadoNivel("Nivel E")
  }

  return (

    <View>

      <Text onLayout={verificarNivelConsumo}>
        Consumo= {resultado}
        {"\n"}
        Dados= {resultadoNivel}
      </Text>

    </View>
  )
}
