export type Country = {
  name: Name;
  capital: string[];
  flags: Flags;
  population: number;
  region: string;
};

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type NativeName = {
  deu: Deu;
};

type Deu = {
  official: string;
  common: string;
};

type Flags = {
  png: string;
  svg: string;
  alt: string;
};
