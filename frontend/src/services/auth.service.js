import { postJson } from '../libs/api.js';

export async function login(email, password) {
    return await postJson('/auth/login', { email, password });
}

export async function register(userData) {
    return await postJson('/auth/register', userData);
}