export const animals = [
  {
    id: 'panda',
    name: 'Panda-Gigante',
    scientificName: 'Ailuropoda melanoleuca',
    category: 'floresta',
    categoryLabel: 'Floresta Oriental',
    region: 'Montanhas de Sichuan, China',
    accentColor: '#10b981', // emerald
    glowClass: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    tag: 'Bambu & Névoa',
    image: '/images/panda-floresta.jpg',
    headline: 'O Guardião Sereno das Florestas de Bambu',
    summary:
      'Imerso no silêncio verde dos vales montanhosos de Sichuan, o panda-gigante repousa serenamente enquanto se alimenta. Símbolo mundial da conservação da vida silvestre, ele equilibra a ecologia das matas subtropicais.',
    conservation: {
      status: 'Vulnerável (VU)',
      badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    },
    details: {
      biome: 'Florestas temperadas e subtropicais de altitude',
      diet: 'Herbívora estrita — 99% caules tenros, brotos e folhas de bambu',
      lifespan: '20 anos na natureza (mais de 30 anos em santuários)',
      weight: '85 a 125 kg (machos adultos)',
      curiosity:
        'Um panda precisa mastigar entre 12 e 38 kg de bambu diariamente para atingir seu suprimento calórico. Por isso, passa cerca de 10 a 14 horas do dia exclusivamente comendo.',
    },
  },
  {
    id: 'leao',
    name: 'Leão-Africano',
    scientificName: 'Panthera leo',
    category: 'savana',
    categoryLabel: 'Savana Africana',
    region: 'Planícies do Serengeti, Tanzânia',
    accentColor: '#f59e0b', // amber
    glowClass: 'from-amber-500/25 via-orange-500/10 to-transparent',
    tag: 'Rei da Savana',
    image: '/images/leao-salto.jpg',
    headline: 'O Salto Majestoso no Crepúsculo da Savana',
    summary:
      'Capturado no ápice de um salto sobre formações rochosas enquanto manadas cruzam o horizonte dourado, o leão personifica a nobreza e a força instintiva que governam as vastas terras africanas.',
    conservation: {
      status: 'Vulnerável (VU)',
      badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    },
    details: {
      biome: 'Savanas tropicais, pradarias abertas e matagais espinhosos',
      diet: 'Carnívora estrita — grandes herbívoros, zebras, antílopes e búfalos',
      lifespan: '10 a 15 anos em estado selvagem',
      weight: '170 a 230 kg (machos adultos)',
      curiosity:
        'O rugido de um leão adulto pode ultrapassar 114 decibéis e reverbera por até 8 quilômetros na planície, servindo para demarcar território e reunir a alcateia ao cair da noite.',
    },
  },
  {
    id: 'girafa',
    name: 'Girafa-da-Savana',
    scientificName: 'Giraffa camelopardalis',
    category: 'savana',
    categoryLabel: 'Savana Africana',
    region: 'Parque Nacional Kruger, África do Sul',
    accentColor: '#eab308', // yellow
    glowClass: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    tag: 'Horizonte Dourado',
    image: '/images/girafa-acacia.jpg',
    headline: 'A Dança Vertical Rumo às Copas Mais Altas',
    summary:
      'Em uma rara exibição de equilíbrio gracioso, a girafa projeta-se sobre as patas posteriores para desfrutar da folhagem fresca das acácias sob a luz mística do pôr do sol, revelando a singularidade da evolução.',
    conservation: {
      status: 'Vulnerável (VU)',
      badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    },
    details: {
      biome: 'Savanas semiáridas e bosques abertos de acácias',
      diet: 'Herbívora ramificadora — folhas de acácia, frutos silvestres e brotos',
      lifespan: '20 a 25 anos em seu habitat natural',
      weight: '800 a 1.200 kg',
      curiosity:
        'Sua língua mede até 50 centímetros de comprimento, tem tom escuro para proteção solar e é incrivelmente resistente aos espinhos pontiagudos das árvores de acácia.',
    },
  },
  {
    id: 'husky',
    name: 'Lobo-do-Ártico & Husky',
    scientificName: 'Canis lupus arctos',
    category: 'polar',
    categoryLabel: 'Tundra Polar',
    region: 'Tundras Glaciais & Territórios do Norte',
    accentColor: '#38bdf8', // sky
    glowClass: 'from-sky-500/25 via-cyan-500/10 to-transparent',
    tag: 'Domínio do Gelo',
    image: '/images/husky-neve.jpg',
    headline: 'A Determinação Invicta no Deserto Gelado',
    summary:
      'Sob a iluminação mágica de nuvens douradas e cumes montanhosos cobertos de neve eterna, o canídeo ártico avança altivo, demonstrando resistência inabalável e espírito ancestral de sobrevivência.',
    conservation: {
      status: 'Pouco Preocupante (LC)',
      badgeClass: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    },
    details: {
      biome: 'Tundras polares, campos de gelo eterno e taiga boreal',
      diet: 'Carnívora adaptativa — caça em matilha e resistência prolongada',
      lifespan: '12 a 15 anos em condições subpolares',
      weight: '35 a 60 kg',
      curiosity:
        'Sua pelagem densa de camada dupla cria um isolamento térmico tão eficiente que a neve caída sobre suas costas não derrete com o calor corporal, suportando temperaturas de até -50°C.',
    },
  },
  {
    id: 'urso',
    name: 'Urso-Pardo da Cordilheira',
    scientificName: 'Ursus arctos',
    category: 'montanha',
    categoryLabel: 'Montanhas Boreais',
    region: 'Cordilheiras e Florestas Temperadas',
    accentColor: '#f97316', // orange
    glowClass: 'from-orange-500/25 via-amber-600/10 to-transparent',
    tag: 'Guardião dos Bosques',
    image: '/images/urso-arvore.jpg',
    headline: 'O Titã Solitário das Altas Cordilheiras',
    summary:
      'Apoiado com firmeza no tronco de uma árvore centenária para marcar seu território, o urso-pardo sintetiza a imponência e o vigor dos ecossistemas florestais das grandes cadeias de montanhas.',
    conservation: {
      status: 'Pouco Preocupante (LC)',
      badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    },
    details: {
      biome: 'Florestas temperadas de coníferas e vales montanhosos alpinos',
      diet: 'Onívora oportunista — bagas silvestres, salmão, raízes e nozes',
      lifespan: '25 a 30 anos em liberdade',
      weight: '250 a 450 kg (machos adultos antes do período de hibernação)',
      curiosity:
        'O olfato do urso-pardo é sete vezes mais apurado do que o de um cão perdigueiro farejador, permitindo localizar carcaças ou frutos a mais de 30 km de distância.',
    },
  },
]

export const categories = [
  { id: 'todos', label: 'Todas as Espécies' },
  { id: 'floresta', label: 'Florestas' },
  { id: 'savana', label: 'Savana' },
  { id: 'polar', label: 'Tundra Polar' },
  { id: 'montanha', label: 'Montanhas' },
]
