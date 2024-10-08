import { User } from '../models/user'
import { fetchData } from '../utils/FetchData'

const BACKEND_API = process.env.REACT_APP_BACKEND_API

export async function getLoggedInUser(): Promise<User | null> {
  const response = await fetchData(`${BACKEND_API}api/users`, { method: 'GET' })
  return response.json()
}

export interface SignUpCredentials {
  username: string
  email: string
  password: string
}

export async function signUp(credentials: SignUpCredentials): Promise<User> {
  const response = await fetchData(`${BACKEND_API}api/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
  return response.json()
}

export interface LoginCredentials {
  username: string
  password: string
}

export async function login(credentials: LoginCredentials): Promise<User> {
  const response = await fetchData(`${BACKEND_API}api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
  return response.json()
}

export async function logout(): Promise<void> {
  await fetchData(`${BACKEND_API}api/users/logout`, { method: 'POST' })
}
