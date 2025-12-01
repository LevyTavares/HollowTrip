# Turismo em Hallownest (Expo + React Native)

Aplicativo simples de estudo (nível iniciante) para explorar três locais icônicos do jogo Hollow Knight: Cidade das Lágrimas, Caminho Verde e Ninho Profundo. A tela principal permite alternar entre os locais e exibir título, descrição e uma imagem (com placeholders para você inserir depois).

> Observação: Este repositório não inclui imagens reais do Hollow Knight. Os trechos abaixo usam placeholders locais para você adicionar os arquivos com os quais tem direito de uso.

## Funcionalidades

- Alternar entre 3 locais usando botões.
- Atualização de título, descrição e imagem conforme o local selecionado.
- Uso de componentes nativos: `View`, `Text`, `Image`, `TouchableOpacity` e `StyleSheet`.
- Estilo com fundo escuro e texto claro para boa legibilidade.

## Estrutura do Projeto

- `App.js`: Tela principal com `useState` e botões para alternar os locais.
- `assets/CartaoAtracao.js`: Componente de cartão que recebe dados via props e renderiza a atração.
- `assets/`: Pasta onde você pode guardar as imagens locais do projeto.

## Imagens (placeholders)

Você pode adicionar imagens locais (que você tem direito de usar) e referenciá-las no README e no código. Exemplos de placeholders:

```md
![Cidade das Lágrimas](assets/hk-cidade-das-lagrimas.jpg)
![Caminho Verde](assets/hk-caminho-verde.jpg)
![Ninho Profundo](assets/hk-ninho-profundo.jpg)
```

Coloque as imagens em `assets/` com os nomes acima (ou outros que preferir) e ajuste os caminhos conforme necessário.

## Como trocar as imagens no código

O componente `CartaoAtracao` espera uma prop `imagemSource` usada diretamente no `Image`. No arquivo `App.js`, o objeto `locais` já está com `imagem: null`. Depois que você salvar suas imagens locais, substitua `null` por `require` do arquivo correspondente. Exemplo:

```js
// Dentro de App.js
const locais = {
  cidadeDasLagrimas: {
    titulo: "Cidade das Lágrimas",
    descricao: "...texto...",
    imagem: require("./assets/hk-cidade-das-lagrimas.jpg"),
  },
  caminhoVerde: {
    titulo: "Caminho Verde",
    descricao: "...texto...",
    imagem: require("./assets/hk-caminho-verde.jpg"),
  },
  ninhoProfundo: {
    titulo: "Ninho Profundo",
    descricao: "...texto...",
    imagem: require("./assets/hk-ninho-profundo.jpg"),
  },
};
```

No componente `assets/CartaoAtracao.js`, o `Image` já está preparado para receber esta prop:

```jsx
<Image source={imagemSource} style={styles.image} resizeMode="cover" />
```

## Fluxo de Dados (Props)

- `App.js` mantém o estado `localAtual` (com `titulo`, `descricao` e `imagem`).
- `App.js` passa essas informações para `CartaoAtracao` como props: `titulo`, `descricao`, `imagemSource`.
- `CartaoAtracao` exibe esses dados em `Text` e `Image`.

## Como Executar

Requisitos: Node.js LTS e Expo CLI (via `npx` já é suficiente). No Linux com zsh:

```zsh
npm install
npx expo start
```

Abra o app no emulador/simulador ou no dispositivo físico pelo app Expo Go.

## Observação Importante sobre Direitos Autorais

- Hollow Knight e seus elementos visuais são propriedade intelectual dos seus detentores.
- Não inclua no repositório imagens que você não tenha direito de usar.
- Se optar por inserir imagens, utilize arquivos locais de uso permitido (por exemplo, capturas de tela suas, material oficial liberado para uso, ou imagens licenciadas apropriadamente).

## Próximos Passos (Sugeridos)

- Adicionar feedback visual de seleção do local (botão ativo).
- Incluir acessibilidade básica (labels e roles).
- Criar uma pasta `assets/imagens/` para organizar melhor as mídias.
