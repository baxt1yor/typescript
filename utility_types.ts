
interface Point {
  x: number;
  y: number;
}

// `Partial` allows x and y to be optional
let pointPart: Partial<Point> = {}; 
pointPart.x = 10;
// End `Partial`


interface Car {
  make: string;
  model: string;
  mileage?: number;
}

// `Required` forces mileage to be defined
let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 
};
// End `Required` forces mileage to be defined

// Record is a shortcut to defining an object type with a specific key type and value type.
let nameAndAge: Record<string, number> = {
  'Baxtiyor': 20
};
// End Record

// Omit removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

// that is remove `age` and `location` property
const person: Omit<Person, 'age' | 'location'> = {
  name: 'Baxtiyor'
};

// End Omit

// Pick removes all but the specified keys from an object type.
// it just removes all the properties other than name
const personOne: Pick<Person, 'name'> = {
  name: 'Baxtiyor'
};
// End Pick


// Exclude removes types from a union.
type Primitive = string | number | boolean

// a string cannot be used here since Exclude removed it from the type.
const value: Exclude<Primitive, string> = true;

// End Exclude

// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// End ReturnType



// Parameters extracts the parameter types of a function type as an array
type PointPrinter = (p: { x: number; y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

// End Parameters
