# Wild Horizon — Galeria Imersiva da Fauna Global 🦁🌿

Aplicação web interativa de exibição e exploração da vida selvagem, construída com **React 19**, **Tailwind CSS v4** e **Vite**.

O projeto apresenta uma experiência visual cinematográfica inspirada em publicações de fotografia da natureza (como National Geographic e BBC Earth), combinando fluidez visual, rica fundamentação ecológica e alta acessibilidade.

---

## 🌟 Funcionalidades Principais

- **Carrossel Dinâmico Cinematográfico**:
  - Transições suaves em camadas com efeito de aproximação sutil (Ken Burns).
  - Ambient glow responsivo que projeta um reflexo luminoso colorido de acordo com a paleta de cada animal.
  - Temporizador inteligente de avanço automático (6s por slide) com barra de progresso em tempo real.
  - Pausa automática ao passar o cursor do mouse (hover) ou ao abrir a ficha técnica.

- **Navegação & Controle Completo**:
  - Botões anterior/próximo e botões de navegação lateral com backdrop blur.
  - Faixa inferior de miniaturas (*Thumbnail Strip*) interativa com indicador visual ativo.
  - Barra de progresso contínua com estado de reprodução / pausa.
  - Modo Tela Cheia (*Fullscreen API*) com suporte a alternância instantânea.

- **Ficha Técnica & Curiosidades (Deep-Dive Modal)**:
  - Painel detalhado acionado pelo botão **"Ficha da Espécie"** ou atalho **`I`**.
  - Nome científico, bioma de origem, dieta, peso médio e expectativa de vida.
  - Status oficial de conservação da Lista Vermelha da IUCN (*Vulnerável*, *Pouco Preocupante*).
  - Caixa de curiosidades em destaque (*"Você sabia?"*).

- **Filtro Rápido por Ecossistemas**:
  - Atalhos no cabeçalho para saltar entre biomas: *Florestas Orientais*, *Savana Africana*, *Tundra Polar* e *Montanhas Boreais*.

- **Acessibilidade & Atalhos de Teclado**:
  - `←` e `→` : Navegar entre os slides.
  - `Espaço` : Pausar ou retomar a reprodução automática.
  - `F` : Alternar modo tela cheia.
  - `I` : Abrir / fechar ficha técnica detalhada da espécie.
  - `Esc` : Fechar a ficha técnica.
  - Suporte completo a gestos de arrasto por toque (*touch swipe*) em dispositivos móveis e tablets.

---

## 🐾 Espécies em Exibição

1. **Panda-Gigante** (*Ailuropoda melanoleuca*) — Florestas de Bambu de Sichuan, China (Status: VU).
2. **Leão-Africano** (*Panthera leo*) — Planícies do Serengeti, Tanzânia (Status: VU).
3. **Girafa-da-Savana** (*Giraffa camelopardalis*) — Parque Nacional Kruger, África do Sul (Status: VU).
4. **Lobo-do-Ártico & Husky** (*Canis lupus arctos*) — Tundras Glaciais do Extremo Norte (Status: LC).
5. **Urso-Pardo da Cordilheira** (*Ursus arctos*) — Montanhas Boreais e Florestas Temperadas (Status: LC).

---

## 🛠️ Tecnologias Utilizadas

- **React 19** (Hooks: `useState`, `useEffect`, `useCallback`, `useRef`)
- **Tailwind CSS v4** (Design System responsivo, glassmorphism e iluminação ambiente)
- **Vite 8** (Bundler ultrarrápido para desenvolvimento moderno)
- **Google Fonts** (Tipografia com a família *Plus Jakarta Sans*)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 20+ ou 22+)
- NPM

### Instalação
```bash
# Clone ou acesse a pasta do projeto
cd image-slider-master

# Instale as dependências
npm install
```

### Modo de Desenvolvimento
```bash
npm run dev
```
Abra seu navegador no endereço indicado pelo Vite (normalmente `http://localhost:5173`).

### Geração de Build de Produção
```bash
npm run build
```
Os arquivos otimizados para publicação serão gerados na pasta `dist/`.

---

## 📄 Licença
Distribuído para fins educacionais e acadêmicos.
