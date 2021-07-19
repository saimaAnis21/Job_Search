import fetchData from './fetchData';

const getCompanies = async () => {
  const url = 'https://www.themuse.com/api/public/companies?api_key=52c53b7a661df891c7d5773f63a1237ea2da27a628f7e95455a2b73ae669136e&page=';
  const data = [];
  const companies = [{ id: 0, name: '--' }];
  data[0] = await fetchData(`${url}1`);
  data[1] = await fetchData(`${url}2`);
  data[2] = await fetchData(`${url}3`);

  if (data[2] === 'ERROR') {
    return 'ERROR';
  }
  for (let j = 0; j <= 2; j += 1) {
    for (let i = 0; i < data[j].results.length; i += 1) {
      companies.push({
        id: data[j].results[i].id,
        name: data[j].results[i].name,
      });
    }
  }

  return companies;
};

export default getCompanies;
