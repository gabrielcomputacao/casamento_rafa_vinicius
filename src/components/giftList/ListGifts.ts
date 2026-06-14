import type { StaticImageData } from "next/image";

import jantar from "../../../public/images/jantar.jpg";
import passagens from "../../../public/images/passagens-lua-de-mel.png";
import hospedagem from "../../../public/images/hospedagem-lua-de-mel.png";
import passeio from "../../../public/images/passeio-lua-de-mel.png";
import moveis from "../../../public/images/moveis-novo-lar.png";
import enxoval from "../../../public/images/enxoval-casa.png";
import eletrodomesticos from "../../../public/images/eletrodomesticos.png";
import mudanca from "../../../public/images/mudanca-novo-lar.png";
import cooktop from "../../../public/images/cooktop-inducao.png";
import lavadora from "../../../public/images/lavadora-roupas.png";
import coifa from "../../../public/images/coifa-parede.png";
import forno from "../../../public/images/forno-embutir.png";

export interface IGift {
  id: number;
  titulo: string;
  descricao: string;
  valor: string;
  foto: StaticImageData;
  pix?: string;
  link?: string;
}

const pix =
  "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6";

const gifts: IGift[] = [
  {
    id: 1,
    titulo: "Passagens para a Lua de Mel",
    descricao: "Contribuição para as passagens da nossa primeira viagem como casados.",
    valor: "R$ 800",
    foto: passagens,
    pix,
  },
  {
    id: 2,
    titulo: "Hospedagem da Lua de Mel",
    descricao: "Uma diária para aproveitarmos a lua de mel com tranquilidade.",
    valor: "R$ 750",
    foto: hospedagem,
    pix,
  },
  {
    id: 3,
    titulo: "Passeio na Lua de Mel",
    descricao: "Uma experiência especial para conhecermos o destino da nossa viagem.",
    valor: "R$ 650",
    foto: passeio,
    pix,
  },
  {
    id: 4,
    titulo: "Jantar na Lua de Mel",
    descricao: "Um jantar especial para celebrarmos essa nova etapa juntos.",
    valor: "R$ 700",
    foto: jantar,
    pix,
  },
  {
    id: 5,
    titulo: "Móveis para o Novo Lar",
    descricao: "Ajude-nos a completar os móveis essenciais da nossa casa.",
    valor: "R$ 800",
    foto: moveis,
    pix,
  },
  {
    id: 6,
    titulo: "Enxoval para a Casa",
    descricao: "Contribuição para roupas de cama, banho e itens essenciais do lar.",
    valor: "R$ 650",
    foto: enxoval,
    pix,
  },
  {
    id: 7,
    titulo: "Eletrodomésticos",
    descricao: "Uma ajuda para equiparmos a cozinha e facilitarmos nossa rotina.",
    valor: "R$ 750",
    foto: eletrodomesticos,
    pix,
  },
  {
    id: 8,
    titulo: "Cota para a Mudança",
    descricao: "Contribuição para organizarmos a mudança para o nosso novo lar.",
    valor: "R$ 500",
    foto: mudanca,
    pix,
  },
  {
    id: 9,
    titulo: "Cooktop de Indução 5 Bocas",
    descricao: "Cooktop de indução EOS 90 cm, preto, para equipar nossa cozinha.",
    valor: "Presente físico",
    foto: cooktop,
    link: "https://m.magazineluiza.com.br/cooktop-de-inducao-cinco-bocas-eos-90cm-preto-9500w-eci05ep-220v/p/ccd4ace474/ed/ck5b/?&seller_id=frigelar2&utm_source=google&utm_medium=cpc&utm_term=84409&utm_campaign=google_eco_per_ven_pla_ele_sor_3p_ed1-ed2-b-0326&utm_content=&partner_id=84409&gclsrc=aw.ds&gad_source=1&gad_campaignid=23600284448&gbraid=0AAAAAD4zZmQfpgmkSaPIH3nvUe6KdBrrr&gclid=CjwKCAjwuanRBhBSEiwAY5y6V7qVfYxECAMQG73L7bf7OkSf1oD4Y5JdPfrUVDkNJIxsX6FVFHMxDhoCnG8QAvD_BwE",
  },
  {
    id: 10,
    titulo: "Lavadora de Roupas 14 kg",
    descricao: "Lavadora Brastemp com cesto inox e 12 programas de lavagem.",
    valor: "Presente físico",
    foto: lavadora,
    link: "https://m.magazineluiza.com.br/lavadora-de-roupas-brastemp-14kg-cesto-inox-12-programas-de-lavagem-branca-bwj14abbna/p/240738100/ed/lava/?&seller_id=magazineluiza&utm_source=google&utm_medium=cpc&utm_term=84368&utm_campaign=google_eco_per_ven_pla_ele_sor_1p_ed1-0326&utm_content=&partner_id=84368&gclsrc=aw.ds&gad_source=1&gad_campaignid=23594641914&gbraid=0AAAAAD4zZmSAAe-nLY8ztzPc-g3-AuDGg&gclid=CjwKCAjwuanRBhBSEiwAY5y6V-8Sg8N5H4qb5Y3svqwSIVnA645CzWjkZsZ-CGNbjvZ5lCpc0i3hMhoCx5AQAvD_BwE",
  },
  {
    id: 11,
    titulo: "Coifa de Parede 90 cm",
    descricao: "Coifa Oster em inox com painel touch para a nossa cozinha.",
    valor: "Presente físico",
    foto: coifa,
    link: "https://m.magazineluiza.com.br/coifa-de-parede-oster-inox-touch-control-90cm/p/bae0h6gf74/ed/copa/?&seller_id=osteroficial&utm_source=google&utm_medium=cpc&utm_term=84407&utm_campaign=google_eco_per_ven_pla_ele_apo_3p_ed1-ed2-0326&utm_content=&partner_id=84407&gclsrc=aw.ds&gad_source=1&gad_campaignid=23600305193&gbraid=0AAAAAD4zZmSby1o0APE_N7o6_0ROsSF6J&gclid=CjwKCAjwuanRBhBSEiwAY5y6V067u8QtZL9zMCz6NW2HA4quMedon6UNfoTpsq_ck7_8DkBR9pqSqRoCL1cQAvD_BwE",
  },
  {
    id: 12,
    titulo: "Forno Elétrico de Embutir",
    descricao: "Forno elétrico Philco de 46 litros para completar nossa cozinha.",
    valor: "Presente físico",
    foto: forno,
    link: "https://m.magazineluiza.com.br/forno-de-embutir-eletrico-46-litros-philco/p/aaa3a1d2ck/ed/frne/?&seller_id=techshop&utm_source=google&utm_medium=cpc&utm_term=84408&utm_campaign=google_eco_per_ven_pla_ele_sor_3p_ed1-ed2-a-0326&utm_content=&partner_id=84408&gclsrc=aw.ds&gad_source=1&gad_campaignid=23595290313&gbraid=0AAAAAD4zZmTJtTiJlXmOeEfxERomn4na2&gclid=CjwKCAjwuanRBhBSEiwAY5y6VwtDgmgbX3jvDesGowmMN69fllpVtEdV21cZlFONXwOOy0t9D63B2BoCxRIQAvD_BwE",
  },
];

const displayOrder = [1, 9, 2, 3, 10, 4, 5, 11, 6, 7, 12, 8];

export const listGifts = displayOrder.map(
  (id) => gifts.find((gift) => gift.id === id)!,
);
