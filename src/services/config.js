import querystring from 'querystring';

export const getConfig = () => {
  const pars = {
    api_key: '244f0e42b58da27a1a252ded03c528f7',
  };

  const url = `https://api.themoviedb.org/3/configuration?${querystring.stringify(pars)}`;
  return url;
}
