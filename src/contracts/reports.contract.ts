export type APIStatusReportResponse = {
  status: string;
  result: {
    date: string;
    count: number;
  }[];
};

export type APISpeciesReportResponse = {
  species: string;
  result: {
    date: string;
    count: number;
  }[];
};

export type APIReportGeneral = {
  enAdopcionCount: number;
  adoptadasCount: number;
  conQrCount: number;
  averageTime: number;
};
