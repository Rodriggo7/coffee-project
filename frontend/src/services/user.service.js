import { getJson, putJson, del } from '../libs/api.js';

export async function getAllUsers() {
    return await getJson('/users');
}

export async function updateUser(id, userData) {
    return await putJson(`/users/${id}`, userData);
}

export async function deleteUser(id) {
    return await del(`/users/${id}`);
}