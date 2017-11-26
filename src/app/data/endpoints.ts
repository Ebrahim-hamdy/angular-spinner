export class EndPoints {

  baseUrl = './../assets/products.json';

  endpoints() {
    return {
      Products: {
        GetProducts: this.baseUrl
      }
    }
  }
}
