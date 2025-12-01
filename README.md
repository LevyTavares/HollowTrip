# 🗺️ Turismo em Hallownest (Expo + React Native)

> _"Explore as profundezas do reino esquecido"_

Aplicativo interativo de estudo (nível iniciante) para explorar três locais icônicos do jogo Hollow Knight: **Cidade das Lágrimas**, **Caminho Verde** e **Ninho Profundo**. A tela principal permite alternar entre os locais e exibir título, descrição atmosférica e imagens, acompanhado pela trilha sonora oficial do jogo.

![Badge](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Badge](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Funcionalidades

- 🎵 **Música ambiente em loop** (trilha oficial de Hollow Knight)
- 🎨 **Interface dark** com sombras e profundidade
- 🖼️ **3 locais exploráveis** com imagens e descrições imersivas
- 🔘 **Botões interativos** para alternar entre atrações
- 📱 **Responsivo** para web e mobile
- ⚡ **ScrollView** para navegação suave

---

## 📁 Estrutura do Projeto

```
HollowTrip/
├── App.js                    # Tela principal com useState, botões, ScrollView e Audio
├── assets/
│   ├── CartaoAtracao.js      # Componente de cartão (props: titulo, descricao, imagemSource)
│   ├── hn.jpeg               # Imagem Cidade das Lágrimas
│   ├── hn-2.jpeg             # Imagem Caminho Verde
│   └── hn-3.jpeg             # Imagem Ninho Profundo
├── music/
│   └── 01. Enter Hallownest.mp3  # Trilha sonora oficial
├── app.json                  # Configuração Expo
├── package.json              # Dependências
└── README.md                 # Este arquivo
```

---

## 🎮 Locais Disponíveis

### 🏛️ Cidade das Lágrimas

_A metrópole melancólica de Hallownest, onde a chuva eterna cai sobre elegantes torres azuladas._

### 🌿 Caminho Verde

_Uma floresta exuberante onde o musgo ancestral cobre cada superfície e esporos brilhantes dançam no ar._

### 🕷️ Ninho Profundo

_Profundezas labirínticas tecidas em trevas impenetráveis, onde aranhas colossais espreitam nas sombras._

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js LTS instalado
- Expo CLI (via `npx`)

### Instalação e Execução

```bash
# Clone ou navegue até o diretório
cd HollowTrip

# Instale as dependências
npm install

# Execute o projeto
npx expo start
```

### Testar

- **Web**: Pressione `w` no terminal
- **Android**: Escaneie o QR code com o app Expo Go
- **iOS**: Escaneie o QR code com a câmera nativa

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia           | Uso                                       |
| -------------------- | ----------------------------------------- |
| **React Native**     | Framework mobile multiplataforma          |
| **Expo**             | Ferramentas de desenvolvimento e build    |
| **expo-av**          | Reprodução de áudio com loop              |
| **useState**         | Gerenciamento de estado (local atual)     |
| **useEffect**        | Carregamento e limpeza de áudio           |
| **StyleSheet**       | Estilização nativa com sombras e elevação |
| **ScrollView**       | Rolagem suave de conteúdo                 |
| **TouchableOpacity** | Botões com feedback tátil                 |

---

## 🎨 Melhorias Visuais Implementadas

- ✅ Fundo escuro temático (#0a0a0e, #0f0f13)
- ✅ Sombras profundas em botões e cartões
- ✅ Subtítulo com fonte itálica
- ✅ Divisor sutil entre header e conteúdo
- ✅ StatusBar escura para imersão total
- ✅ Imagens com `maxHeight` e proporção 16:9

---

## 📸 Como Trocar as Imagens

As imagens estão referenciadas via `require()` no arquivo `App.js`:

```javascript
const locais = {
  cidadeDasLagrimas: {
    titulo: "Cidade das Lágrimas",
    descricao: "...",
    imagem: require("./assets/hn.jpeg"), // ← Troque aqui
  },
  // ...
};
```

Para usar suas próprias imagens:

1. Coloque os arquivos em `assets/`
2. Atualize o caminho no `require()`
3. Reinicie o bundler com `npx expo start -c`

---

## 🎵 Como a Música Funciona

O áudio é carregado automaticamente no `useEffect`:

```javascript
const { sound } = await Audio.Sound.createAsync(
  require("./music/01. Enter Hallownest.mp3"),
  { shouldPlay: true, isLooping: true, volume: 0.3 }
);
```

- **Loop infinito**: `isLooping: true`
- **Volume**: 30% para não sobrepor diálogos
- **Cleanup**: `sound.unloadAsync()` ao desmontar

Para trocar a música:

1. Coloque o arquivo `.mp3` em `music/`
2. Atualize o caminho no `require()`

---

## 📋 Fluxo de Dados (Props)

```
App.js (estado: localAtual)
    ↓
    └─> CartaoAtracao.js
         ├─ prop: titulo
         ├─ prop: descricao
         └─ prop: imagemSource
```

Quando o usuário clica em um botão:

1. `setLocalAtual(locais.caminhoVerde)` atualiza o estado
2. O componente `CartaoAtracao` recebe novas props
3. React re-renderiza com os novos dados

---

## ⚠️ Observação sobre Direitos Autorais

- **Hollow Knight** e seus elementos visuais/sonoros são propriedade de **Team Cherry**
- Este projeto é **apenas educacional** e não deve ser comercializado
- Use apenas conteúdo que você tenha direito de usar (capturas de tela próprias, assets oficiais liberados, etc.)

---

## 🎓 Requisitos Acadêmicos Atendidos

✅ **Tela principal** com nome, descrição e imagem  
✅ **Botões interativos** que alteram conteúdo  
✅ **Componente personalizado** (`CartaoAtracao.js`)  
✅ **Uso de props** (titulo, descricao, imagemSource)  
✅ **useState** para gerenciar estado  
✅ **useEffect** para lógica interna  
✅ **StyleSheet.create()** em todos os arquivos  
✅ **Componentes nativos**: View, Text, Image, TouchableOpacity, ScrollView, StatusBar

---

## 🔮 Possíveis Melhorias Futuras

- [ ] Botão de mute/unmute para a música
- [ ] Animações de transição entre locais
- [ ] Mais locais (Coliseu, Reino Fúngico, Abismo)
- [ ] Galeria de imagens por local
- [ ] Sistema de favoritos
- [ ] Modo claro/escuro
- [ ] Internacionalização (PT/EN)

---

## 👨‍💻 Autor

**Levy Tavares** 
**Guilherme Lopes** 
Projeto acadêmico - React Native + Expo

---

## 📄 Licença

Este projeto é de uso educacional. Hollow Knight © Team Cherry.
