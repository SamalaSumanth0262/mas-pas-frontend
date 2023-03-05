import axios from 'axios';
// can be moved to separate file system like Endpoint.js
const BASE_URL = 'http://localhost:8000/';
const GET_CURRENCY_ENDPOINT = BASE_URL + 'api/v1/currency';
class ApiService {
  static ApiError(err) {
    console.log(
      '🚀 ~ file: ApiService.js:7 ~ ApiService ~ ApiError ~ err',
      err
    );
  }
  static async getCurrency() {
    try {
      let result = await axios.get(GET_CURRENCY_ENDPOINT);
      return result.data;
    } catch (err) {
      ApiService.ApiError(err);
    }
  }
}

export default ApiService;
