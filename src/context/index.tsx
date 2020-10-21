import React, { createContext, useContext, useReducer } from 'react';
import createAsyncDispatch, { AsyncDispatch } from './createAsyncDispatch';
import { } from '../actions';

import { IPlaces } from '../types';

export const initialStatePlaces = {
    placesCarousel: [],
    placesFeature: []
}


interface IAppContext {
    placesCarousel?: [IPlaces | null, AsyncDispatch<ITrayAction, IAppContext>?]

}