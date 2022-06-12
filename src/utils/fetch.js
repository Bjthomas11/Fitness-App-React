export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c8d1093d2emshe89feb59f55d704p1a5df1jsn42411fad950c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const ytOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c8d1093d2emshe89feb59f55d704p1a5df1jsn42411fad950c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
  }
};
