import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CartaoAtracao from "./assets/CartaoAtracao";

const locais = {
  cidadeDasLagrimas: {
    titulo: "Cidade das Lágrimas",
    descricao:
      "A metrópole melancólica de Hallownest, marcada por chuva eterna e arquitetura majestosa.",
    // Substitua o caminho abaixo pelo arquivo que você colocar em assets/
    imagem: require("./assets/hk-cidade-das-lagrimas.jpg"),
  },
  caminhoVerde: {
    titulo: "Caminho Verde",
    descricao:
      "Floresta exuberante coberta por musgo e vida selvagem. Trilhas sinuosas levam a segredos antigos.",
    // Substitua o caminho abaixo pelo arquivo que você colocar em assets/
    imagem: require("./assets/hk-caminho-verde.jpg"),
  },
  ninhoProfundo: {
    titulo: "Ninho Profundo",
    descricao:
      "Profundezas escuras e labirínticas onde criaturas tecem redes e a luz raramente alcança.",
    // Substitua o caminho abaixo pelo arquivo que você colocar em assets/
    imagem: require("./assets/hk-ninho-profundo.jpg"),
  },
};

export default function App() {
  const [localAtual, setLocalAtual] = useState(locais.cidadeDasLagrimas);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Turismo em Hallownest</Text>

      <View style={styles.botoesRow}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setLocalAtual(locais.cidadeDasLagrimas)}
        >
          <Text style={styles.botaoTexto}>Cidade das Lágrimas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setLocalAtual(locais.caminhoVerde)}
        >
          <Text style={styles.botaoTexto}>Caminho Verde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setLocalAtual(locais.ninhoProfundo)}
        >
          <Text style={styles.botaoTexto}>Ninho Profundo</Text>
        </TouchableOpacity>
      </View>

      <CartaoAtracao
        titulo={localAtual.titulo}
        descricao={localAtual.descricao}
        imagemSource={localAtual.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f13",
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    color: "#e6e6e6",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  botoesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 16,
  },
  botao: {
    backgroundColor: "#1c1f26",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#2f3440",
    flex: 1,
  },
  botaoTexto: {
    color: "#cbd5e1",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
  },
});
