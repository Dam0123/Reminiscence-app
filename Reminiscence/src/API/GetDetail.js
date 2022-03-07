const baseUri = 'https://api.themoviedb.org';
const key = '7166fe0fb1a7539ceb3533ce77c77a40';

export const requestDetail = async (mode, id) => {
  console.log(`${baseUri}/3/${mode}/${id}?api_key=${key}&language=en-US`);
  return await fetch(`${baseUri}/3/${mode}/${id}?api_key=${key}&language=en-US`)
    .then(res => {
      return res.ok ? res.json() : null;
    })
    .catch(err => {});
};
