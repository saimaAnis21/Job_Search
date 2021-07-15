const fetchData = async (url) => {
  let data = {};
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',

    });

    data = await response.json();
  } catch (e) {
    console.log('error msg: Error getting data');
  }

  return data;
};

export default fetchData;
