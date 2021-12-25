interface SimpleInterface {
    color: string;
    rost: number
}


export class Simple implements SimpleInterface
{
    private helper: object;
    color: string;
    rost: number;

    constructor(color: string, rost: number) {
        this.color = color;
        this.rost = rost;
        this.helper = Array;
    }

    public get value() : string {
        return this.color;
    }
}
