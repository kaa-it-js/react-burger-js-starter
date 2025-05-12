export const AUTH_SERVER_URL = 'https://auth.nomoreparties.co';

export type TAuthData = {
  email: string;
  password: string;
};

export function add(a: string, b: string): string {
  return `${a}${b}`;
}

export const getResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export const register = (email: string, password: string): Promise<TAuthData> => {
  return fetch(`${AUTH_SERVER_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(getResponse<TAuthData>);
};
