import axios from 'axios';

const apiUri = process.env.NEXT_PUBLIC_API_URI;

// fetcher accepts relative request's url.
export const getRequest: any = (url: string) =>
  axios
    .get(`${apiUri}${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.log(`error: ${e}`));

// poster accepts relative request's url.
export const postRequest: any = async (url: string, data: any) => {
  try {
    const response = await axios.post(`${apiUri}${url}`, data);
    return response.data;
  } catch (e) {
    console.log(`error: ${e}`);
  }
};