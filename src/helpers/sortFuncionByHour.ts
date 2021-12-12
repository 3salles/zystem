import { Person } from "../models"

export const sortFunctionByHour =  (a: Person, b: Person) => {
  const dateA = new Date(a.createdAt).getTime()
  const dateB =  new Date(b.createdAt).getTime()

  return dateA < dateB ? 1 : -1
} 