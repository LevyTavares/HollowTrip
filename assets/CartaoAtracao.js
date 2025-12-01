import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Componente de cartão simples para mostrar uma atração de Hallownest
// Recebe props: titulo, descricao, imagemSource
export default function CartaoAtracao({ titulo, descricao, imagemSource }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={imagemSource}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.description}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#141720",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2a2f3a",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  imageWrapper: {
    width: "100%",
    maxWidth: 900,
    aspectRatio: 16 / 9,
    maxHeight: 220,
    backgroundColor: "#1b1f2a",
    borderRadius: 8,
    marginBottom: 12,
    overflow: "hidden",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#e5e7eb",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    color: "#cbd5e1",
    fontSize: 14,
    lineHeight: 20,
  },
});
