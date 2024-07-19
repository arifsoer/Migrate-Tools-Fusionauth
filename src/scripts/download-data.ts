import { FusionAuthClient } from "@fusionauth/typescript-client";

const executeDownload = async () => {
  const apiKey = process.env.FUSIONAUTH_API_KEY;
  const baseUrl = process.env.FUSIONAUTH_BASE_URL;

  if (!apiKey || !baseUrl) {
    console.log("please setup your local connection first");
    return;
  }

  try {
    const client = new FusionAuthClient(apiKey, baseUrl);
  } catch (error) {
    console.error(error);
  }
};

export default executeDownload;
