const LOCAL_API_URL = "/api/contact";
const DIRECT_API_URL =
  "https://api.ayatiworks.com/api/v1/public/elite-global-school/contact_us/records";
const API_KEY =
  "ad0b8863350e55490f2777cb72a836fcb38c27d6e65bb960fd2c273b508e4696";

export async function submitContactForm(data) {
  try {
    const response = await fetch(LOCAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response;
    }

    if (response.status === 404 || response.status === 405) {
      throw new Error(`Local API route returned status ${response.status}`);
    }

    const message = await response.text().catch(() => "");
    throw new Error(
      `Contact form request failed with status ${response.status}${message ? `: ${message}` : ""}`,
    );
  } catch (err) {
    console.warn("Primary API route error, attempting direct API:", err);
    const directResponse = await fetch(DIRECT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!directResponse.ok) {
      const message = await directResponse.text().catch(() => "");
      throw new Error(
        `Contact form request failed with status ${directResponse.status}${message ? `: ${message}` : ""}`,
      );
    }

    return directResponse;
  }
}

