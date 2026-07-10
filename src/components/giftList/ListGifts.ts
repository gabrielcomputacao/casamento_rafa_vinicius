import type { StaticImageData } from "next/image";

import jantar from "../../../public/images/jantar.jpg";
import passagens from "../../../public/images/passagens-lua-de-mel.png";
import hospedagem from "../../../public/images/hospedagem-lua-de-mel.png";
import passeio from "../../../public/images/passeio-lua-de-mel.png";
import moveis from "../../../public/images/moveis-novo-lar.png";
import enxoval from "../../../public/images/enxoval-casa.png";
import eletrodomesticos from "../../../public/images/eletrodomesticos.png";
import mudanca from "../../../public/images/mudanca-novo-lar.png";
import spa from "../../../public/images/spa.jpg";
import vinhosQueijo from "../../../public/images/vinhosqueijo.jpg";
import lugarLuaMel from "../../../public/images/lugarluamel.jpg";
import presenteCasal from "../../../public/images/presentecasal.jpg";

export type GiftImageSource = StaticImageData | string;

export interface IBaseGift {
  id: string;
  titulo: string;
  descricao: string;
  valor: string;
  foto: GiftImageSource;
}

export interface IPixGift extends IBaseGift {
  type: "pix";
  pix: string;
}

export interface IPhysicalGift extends IBaseGift {
  type: "physical";
  storeName: string;
  link: string;
}

export type IGift = IPixGift | IPhysicalGift;

const pix =
  "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6";

export const pixGifts: IPixGift[] = [
  {
    id: "pix-passagens",
    type: "pix",
    titulo: "Passagens para a Lua de Mel",
    descricao: "Contribuição para as passagens da nossa primeira viagem como casados.",
    valor: "R$ 800",
    foto: passagens,
    pix,
  },
  {
    id: "pix-hospedagem",
    type: "pix",
    titulo: "Hospedagem da Lua de Mel",
    descricao: "Uma diária para aproveitarmos a lua de mel com tranquilidade.",
    valor: "R$ 750",
    foto: hospedagem,
    pix,
  },
  {
    id: "pix-passeio",
    type: "pix",
    titulo: "Passeio na Lua de Mel",
    descricao: "Uma experiência especial para conhecermos o destino da nossa viagem.",
    valor: "R$ 650",
    foto: passeio,
    pix,
  },
  {
    id: "pix-jantar",
    type: "pix",
    titulo: "Jantar na Lua de Mel",
    descricao: "Um jantar especial para celebrarmos essa nova etapa juntos.",
    valor: "R$ 700",
    foto: jantar,
    pix,
  },
  {
    id: "pix-moveis",
    type: "pix",
    titulo: "Móveis para o Novo Lar",
    descricao: "Ajude-nos a completar os móveis essenciais da nossa casa.",
    valor: "R$ 800",
    foto: moveis,
    pix,
  },
  {
    id: "pix-enxoval",
    type: "pix",
    titulo: "Enxoval para a Casa",
    descricao: "Contribuição para roupas de cama, banho e itens essenciais do lar.",
    valor: "R$ 650",
    foto: enxoval,
    pix,
  },
  {
    id: "pix-eletrodomesticos",
    type: "pix",
    titulo: "Eletrodomésticos",
    descricao: "Uma ajuda para equiparmos a cozinha e facilitarmos nossa rotina.",
    valor: "R$ 750",
    foto: eletrodomesticos,
    pix,
  },
  {
    id: "pix-mudanca",
    type: "pix",
    titulo: "Cota para a Mudança",
    descricao: "Contribuição para organizarmos a mudança para o nosso novo lar.",
    valor: "R$ 500",
    foto: mudanca,
    pix,
  },
  {
    id: "pix-cafe-manha",
    type: "pix",
    titulo: "Café da Manhã Especial",
    descricao: "Um momento leve e gostoso para aproveitarmos juntos depois do casamento.",
    valor: "R$ 800",
    foto: vinhosQueijo,
    pix,
  },
  {
    id: "pix-dia-descanso",
    type: "pix",
    titulo: "Dia de Descanso",
    descricao: "Uma experiência de descanso para recarregarmos as energias como casal.",
    valor: "R$ 750",
    foto: spa,
    pix,
  },
  {
    id: "pix-lugar-especial",
    type: "pix",
    titulo: "Lugar Especial na Lua de Mel",
    descricao: "Uma contribuição para conhecermos um cantinho especial na viagem.",
    valor: "R$ 650",
    foto: lugarLuaMel,
    pix,
  },
  {
    id: "pix-brinde-noivos",
    type: "pix",
    titulo: "Brinde dos Noivos",
    descricao: "Um carinho para celebrarmos essa nova fase com um brinde especial.",
    valor: "R$ 700",
    foto: presenteCasal,
    pix,
  },
];

