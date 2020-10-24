const countriesURL = "https://restcountries.eu/rest/v2/all";
const countryURL = "https://restcountries.eu/rest/v2/name/";

export async function getCountries() {
  let response = await fetch(countriesURL);
  let data = await response.json();
  return data;
}

export async function getCountry(country) {
  let response = await fetch(`${countryURL}${country}`);
  let data = await response.json();
  return data[0];
}
