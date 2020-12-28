
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux';
import { RootState } from '../store/ConfigureStore';
  
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
