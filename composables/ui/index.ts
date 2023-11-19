
export class UserOrder {
    constructor() {
        
    }
}

export class RollTheDice extends UserOrder {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

export class Collect extends UserOrder {
    type: string;
    value: number;

    constructor(type: string, value: number) {
        super();
        this.type = type;
        this.value = value;
    }
}

// export declare type UserOrder = RollTheDice | Collect;

export declare type UserOrderFunction = (order: UserOrder) => void;