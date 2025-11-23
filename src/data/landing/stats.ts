export interface Stat {
  value: number;
  label: string;
  prefix?: string;
}

export const stats: Stat[] = [
  {
    value: 8,
    label: "Años de experiencia",
    prefix: "+",
  },
  {
    value: 100,
    label: "Destinos de viaje",
    prefix: "+",
  },
  {
    value: 500,
    label: "Clientes felices",
    prefix: "+",
  },
];

