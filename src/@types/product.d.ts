interface Product {
  id: string;
  name: string;
  image_url: string;
  brand: string;
}
interface ProductError {
  msg: string;
  status: number;
}

interface ProductForm {
  name: string;
  image_url: string;
  brand: string;
}
interface ProductUrlParams {
  id: string;
}
