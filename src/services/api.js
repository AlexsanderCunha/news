import axios from "axios";

const getData = async () => {
  try {
    const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=AnTzBZl8FXJMVozrQh6AzLwSrkfYEZjV');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getData;
