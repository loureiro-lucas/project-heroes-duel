export const fetchHeroes = () => {
  return fetch('https://homologacao3.azapfy.com.br/api/ps/metahumans')
    .then((response) => response.json());
}
