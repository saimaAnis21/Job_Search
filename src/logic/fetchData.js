const fetchData = async (url) => {
  let data = {};
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',

    });

    data = await response.json();
  } catch (e) {
    data = 'ERROR';
  }

  return data;
};

export default fetchData;
