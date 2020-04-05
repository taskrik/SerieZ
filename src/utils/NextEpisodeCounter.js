import moment from 'moment';

export const nextEpisode = (date) => {
  console.log('date', date);
  const dateFromNow = moment(date).endOf('hours').fromNow();
  const finalDate = `${date} (${dateFromNow})`;
  return finalDate;
};
