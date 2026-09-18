// Definimos la URL base de tu backend (si no hay variable de entorno, usa localhost)
export const urlBase = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const headers = {};

export async function fetchApi(service, options = {}) {
    options = {...options};
    options.headers = {
        ...headers,
        ...options.headers,
    };

    // Si existe un token guardado, lo agregamos automáticamente a todas las peticiones
    const token = localStorage.getItem('auth_token');
    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (options.json) {
        options.headers['Accept'] = 'application/json'; // Simplificado
    }

    if (options.body) {
        if (typeof options.body !== 'string') {
            options.body = JSON.stringify(options.body);
        }
        options.headers['Content-Type'] = 'application/json'; // Simplificado
    }

    let query = '';
    if (options.query) {
        if (typeof options.query === 'string') {
            query = options.query;
        } else {
            query = new URLSearchParams(options.query).toString();
        }

        if (query.length) {
            query = `?${query}`;
        }
    }

    // Hacemos el fetch
    let res = await fetch(`${urlBase}${service}${query}`, options);

    // Manejo de errores global
    if (!res.ok) {
        // Intentamos obtener el mensaje de error del backend
        let errorMessage = "El resultado no es OK.";
        try {
            const errorData = await res.json();
            errorMessage = errorData.error || errorData.message || errorMessage;
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            // Si no es JSON, quizás sea texto plano
            const errorText = await res.text();
            if (errorText) errorMessage = errorText;
        }
        throw new Error(errorMessage);
    }

    // Si esperamos JSON, lo parseamos
    if (options.json) {
        // Validación opcional de Content-Type, a veces útil quitarla si el backend no es estricto
        // if (!res.headers.get('Content-Type')?.startsWith('application/json')) { ... }
        
        // Verificamos si hay contenido antes de parsear (evita error de JSON vacío)
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    }

    return res;
}

export async function post(service, body, options) {
    return await fetchApi(service, {...options, body, method: 'POST'});
}

export async function put(service, body, options) {
    return await fetchApi(service, {...options, body, method: 'PUT'});
}

export async function del(service, options) {
    return await fetchApi(service, {...options, method: 'DELETE'});
}

export async function get(service, query, options) {
    return await fetchApi(service, {...options, query, method: 'GET'});
}

export async function postJson(service, body, options) {
    return await post(service, body, {...options, json: true});
}

export async function putJson(service, body, options) {
    return await put(service, body, {...options, json: true});
}

export async function getJson(service, query, options) {
    return await get(service, query, {...options, json: true});
}