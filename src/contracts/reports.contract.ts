export type APIStatusReportResponse = {
  status: string;
  result: {
    date: string;
    count: number;
  }[];
};

export type APISpeciesReportResponse = {
  speciesId: number;
  result: {
    date: string;
    count: number;
  }[];
};
