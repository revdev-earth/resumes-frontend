// Initial State

// import type { BusinessCard, Resume } from "tree"

// interface User {
//   id: String
//   me: {
//     name: String
//     email: String
//   }
//   business_card: BusinessCard
//   resume: Resume
// }

// interface Templates {
//   actual: String
//   preferences: String[]
// }

interface Auth {
  token: String
}

export const initialState = {
  auth: <Auth>{},
}

export type InitialState = typeof initialState
