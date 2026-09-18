import { getJson, postJson, putJson, del } from '../libs/api.js';

export async function getAllProducts() {
    return await getJson('/products');
}

export async function createProduct(productData) {
    return await postJson('/products', productData);
}

export async function updateProduct(id, productData) {
    return await putJson(`/products/${id}`, productData);
}

export async function deleteProduct(id) {
    return await del(`/products/${id}`);
}