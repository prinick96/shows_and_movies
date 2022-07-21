import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, ItemDispatch } from './store'

export const useItemDispatch: () => ItemDispatch = useDispatch
export const useItemSelector: TypedUseSelectorHook<RootState> = useSelector