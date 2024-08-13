import { Note } from '../models/note'
import { fecthData } from '../utils/FetchData'

const BACKEND_API = process.env.BACKEND_API

export async function fetchNotes(): Promise<Note[]> {
  const response = await fecthData(`${BACKEND_API}/api/notes`, {
    method: 'GET'
  })
  return response.json()
}

export interface NoteInput {
  title: string
  text?: string
}

export async function createNote(note: NoteInput): Promise<Note> {
  const response = await fecthData(`${BACKEND_API}/api/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  return response.json()
}

export async function updateNote(
  noteId: string,
  note: NoteInput
): Promise<Note> {
  const response = await fecthData(`${BACKEND_API}/api/notes/${noteId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  return response.json()
}

export async function deleteNote(noteId: string): Promise<void> {
  await fecthData(`${BACKEND_API}/api/notes/${noteId}`, {
    method: 'DELETE'
  })
}
