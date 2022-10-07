export default (httpClient) => ({
  register: async ({ name, email, password }) => {
    console.log({ email, password });
    const { data, request } = await httpClient.post('/auth/register', {
      name,
      email,
      password,
    });
    let errors = null;

    if (!data) {
      errors = {
        status: request.status,
        statusText: request.statusText,
      };
    }

    return {
      data,
      errors,
    };
  },

  login: async ({ email, password }) => {
    console.log({ email, password });
    const { data, request } = await httpClient.post('/auth/login', {
      email,
      password,
    });
    let errors = null;

    if (!data) {
      errors = {
        status: request.status,
        statusText: request.statusText,
      };
    }

    return {
      data,
      errors,
    };
  },
});
