const API_BASE_URL = 'https://api.tvmaze.com';

export async function APIGet(queryStrings) {
  const response = await fetch(`${API_BASE_URL}${queryStrings}`).then(r =>
    r.json()
  );
  return response;
}
