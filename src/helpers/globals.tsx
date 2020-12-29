
import { Dimensions } from 'react-native';
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux';
import { RootState } from '../store/ConfigureStore';
  
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
// @ts-ignore
export function replaceUsingIndex(data,index,replaceMent){
  if(index >= data.length) return data;

  return data.substring(0,index)+replaceMent+data.substring(index+1)
}