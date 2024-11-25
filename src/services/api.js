export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error('API Fetch Error: ', error);
    throw error;
  }
};

export const cricketApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '827e131551msh6e3c0230a9db7d5p1246bejsn4975d4f55afa',
    'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com',
  },
};

export const tennisApiOptions = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': '827e131551msh6e3c0230a9db7d5p1246bejsn4975d4f55afa',
		'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
	},
};
