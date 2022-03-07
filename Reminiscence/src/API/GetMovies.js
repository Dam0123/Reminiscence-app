const baseUri = 'https://api.themoviedb.org';
const key = '7166fe0fb1a7539ceb3533ce77c77a40';

export const requestMovies = async (mode, type, page) => {
  return await fetch(
    `${baseUri}/3/${mode}/${type}?api_key=${key}&language=en-US&page=${page}`,
  )
    .then(res => {
      return res.ok ? res.json() : null;
    })
    .catch(err => {});
};

export const requestDataset = async (mode, type) => {
  return await fetch(
    `${baseUri}/3/${mode}/${type}?api_key=${key}&language=en-US&page=1`,
  )
    .then(res => {
      return res.ok ? res.json() : null;
    })
    .catch(err => {});
};
