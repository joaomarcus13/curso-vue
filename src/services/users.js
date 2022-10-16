export default (httpClient) => ({
  getMe: async () => {
    const { data } = await httpClient.get('/users/me');
    return {
      data,
    };
  },
  generateApikey: async () => {
    const response = await httpClient.post('/users/me/apikey');

    return {
      data: response.data,
    };
  },
});
