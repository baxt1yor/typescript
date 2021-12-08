
/**
 * @param car 
 * @return void
 */
function printCar(car: {
    make: string,
    model: string,
    year: number,
    chargeVoltage?: number
}): void {
    let str: string = `${car.make} ${car.model} ${car.year}`;
    if (typeof car.chargeVoltage !== "undefined") {
        str += `${car.chargeVoltage}`;
    }
    console.log(str);
}

printCar({make: "jfvjrnv", model: "efvienriv", year: 34443});

/**
 * @param id 
 * @param data 
 * @returns 
 */
function simple(id: number, data: string[]): string[]
{
    data.push(id.toString());
    return data;
}

let res: string[] = simple(44, ["hello", "world"]);

console.log(res);
