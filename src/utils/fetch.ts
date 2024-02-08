const API_KEY = 'kLIncJn8erndXYJGFB4b9Laf9W4AaKxrz6JHrR5v';
const API_URL = 'https://api.nasa.gov/planetary/apod'; //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10

export default async (urlParams: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== 'undefined' && urlParams?.length > 0
          ? urlParams
          : ''
      }`,
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
fetch(API_URL, {method: 'GET'})
  .then(response => response.json())
  .catch(error => console.log(error));
