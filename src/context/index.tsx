import React, { createContext, useContext, useReducer } from 'react';
import createAsyncDispatch, { AsyncDispatch } from './createAsyncDispatch';
import { IPlacesAction } from '../actions';
import { placesReducer } from '../reducers';

import { IPlaces } from '../types';

export const initialStatePlacesCarousel = {
    placesCarousel: [],
};

export const initialStatePlacesFeature = {
    placesFeature: []
};

interface IAppContext {
    placesCarousel?: [IPlaces | null, AsyncDispatch<IPlacesAction, IAppContext>?];
    placesFeatured?: [IPlaces | null, AsyncDispatch<IPlacesAction, IAppContext>?];
}

interface IProps {
    children: any
}


export const AppModel = {};

export const AppContext = createContext<IAppContext>(AppModel);


export const AppState = () => useContext<IAppContext>(AppContext);


export const AppProvider: React.FC = ({ children }) => {

    const [placesCarousel, placesCarouselDispatch] = useReducer(
        placesReducer,
        initialStatePlacesCarousel
    );

    const [placesFeature, placesFeatureDispatch] = useReducer(
        placesReducer,
        initialStatePlacesCarousel
    );

    const state: IAppContext = {
        placesCarousel: [placesCarousel],
        placesFeatured: [placesFeature]
    };

    const placesCarouselDispatchAsync: AsyncDispatch<
        IPlacesAction,
        IAppContext
    > = createAsyncDispatch(placesCarouselDispatch, state);

    const placesFeatureDispatchAsync: AsyncDispatch<
        IPlacesAction,
        IAppContext
    > = createAsyncDispatch(placesFeatureDispatch, state);

    return (
        <AppContext.Provider
            value={{
                placesCarousel: [placesCarousel, placesCarouselDispatchAsync],
                placesFeatured: [placesFeature, placesFeatureDispatchAsync],
            }}
        >
            {children}
        </AppContext.Provider>
    );
};


/*
 * Context Hooks
 */


export const usePlaceCarousel = () => {
    const contextValue = useContext(AppContext);
    return contextValue.placesCarousel as [
        IPlaces,
        AsyncDispatch<IPlacesAction, IAppContext>
    ];
};

export const usePlaceFeature = () => {
    const contextValue = useContext(AppContext);
    return contextValue.placesFeatured as [
        IPlaces,
        AsyncDispatch<IPlacesAction, IAppContext>
    ];
};