export const physicalGifts: IPhysicalGift[] = [
  {
    id: "fisico-forno-embutir-philco",
    type: "physical",
    titulo: "Forno de Embutir Elétrico 46 Litros Philco",
    descricao: "Forno elétrico de embutir Philco, 46 litros, com funções de assar, gratinar, grelhar e dourar.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/forno-de-embutir-eletrico-46-litros-philco/techshop/frnphc00042a/6670c77049ffdb0b51233daf710cdffc.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/forno-de-embutir-eletrico-46-litros-philco/p/aaa3a1d2ck/ed/frne/",
  },
  {
    id: "fisico-coifa-oster",
    type: "physical",
    titulo: "Coifa de Parede Oster Inox Touch Control 90cm",
    descricao: "Coifa de parede Oster em inox, 90 cm, com painel touch control e iluminação em LED.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/coifa-de-parede-oster-inox-touch-control-90cm/osteroficial/12640/885e9fe48f809a0a8d5c8f18a61cadc4.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/coifa-de-parede-oster-inox-touch-control-90cm/p/bae0h6gf74/ed/copa/",
  },
  {
    id: "fisico-cooktop-inducao-eos",
    type: "physical",
    titulo: "Cooktop de Indução 5 Bocas EOS 90cm",
    descricao: "Cooktop de indução EOS, 90 cm, preto, 9500W, com 5 bocas e painel touch.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/cooktop-de-inducao-cinco-bocas-eos-90cm-preto-9500w-eci05ep-220v/frigelar2/kit8787/2f3ceccf3fb9a916abacefb8a51518b3.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/cooktop-de-inducao-cinco-bocas-eos-90cm-preto-9500w-eci05ep-220v/p/ccd4ace474/ed/ck5b/",
  },
  {
    id: "fisico-panela-brinox-vanilla",
    type: "physical",
    titulo: "Jogo de Panelas Brinox Ceramic Life 8 Peças",
    descricao: "Jogo de panelas antiaderente cerâmico Brinox Smart Plus, cor Vanilla, 8 peças.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/jogo-de-panelas-brinox-antiaderente-ceramic-life-8-pecas-smart-plus-vanilla/mimorada/15906472915/791e2040f3b7111dde885890704bc748.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/jogo-de-panelas-brinox-antiaderente-ceramic-life-8-pecas-smart-plus-vanilla/p/bbe334600a/ud/cjpn/",
  },
  {
    id: "fisico-panela-mimo-style",
    type: "physical",
    titulo: "Jogo de Panelas 17 Peças Premium Indução",
    descricao: "Jogo de panelas Mimo Style com revestimento cerâmico antiaderente de 4mm, compatível com indução.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/jogo-de-panelas-17-pecas-premium-inducao-revestimento-ceramico-antiaderente-4mm-mimo-style/feherosshop/15104909877/d53507b9c2db0e94939a5db135151f4b.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/jogo-de-panelas-17-pecas-premium-inducao-revestimento-ceramico-antiaderente-4mm-mimo-style/p/ag3dc78ead/ud/cjpn/",
  },
  {
    id: "fisico-multiprocessador-philco",
    type: "physical",
    titulo: "Multiprocessador Philco 1000W 5 em 1",
    descricao: "Multiprocessador Philco PMP10A, 1000W, com 5 funções para facilitar o preparo das refeições.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/multiprocessador-philco-1000w-5-em-1-pmp10a/alecolchoesemoveis/44670a283b4011f0b72642010a480899/92fe6a570e355038d81db57b0d3823b5.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/multiprocessador-philco-1000w-5-em-1-pmp10a/p/jech634e5h/ep/prsa/",
  },
  {
    id: "fisico-purificador-electrolux",
    type: "physical",
    titulo: "Purificador de Água Electrolux Compacto",
    descricao: "Purificador Electrolux eletrônico, painel digital, bivolt, para água natural, fria ou gelada.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/purificador-electrolux-eletronico-compacto-efficient-painel-digital-bivolt-cinza-pe11x/electrolux/2002605/182a853ba54e20cd1852627202d325ab.jpg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/purificador-electrolux-eletronico-compacto-efficient-painel-digital-bivolt-cinza-pe11x/p/714958200/ep/papd/",
  },
  {
    id: "fisico-jantar-pomerode",
    type: "physical",
    titulo: "Aparelho de Jantar 42 Peças Pomerode",
    descricao: "Aparelho de jantar Schmidt em porcelana, 42 peças, para recebermos família e amigos.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/aparelho-de-jantar-42-pecas-pomerode-schmidt/lojawebcontinentalmarketplace/mkp001359000161/42f8ca42c2c1bea4014c5e021672f069.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/aparelho-de-jantar-42-pecas-pomerode-schmidt/p/aed12bcdb3/ud/apja/",
  },
  {
    id: "fisico-jantar-ryo-maresia",
    type: "physical",
    titulo: "Aparelho de Jantar 20 Peças Ryo Maresia",
    descricao: "Aparelho de jantar Oxford, coleção Ryo Maresia, 20 peças, em porcelana.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/aparelho-de-jantar-20-pecas-ryo-maresia-oxford/lojawebcontinentalmarketplace/mkp001359002291/eaf0d252b9c1e772db082e693d9cc5a7.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/aparelho-de-jantar-20-pecas-ryo-maresia-oxford/p/gb789h5ebh/ud/apja/",
  },
  {
    id: "fisico-faqueiro-pisa",
    type: "physical",
    titulo: "Faqueiro 30 Peças Aço Inox Pisa Wolff",
    descricao: "Faqueiro Wolff Pisa em aço inox, 30 peças, para até 6 pessoas.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/faqueiro-30-pecas-aco-inox-pisa-wolff-rojemac/fekibeststore/p7625/38c9cc4f4a4574c82dc31af5029ca2db.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/faqueiro-30-pecas-aco-inox-pisa-wolff-rojemac/p/bg21746h43/ud/faqu/",
  },
  {
    id: "fisico-faqueiro-viena",
    type: "physical",
    titulo: "Faqueiro Viena 54 Peças em Inox Wolff",
    descricao: "Faqueiro Wolff Viena em inox, conjunto completo com 54 peças.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/faqueiro-viena-com-54-pecas-em-inox-wolff/lojawebcontinentalmarketplace/mkp005045000370/9aded365feefdc3715c589c3688ac5c4.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/faqueiro-viena-com-54-pecas-em-inox-wolff/p/cd4a5760ag/ud/faqu/",
  },
  {
    id: "fisico-tacas-pearl",
    type: "physical",
    titulo: "Jogo de 12 Taças de Sobremesa Cristal Pearl",
    descricao: "Taças de sobremesa Wolff em cristal, detalhes de bolinhas peroladas, 200ml, kit com 12 unidades.",
    valor: "Presente físico",
    foto: "https://a-static.mlcdn.com.br/470x352/jogo-12-taca-de-sobremesa-cristal-pearl-bolinha-wolff-200ml/lojawebcontinentalmarketplace/mkp005643010574/f13fc7d8a05dab48bf2d88f552324a61.jpeg",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/jogo-12-taca-de-sobremesa-cristal-pearl-bolinha-wolff-200ml/p/ah4255608c/ud/tcsb/",
  },
  {
    id: "fisico-lavadora-brastemp-14kg",
    type: "physical",
    titulo: "Lavadora de Roupas Brastemp 14kg Cesto Inox",
    descricao: "Lavadora Brastemp 14kg, cesto inox, 12 programas de lavagem, com ciclo tira-manchas e sensor de nível de água.",
    valor: "Presente físico",
    foto: "https://brastemp.vtexassets.com/arquivos/ids/271205-800-auto?v=638997704625270000&width=800&height=auto&aspect=true",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/lavadora-de-roupas-brastemp-14kg-cesto-inox-12-programas-de-lavagem-branca-bwj14abana/p/240738000/ed/lava/",
  },
  {
    id: "fisico-lava-loucas-brastemp",
    type: "physical",
    titulo: "Lava-Louças Brastemp 8 Serviços Inox",
    descricao: "Lava-louças Brastemp BLF08BS, inox, para até 8 serviços, com múltiplos ciclos de lavagem e baixo consumo de água e energia.",
    valor: "Presente físico",
    foto: "https://brastemp.vtexassets.com/arquivos/ids/287224-800-auto?v=639153077306130000&width=800&height=auto&aspect=true",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/lava-loucas-brastemp-8-servicos-inox-blf08bs/p/ha9agg4h4d/ed/l08s/",
  },
  {
    id: "fisico-aspirador-electrolux-stk12",
    type: "physical",
    titulo: "Aspirador de Pó Portátil e Vertical Electrolux 1100W",
    descricao: "Aspirador Electrolux STK12, 1100W, modelo 2 em 1, com filtro HEPA e cabo elétrico de 5 metros.",
    valor: "Presente físico",
    foto: "https://electrolux.vtexassets.com/arquivos/ids/281863-1000-1000?v=638905372275800000&width=1000&height=1000&aspect=true&format=auto",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/aspirador-de-po-portatil-e-vertical-electrolux-1100w-stk12-preto/p/021499200/ep/apdv/",
  },
  {
    id: "fisico-robo-aspirador-electrolux-erb60",
    type: "physical",
    titulo: "Robô Aspirador Electrolux Experience ERB60",
    descricao: "Robô aspirador Electrolux 4 em 1, varre, aspira e passa pano úmido ou seco, com mapeamento a laser e compatível com Alexa.",
    valor: "Presente físico",
    foto: "https://electrolux.vtexassets.com/arquivos/ids/284530-1000-1000?v=638966653315370000&width=1000&height=1000&aspect=true&format=auto",
    storeName: "Magazine Luiza",
    link: "https://www.magazineluiza.com.br/robo-aspirador-limpa-piso-electrolux-experience-erb60-140w-com-mapeamento-compativel-com-alexa-3016aeg0002/p/241313000/ep/eprb/",
  },
];
