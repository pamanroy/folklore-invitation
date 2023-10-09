import { Reducer, useReducer } from 'react'

export function useSimpleReducer<T>(initialValue: T) {
  return useReducer<Reducer<T, Partial<T>>>((prevState, newState) => ({ ...prevState, ...newState }), initialValue)
}

interface FetchDataSchema<T> {
  isFetching: boolean
  data: T
  error: Error | null
}

// @ts-ignore
export function useFetchDataSchema<Data>(defaultValue: FetchDataSchema<Data> = { isFetching: false, data: null, error: null }) {
  return useSimpleReducer<FetchDataSchema<Data>>(defaultValue)
}
