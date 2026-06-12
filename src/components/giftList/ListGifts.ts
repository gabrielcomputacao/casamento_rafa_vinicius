
export interface IGift  {
  id: number;
  titulo: string;
  descricao: string;
  valor: string;
  foto: any;
  pix: string;
};

import luaMel from '../../../public/images/lugarluamel.jpg'
import jantar from '../../../public/images/jantar.jpg'
import decoracao from '../../../public/images/decoracaocasa.jpg'
import spa from '../../../public/images/spa.jpg'
import whinecheese from '../../../public/images/vinhosqueijo.jpg'
import presente from '../../../public/images/presentecasal.jpg'

export const listGifts: IGift[] = [
  {
    id: 1,
    titulo: "Lua de Mel",
    descricao: "Contribua para nossa viagem dos sonhos e ajude a criar memórias inesquecíveis.",
    valor: "R$ 500",
    foto: luaMel,
    pix: "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6",
  },
  {
    id: 2,
    titulo: "Jantar Romântico",
    descricao: "Uma noite especial para dois, celebrando o amor com boa comida e vinho.",
    valor: "R$ 200",
    foto: jantar,
    pix: "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6",
  },
  {
    id: 3,
    titulo: "Decoração da Casa",
    descricao: "Ajude a deixar nosso lar ainda mais bonito e aconchegante.",
    valor: "R$ 350",
    foto: decoracao,
    pix: "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6",
  },
  {
    id: 4,
    titulo: "Experiência Spa",
    descricao: "Um dia de relaxamento e cuidado para começarmos bem nossa vida juntos.",
    valor: "R$ 280",
    foto: spa,
    pix: "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6",
  },
  {
    id: 5,
    titulo: "Vinho & Queijos",
    descricao: "Uma noite aconchegante em casa com os melhores rótulos e petiscos.",
    valor: "R$ 150",
    foto: whinecheese,
    pix: "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6",
  },
  {
    id: 6,
    titulo: "Surpresa do Casal",
    descricao: "Deixamos você decidir — qualquer valor será usado com muito carinho.",
    valor: "Livre",
    foto: presente,
    pix: "00020126360014BR.GOV.BCB.PIX0114+55319937799215204000053039865802BR5925Gabriel Henrique da Silve6009SAO PAULO62140510hS9oI54x3k630412A6",
  },
];