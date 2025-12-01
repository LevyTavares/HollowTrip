import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Audio } from "expo-audio";
import CartaoAtracao from "./assets/CartaoAtracao";

const locais = {
  cidadeDasLagrimas: {
    titulo: "Cidade das Lágrimas",
    descricao:
      "A metrópole melancólica de Hallownest, onde a chuva eterna cai sobre elegantes torres azuladas. Aqui, almas perdidas vagam entre fontes ornamentadas e janelas que choram eternamente. Um lugar de beleza trágica e segredos submersos nas águas cristalinas.",
    // Usa arquivo existente em assets/
    imagem: require("./assets/hn.jpeg"),
  },
  caminhoVerde: {
    titulo: "Caminho Verde",
    descricao:
      "Uma floresta exuberante onde o musgo ancestral cobre cada superfície. Criaturas ácidas protegem trilhas sinuosas que revelam santuários esquecidos. A natureza selvagem reclama o que um dia foi civilização, enquanto esporos brilhantes dançam no ar úmido.",
    // Usa arquivo existente em assets/
    imagem: require("./assets/hn-2.jpeg"),
  },
  ninhoProfundo: {
    titulo: "Ninho Profundo",
    descricao:
      "Profundezas labirínticas tecidas em trevas impenetráveis. Teias ancestrais envolvem corredores onde aranhas colossais espreitam nas sombras. A luz raramente alcança estas câmaras esquecidas, onde os ecos do passado sussurram entre fios de seda negra.",
    // Usa arquivo existente em assets/
    imagem: require("./assets/hn-3.jpeg"),
  },
};

export default function App() {
  const [localAtual, setLocalAtual] = useState(locais.cidadeDasLagrimas);
  const [sound, setSound] = useState();

  useEffect(() => {
    let isMounted = true;
    async function loadSound() {
      try {
        const soundObj = new Audio.Sound();
        await soundObj.loadAsync(require("./music/01. Enter Hallownest.mp3"));
        await soundObj.setIsLoopingAsync(true);
        await soundObj.setVolumeAsync(0.3);
        await soundObj.playAsync();
        if (isMounted) setSound(soundObj);
      } catch (error) {
        console.log("Erro ao carregar música:", error);
      }
    }
    loadSound();

    return () => {
      isMounted = false;
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0e" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Turismo em Hallownest</Text>
          <Text style={styles.subtitle}>
            Explore as profundezas do reino esquecido
          </Text>
        </View>

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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#0a0a0e",
  },
  container: {
    backgroundColor: "#0f0f13",
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  headerContainer: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  header: {
    color: "#e6e6e6",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: 13,
    textAlign: "center",
    fontStyle: "italic",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  botaoTexto: {
    color: "#cbd5e1",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
  },
});
