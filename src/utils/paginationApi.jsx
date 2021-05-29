import axios from 'axios';
import { constants } from './constants';

export default class PaginationApi {
  constructor(apiPath, amountPerPage) {
    this.apiPath = `${constants.API_URL}${apiPath}`;
    this.amountPerPage = amountPerPage;
  }

  async getContent(currentPage, filter) {
    try {
      const path = buildPath({
        page: currentPage,
        amountPerPage: this.amountPerPage,
        ...filter,
      });
      const result = await axios.get(`${this.apiPath}${path}`);
      return {
        success: true,
        message: 'Información obtenida',
        data: result.data,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message:
          error.response != null
            ? error.response.data.message
            : 'Ocurrió un error',
      };
    }
  }
}

function buildPath(parameters) {
  const { page, amountPerPage, abv } = parameters;
  const [abvGt, abvLt] = abv.split(' - ');
  const abvFilter = abv !== '' ? `&abv_gt=${abvGt}&abv_lt=${abvLt}` : '';
  return `?page=${page}&per_page=${amountPerPage}${abvFilter}`;
}
