import {SELL_COMP, SELL_LAPTOP, SELL_PHONE, SELL_WATCH} from "../types/types";

export const sellLaptop = () => {
    return {
        type: SELL_LAPTOP,
    };
};

export const sellPhone = () => {
    return {
        type: SELL_PHONE,
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
