import config from "../config";

export default async (): Promise<string | null> => {
  const { baseURL, factLength } = config;
  try {
    const response = await fetch(`${baseURL}/fact?max_length=${factLength}`);

    if (!response.ok) {
      console.log(`Invalid Response: ${response.status}`);
      throw new Error(`Invalid Response: ${response.status}`);
    }

    const data = await response.json();

    if (!data || typeof data !== "object") {
      console.log(`Invalid response data: ${data}`);
      throw new Error(`Invalid response data: ${data}`);
    }

    if (!("fact" in data)) {
      console.log(`Invalid data type: ${data}`);
      throw new Error(`Invalid data type: ${data}`);
    }

    if (typeof data.fact !== "string") {
      console.log(`Invalid fact type: ${data.fact}`);
      throw new Error(`Invalid fact type: ${data.fact}`);
    }

    return data.fact;
  } catch (error: any) {
    console.log(error?.response?.data || error?.message);
    return null;
  }
};
