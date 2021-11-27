export const fetchHeroes = () => {
  return fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans')
    .then((response) => response.json());
}
