import React, { createContext, useContext, useReducer } from 'react';
import createAsyncDispatch, { AsyncDispatch } from './createAsyncDispatch';
import { IPlacesAction } from '../actions';

import { IPlaces } from '../types';

export const initialStatePlaces = {
    placesCarousel: [],
    placesFeature: []
}

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


export const AppProvider: React.FC<{}> = (props: IProps) => {

    const [place, placeDispatch] = useReducer(
        userReducer,
        initialStateUser
    );



    const state: IAppContext = {
        user: [user],
        kits: [kits],
        tray: [tray],
        orders: [orders],
        parts: [parts],
    };

    const userDispatchAsync: AsyncDispatch<
        IUserAction,
        IAppContext
    > = createAsyncDispatch(userDispatch, state);

    const kitsDispatchAsync: AsyncDispatch<
        IKitsAction,
        IAppContext
    > = createAsyncDispatch(kitsDispatch, state);

    const trayDispatchAsync: AsyncDispatch<
        ITrayAction,
        IAppContext
    > = createAsyncDispatch(trayDispatch, state);

    const ordersDispatchAsync: AsyncDispatch<
        IOrdersAction,
        IAppContext
    > = createAsyncDispatch(ordersDispatch, state);

    const partsDispatchAsync: AsyncDispatch<
        IPartsAction,
        IAppContext
    > = createAsyncDispatch(partsDispatch, state);


    /* Create Cached State for User and Orders */
    const createPersistUser = () => ({
        user: null,
        accessToken: null
    });

    const [persistUser, setUserCache] = usePersistStorage(`${PERSIST_KEY}_USER`, createPersistUser);

    return (
        <AppContext.Provider
            value={{
                updateUserCache: setUserCache,
                cache: {
                    user: { ...persistUser, sessionCheckVisible: false },
                },
                user: [user, userDispatchAsync],
                kits: [kits, kitsDispatchAsync],
                tray: [tray, trayDispatchAsync],
                orders: [orders, ordersDispatchAsync],
                parts: [parts, partsDispatchAsync],
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};