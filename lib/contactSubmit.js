const API_URL =
  "https://api.ayatiworks.com/api/v1/public/elite-global-school/contact_us/records";
const API_KEY =
  "c85f8310fa24d2959b70d393a8e8fd3ce4a6b1b2ca429ec6d4e6b90401225cd7";

export async function submitContactForm(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    throw new Error(`Contact form request failed with status ${response.status}`);
  }

  return response;
}
