import { ReactNode } from "react";
import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { store } from "../config/store";


interface IStoreProvider {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = ({children, initialState}: IStoreProvider) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}