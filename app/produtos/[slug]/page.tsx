"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { useEffect } from "react"
import { ArrowLeft, CheckCircle2, Ruler, Layers } from 'lucide-react'

const products = {
  "lixas-em-folha": {
  "title": "Lixas em Folha",
  "description": "Lixas em folha de alta qualidade para acabamento manual profissional",
  "image": "/sandpaper-sheets-stack-professional.jpg",
  "fullDescription": "Nossas lixas em folha são fabricadas com óxido de alumínio de alta pureza, garantindo durabilidade excepcional e acabamento uniforme. Ideais para trabalhos manuais em madeira, metal, massa corrida e preparação de superfícies para pintura.",
  "features": [
    "Óxido de alumínio de alta pureza",
    "Base de papel resistente",
    "Aderência superior do grão",
    "Não empasta facilmente",
    "Acabamento uniforme",
    "Longa durabilidade"
  ],
  "applications": [
    "Acabamento de móveis e marcenaria",
    "Preparação de superfícies para pintura",
    "Lixamento de massa corrida",
    "Acabamento de metais",
    "Restauração de madeira"
  ],
  "specifications": [
    { "label": "Grãos disponíveis", "value": "40, 60, 80, 100, 120, 150, 180, 220, 320, 400, 600" },
    { "label": "Dimensões", "value": "230mm x 280mm" },
    { "label": "Material abrasivo", "value": "Óxido de alumínio" },
    { "label": "Costado", "value": "Papel látex flexível de alta qualidade, à prova d’água" },
    { "label": "Embalagem", "value": "Pacotes com 50 folhas" }
  ],
  "varieties": [
    {
      "name": "Lixa d’Água",
      "description": "Indicada para lixamento úmido de superfícies metálicas, automotivas e pintura. Resistente à água e ao desgaste prolongado.",
      "image": "/lixa-folha-agua.jpg"
    },
    {
      "name": "Lixa para Ferro",
      "description": "Desenvolvida para lixamento de metais ferrosos e não ferrosos. Proporciona alto poder de corte e longa durabilidade.",
      "image": "/lixa-folha-ferro.jpg"
    },
    {
      "name": "Lixa a Seco",
      "description": "Ideal para lixamento manual de madeira e massa corrida. Excelente desempenho em superfícies secas.",
      "image": "/lixa-folha-seco.jpg"
    },
    {
      "name": "Lixa para Massa e Madeira",
      "description": "Perfeita para nivelamento e acabamento fino em superfícies de massa corrida, MDF e madeira em geral.",
      "image": "/lixa-folha-massa-madeira.jpg"
    }
  ]
},

  "discos-abrasivos": {
    title: "Discos Abrasivos",
    description: "Discos de alta performance para lixadeiras orbitais e roto-orbitais",
    image: "/sanding-discs-circular-abrasive-professional.jpg",
    fullDescription:
      "Discos abrasivos desenvolvidos especialmente para uso em lixadeiras elétricas. Sistema de fixação por velcro garante troca rápida e segura. Grãos uniformemente distribuídos proporcionam acabamento profissional.",
    features: [
      "Sistema de fixação velcro",
      "Furos para extração de pó",
      "Grão uniformemente distribuído",
      "Alta taxa de remoção",
      "Resistente ao calor",
      "Não rasga facilmente",
    ],
    applications: [
      "Lixamento com lixadeiras orbitais",
      "Acabamento de superfícies planas",
      "Preparação para verniz",
      "Lixamento entre demãos",
      "Trabalhos de precisão",
    ],
    specifications: [
      { label: "Grãos disponíveis", value: "60, 80, 100, 120, 150, 180, 220, 240, 320, 400" },
      { label: "Diâmetros", value: "125mm, 150mm" },
      { label: "Material abrasivo", value: "Óxido de alumínio" },
      { label: "Fixação", value: "Velcro" },
      { label: "Furos", value: "6 ou 8 furos" },
    ],
    varieties: [
      {
        name: "Disco de Fibra",
        description:
          "Disco robusto com base de fibra vulcanizada, ideal para desbaste agressivo em metais e soldas. Alta resistência e durabilidade.",
        image: "/disco-fibra.jpg",
      },
      {
        name: "Disco de Velcro",
        description:
          "Sistema de fixação rápida por velcro, perfeito para lixadeiras orbitais. Troca rápida e eficiente entre diferentes grãos.",
        image: "/disco-velcro.jpg",
      },
      {
        name: "Disco de Corte",
        description:
          "Disco fino para corte preciso de metais ferrosos e não ferrosos. Alta velocidade de corte com mínima geração de rebarbas.",
        image: "/disco-corte.jpg",
      },
      {
        name: "Disco de Flap",
        description:
          "Disco com lâminas sobrepostas que proporcionam acabamento progressivo. Ideal para desbaste e acabamento em uma única operação.",
        image: "/disco-flap.jpg",
      },
      {
        name: "Disco Diamantado",
        description:
          "Disco com partículas de diamante para corte e desbaste de materiais duros como concreto, granito, cerâmica e vidro.",
        image: "/disco-diamantado.jpg",
      },
      {
        name: "Disco Roloc",
        description:
          "Sistema de fixação rápida por encaixe, permitindo troca instantânea. Ideal para trabalhos que exigem agilidade.",
        image: "/disco-roloc.jpg",
      },
      {
        name: "Disco a Úmido",
        description:
          "Desenvolvido para uso com água, proporcionando acabamento fino sem empastamento. Ideal para polimento automotivo.",
        image: "/disco-umido.jpg",
      },
      {
        name: "Disco de Pano",
        description:
          "Base de tecido flexível que se adapta a superfícies irregulares. Excelente para acabamento de peças curvas.",
        image: "/disco-pano.jpg",
      },
      {
        name: "Disco de Papel",
        description:
          "Base de papel resistente para uso geral. Ótimo custo-benefício para trabalhos de acabamento e preparação de superfícies.",
        image: "/disco-papel.jpg",
      },
    ],
  },
  "cintas-de-lixa": {
    title: "Cintas de Lixa",
    description: "Cintas de alta resistência para lixadeiras industriais",
    image: "/sanding-belt-industrial-abrasive.jpg",
    fullDescription:
      "Cintas de lixa profissionais com emenda reforçada e grão de alta qualidade. Desenvolvidas para suportar as exigências de uso industrial contínuo, oferecendo máxima durabilidade e performance constante.",
    features: [
      "Emenda reforçada antirrompimento",
      "Grão de alta tenacidade",
      "Base flexível e resistente",
      "Alta taxa de corte",
      "Longa vida útil",
      "Uso industrial intensivo",
    ],
    applications: [
      "Lixadeiras de cinta estacionárias",
      "Desbaste de madeira",
      "Nivelamento de superfícies",
      "Remoção de material",
      "Produção em série",
    ],
    specifications: [
      { label: "Grãos disponíveis", value: "36, 40, 50, 60, 80, 100, 120, 150, 180, 220, 320" },
      { label: "Larguras", value: "75mm, 100mm, 150mm" },
      { label: "Comprimentos", value: "457mm, 533mm, 610mm, 915mm" },
      { label: "Material abrasivo", value: "Óxido de alumínio" },
      { label: "Base", value: "Tecido reforçado" },
    ],
    varieties: [
      {
        name: "Cinta Estreita",
        description:
          "Cintas com largura de 75mm a 100mm, ideais para lixadeiras portáteis e trabalhos de precisão em áreas menores.",
        image: "/cinta-estreita.jpg",
      },
      {
        name: "Cinta Larga",
        description:
          "Cintas com largura de 150mm ou superior, desenvolvidas para lixadeiras industriais e grandes superfícies. Alta produtividade.",
        image: "/cinta-larga.jpg",
      },
    ],
  },
  "rolos-de-lixa": {
    title: "Rolos de Lixa",
    description: "Rolos versáteis para grandes superfícies e produção contínua",
    image: "/sandpaper-roll-industrial-workshop.jpg",
    fullDescription:
      "Rolos de lixa em metragem para máxima versatilidade. Corte no tamanho desejado e economize. Ideal para oficinas e indústrias que necessitam de grande volume de material abrasivo.",
    features: [
      "Corte sob medida",
      "Economia de material",
      "Grão uniforme",
      "Base resistente",
      "Não empasta",
      "Grande metragem",
    ],
    applications: [
      "Grandes superfícies",
      "Produção contínua",
      "Oficinas e indústrias",
      "Lixamento manual",
      "Preparação de superfícies",
    ],
    specifications: [
      { label: "Grãos disponíveis", value: "50, 60, 80, 100, 120, 150, 180, 220, 320, 400" },
      { label: "Largura", value: "120mm" },
      { label: "Comprimento", value: "50 metros" },
      { label: "Material abrasivo", value: "Óxido de alumínio" },
      { label: "Base", value: "Papel kraft" },
    ],
    varieties: [
      {
        name: "Rolo de Pano",
        description:
          "Base de tecido flexível e resistente, ideal para superfícies irregulares e trabalhos que exigem maior durabilidade.",
        image: "/rolo-pano.jpg",
      },
      {
        name: "Rolo de Papel",
        description:
          "Base de papel kraft de alta qualidade, perfeito para uso geral em madeira e massa. Excelente custo-benefício.",
        image: "/rolo-papel.jpg",
      },
    ],

  },
  "esponjas-abrasivas": {
    title: "Esponjas Abrasivas",
    description: "Esponjas flexíveis para superfícies irregulares e cantos",
    image: "https://decortintasbrusque.com.br/image/cache/data/Produtos/ES/Esponja-Abrasiva-Grao-Medio-10-Unidades-COR-NO-DEFINIDA-31F7E600-1-1000x1000.jpg.webp",
    fullDescription:
      "Esponjas abrasivas de alta densidade com grão em todas as faces. Flexibilidade permite acesso a cantos e superfícies irregulares. Laváveis e reutilizáveis, oferecendo excelente custo-benefício.",
    features: [
      "Flexível e ergonômica",
      "Grão em todas as faces",
      "Lavável e reutilizável",
      "Acesso a cantos",
      "Não risca superfícies",
      "Longa durabilidade",
    ],
    applications: [
      "Superfícies irregulares",
      "Cantos e bordas",
      "Acabamento de massa",
      "Lixamento entre demãos",
      "Preparação para pintura",
    ],
    specifications: [
      { label: "Grãos disponíveis", value: "Fino, Médio, Grosso, Extra Grosso" },
      { label: "Dimensões", value: "125mm x 95mm x 12mm" },
      { label: "Material abrasivo", value: "Óxido de alumínio" },
      { label: "Base", value: "Espuma de alta densidade" },
      { label: "Embalagem", value: "Individual" },
    ],
  },
  "roda-pg": {
    "title": "Roda PG",
    "description": "Rodas ideais para remoção de solda, rebarbação, acabamento e polimento em diversos materiais.",
    "image": "https://www.janox.com.br/wp-content/uploads/2023/01/Roda-PG.jpg",
    "fullDescription": "As Rodas PG são fabricadas com abrasivos de alta qualidade e estrutura durável, ideais para trabalhos que exigem remoção eficiente de solda, rebarbação e acabamento fino. Oferecem excelente desempenho em metais ferrosos e não ferrosos, proporcionando acabamento uniforme e duradouro.",
    "features": [
      "Alta durabilidade e resistência ao desgaste",
      "Disponível em ampla faixa de grãos (36 a 1000)",
      "Ideal para remoção de solda e rebarbação",
      "Acabamento uniforme e controlado",
      "Compatível com diversas máquinas retificadoras",
      "Desempenho estável mesmo em uso contínuo"
    ],
    "applications": [
      "Remoção de solda",
      "Rebarbação de peças metálicas",
      "Acabamento superficial",
      "Polimento de metais",
      "Preparação de superfícies antes da pintura"
    ],
    "specifications": [
      { "label": "Grãos disponíveis", "value": "36 a 1000" },
      { "label": "Material abrasivo", "value": "Óxido de alumínio, zirconio ou carbeto de silício (conforme aplicação)" },
      { "label": "Formato", "value": "Roda abrasiva compacta" },
      { "label": "Compatibilidade", "value": "Esmerilhadeiras e retificadoras" },
      { "label": "Aplicação", "value": "Metais ferrosos e não ferrosos" }
    ],
    varieties: [
      {
        name: "Roda PG para Inox",
        description:
          "Desenvolvida especialmente para polimento de aço inoxidável. Proporciona acabamento brilhante sem riscar a superfície.",
        image: "/roda-pg-inox.jpg",
      },
      {
        name: "Roda PG para Joias e Semi-Joias",
        description:
          "Grão extrafino para polimento delicado de joias, semi-joias e metais preciosos. Acabamento espelhado profissional.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/roda-pg-joias-dgvqWodjcHCQtsIc54lttFAxiGEgtv.jpg",
      },
      {
        name: "Roda PG com Aste",
        description:
          "Rodas montadas com aste para uso em micro-retíficas e furadeiras. Disponível em todas as medidas padrão.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/roda-pg-com-aste-bkWT0sb1SdZ9nVh5b6HZKilFwHM3FC.jpg",
      },
      {
        name: "Roda PG sem Aste",
        description:
          "Rodas sem aste para montagem em mandris personalizados. Flexibilidade para diferentes aplicações industriais.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/roda-pg-sem-aste-H3w2vqE22dkBubZfmSFEPU51j9B0gR.jpg",
      },
    ],

  },
  "lixa-taquinho": {
    title: "Lixa Taquinho",
    description: "Lixa manual ergonômica para acabamento preciso",
    image: "/lixa-taquinho-velcro-jeans.jpg",
    fullDescription:
      "Lixa taquinho com base ergonômica e sistema de fixação por velcro. Ideal para trabalhos manuais que exigem precisão e conforto. Especialmente desenvolvida para acabamento de jeans e tecidos.",
    features: [
      "Base ergonômica",
      "Sistema velcro",
      "Troca rápida",
      "Conforto no uso",
      "Acabamento uniforme",
      "Durabilidade superior",
    ],
    applications: [
      "Acabamento de jeans",
      "Lixamento de tecidos",
      "Efeitos em roupas",
      "Trabalhos manuais",
      "Produção têxtil",
    ],
    specifications: [
      { label: "Dimensões", value: "100mm x 70mm" },
      { label: "Fixação", value: "Velcro" },
      { label: "Material base", value: "Plástico ergonômico" },
      { label: "Grãos disponíveis", value: "60, 80, 100, 120, 150" },
      { label: "Aplicação principal", value: "Jeans e tecidos" },
    ],
    varieties: [
      {
        name: "Lixa Taquinho em Velcro para Jeans",
        description:
          "Sistema de fixação por velcro que permite troca rápida das lixas. Ideal para produção em série de jeans com efeitos desgastados.",
        image: "/lixa-taquinho-velcro-jeans.jpg",
      },
    ],
  },
  "lixa-taco": {
    title: "Lixa Taco",
    description: "Lixa especializada para acabamento de granitina",
    image: "/lixa-taco-granitina.jpg",
    fullDescription:
      "Lixa taco desenvolvida especialmente para acabamento e polimento de pisos de granitina. Disponível em formato de disco e rolo para diferentes aplicações e máquinas.",
    features: [
      "Alta resistência",
      "Não empasta",
      "Acabamento uniforme",
      "Longa vida útil",
      "Uso profissional",
      "Diversos formatos",
    ],
    applications: [
      "Polimento de granitina",
      "Acabamento de pisos",
      "Nivelamento de superfícies",
      "Restauração de pisos",
      "Preparação para impermeabilização",
    ],
    specifications: [
      { label: "Grãos disponíveis", value: "30, 40, 60, 80, 100, 120, 150, 220" },
      { label: "Formatos", value: "Disco e Rolo" },
      { label: "Material abrasivo", value: "Carbeto de silício" },
      { label: "Base", value: "Papel impermeável reforçado" },
      { label: "Aplicação", value: "Granitina e pisos cimentícios" },
    ],
    varieties: [
      {
        name: "Lixa Taco em Disco para Granitina",
        description:
          "Formato de disco para uso em politrizes e máquinas rotativas. Ideal para grandes áreas e acabamento rápido.",
        image: "/lixa-taco-disco.jpg",
      },
      {
        name: "Lixa Taco em Rolo para Granitina",
        description:
          "Formato em rolo para corte sob medida. Versatilidade para diferentes tamanhos de tacos e aplicações manuais.",
        image: "/lixa-taco-rolo.jpg",
      },
    ],
  },
  "maquinas-pneumaticas": {
    title: "Máquinas Pneumáticas",
    description: "Ferramentas de ar comprimido para trabalhos profissionais e industriais",
    image: "/pneumatic-tools-industrial.jpg",
    fullDescription:
      "Máquinas pneumáticas de alta performance alimentadas por ar comprimido. Ideais para aplicações industriais, oficinas e canteiros de obra. Oferecem potência, durabilidade e eficiência energética superior.",
    features: [
      "Alimentação por ar comprimido",
      "Alta potência e torque",
      "Baixo peso e compactas",
      "Durabilidade excepcional",
      "Manutenção simples",
      "Custo operacional reduzido",
      "Segurança em ambientes explosivos",
    ],
    applications: [
      "Parafusadeiras e chaves de impacto",
      "Lixadeiras e politrizes",
      "Furadeiras pneumáticas",
      "Grampeadores e pregos",
      "Esmerilhadoras",
      "Canteiros de obra",
      "Indústria automotiva",
      "Manutenção industrial",
    ],
    specifications: [
      { label: "Pressão de operação", value: "6 a 8 bar" },
      { label: "Consumo de ar", value: "Variável conforme modelo" },
      { label: "Potência", value: "0,5 a 3 HP" },
      { label: "Velocidade", value: "Até 3000 RPM" },
      { label: "Peso", value: "1,5 a 4 kg" },
      { label: "Conexão", value: "Rosca 1/4\" ou 3/8\"" },
    ],
    varieties: [
      {
        name: "Chave de Impacto Pneumática",
        description:
          "Ferramenta de alto torque para apertar e desapertar parafusos em trabalhos pesados. Ideal para indústria automotiva e manutenção.",
        image: "/chave-impacto-pneumatica.jpg",
      },
      {
        name: "Lixadeira Pneumática Orbital",
        description:
          "Lixadeira de movimento orbital para acabamento fino em madeira e metal. Excelente para trabalhos de polimento e preparação de superfícies.",
        image: "/lixadeira-orbital-pneumatica.jpg",
      },
      {
        name: "Furadeira Pneumática",
        description:
          "Furadeira compacta e leve para furação em diversos materiais. Perfeita para trabalhos em altura e espaços reduzidos.",
        image: "/furadeira-pneumatica.jpg",
      },
      {
        name: "Grampeador Pneumático",
        description:
          "Ferramenta para fixação rápida de materiais. Ideal para carpintaria, estofaria e construção civil.",
        image: "/grampeador-pneumatico.jpg",
      },
    ],
  
},

}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      let ultimaPosicao = 0;
      window.addEventListener("scroll", () => {
        const nav: any = document.querySelector("#nav");
        let atualPosicao = window.scrollY;

        if (atualPosicao > ultimaPosicao && atualPosicao > 0) {
          // nav.classList.remove( "" );
          nav.style.transform = "translateY(-100%)";
        } else {
          // nav.classList.add( "" );
          nav.style.transform = "translateY(0%)";
        }
        if (atualPosicao < 80) {
          // nav.classList.remove( "" );
          nav.style.transform = "translateY(0%)";
          nav.style.transition = "0.5s";
        }
        ultimaPosicao = atualPosicao;
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header id="nav" className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <nav className="container mx-auto flex items-center justify-between px-6 py-6">
          <Link href="#" className="flex cursor-pointer items-center gap-2">
            <Image width={224} height={67} src="/logo2.png" alt="" />
          </Link>

          <Button
            variant="outline"
            className="border-red-600 bg-transparent text-red-600 cursor-pointer hover:bg-red-600 hover:text-white"
          >
            Solicitar Orçamento
          </Button>
        </nav>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-6 pt-32">
        <Link href="/#produtos">
          <Button variant="ghost" className="mb-8 text-gray-600 cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para produtos
          </Button>
        </Link>
      </div>

      {/* Product Hero */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="aspect-square overflow-hidden border border-gray-200">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="mb-4 font-serif text-5xl font-light tracking-tight md:text-6xl">{product.title}</h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">{product.description}</p>
            <p className="mb-8 leading-relaxed text-gray-600">{product.fullDescription}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-red-600 text-white hover:scale-110 cursor-pointer">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center font-serif text-3xl font-light">Características</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Layers className="h-8 w-8 text-red-600" />
                <h2 className="font-serif text-3xl font-light">Aplicações</h2>
              </div>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span className="text-gray-600">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <Ruler className="h-8 w-8 text-red-600" />
                <h2 className="font-serif text-3xl font-light">Especificações Técnicas</h2>
              </div>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3">
                    <div className="mb-1 text-sm font-semibold text-gray-900">{spec.label}</div>
                    <div className="text-gray-600">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variedades */}
      {/* Varieties */}
      {"varieties" in product && product.varieties && (
        <section className="border-y border-gray-200 bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-center font-serif text-4xl font-light tracking-tight">Variedades Disponíveis</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
              Conheça nossa linha completa de lixas em folha, cada uma desenvolvida para aplicações específicas
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {product.varieties.map((variety, index) => (
                <div
                  key={index}
                  className="group overflow-hidden border border-gray-200 bg-white transition-all hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={variety.image || "/placeholder.svg"}
                      alt={variety.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 font-serif text-xl font-light">{variety.name}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{variety.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* CTA */}
      <section className="border-y border-gray-200 bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 font-serif text-4xl font-light tracking-tight">Interessado neste produto?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Fale com nossos especialistas e receba um orçamento personalizado
          </p>
          <Button size="lg" className="bg-red-600 text-white hover:scale-110 cursor-pointer">
            Falar com Especialista
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 Librás. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
