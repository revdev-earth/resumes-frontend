// Initial State

import type { BusinessCard, Resume } from "tree"

interface User {
  id: String
  me: {
    name: String
    email: String
  }
  business_card: BusinessCard
  resume: Resume
}

export const initialState = {
  auth: <any>{},
  user: <User>{},
  business_card: <any>{},
  resume: <Resume>{},
  templates: {
    actual: "",
    preferences: <string[]>[],
  },
}

export type InitialState = typeof initialState
