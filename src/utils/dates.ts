import moment from 'moment';

export const dateFormatter = (date: string, initialFormat: string, finalFormat: string) => {
  return moment(date, initialFormat).locale('es').format(finalFormat);
};
