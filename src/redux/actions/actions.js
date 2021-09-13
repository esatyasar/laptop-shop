import {SELL_COMP, SELL_LAPTOP, SELL_PHONE, SELL_WATCH} from "../types/types";

export const sellLaptop = (number = 1) => {
    return {
        type: SELL_LAPTOP,
        payload: number
    };
};

export const sellPhone = (number = 1) => {
    return {
        type: SELL_PHONE,
        payload:number
    };
};

export const sellWatch = () => {
    return {
        type: SELL_WATCH,
    };
};

export const sellComp = () => {
    return {
        type: SELL_COMP,
    };
};
