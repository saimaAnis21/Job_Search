import fetchData from '../logic/fetchData';

describe('Data received from fetchData is valid', () => {
  const url = 'https://www.themuse.com/api/public/companies?api_key=52c53b7a661df891c7d5773f63a1237ea2da27a628f7e95455a2b73ae669136e&page=1';
  test('the data received from api is not Null ', async () => {
    try {
      const data = await fetchData(url);
      expect(data).not.toBeNull();
    } catch (e) {
      expect(e).toMatch('ERROR');
    }
  });

  test('the data received from api is an instance of Object ', async () => {
    try {
      const data = await fetchData(url);
      expect(data).toBeInstanceOf(Object);
    } catch (e) {
      expect(e).toMatch('ERROR');
    }
  });

  test('the data received from api matches an Object ', async () => {
    try {
      const data = await fetchData(url);
      const obj = {
        page: 1,
        page_count: 33,
        items_per_page: 20,
        took: 1,
        timed_out: false,
        total: 656,
        aggregations: {},
      };
      expect(data).toMatchObject(obj);
    } catch (e) {
      expect(e).toMatch('ERROR');
    }
  });
});

test('the fetch fails with an error when wrong query provided', async () => {
  const url = 'https://www.themuse.com/api/public/companies?api_key=52c53b7a661df891c7d5773f63a1237ea2da27a628f7e95455a2b73ae669136e&page=';

  try {
    await fetchData(url);
  } catch (e) {
    expect(e).toMatch('ERROR');
  }
});
