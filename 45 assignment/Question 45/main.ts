// Question no 45

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([name, value]) => car[name] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Suzuki", "Swift", ["color", "red"], ["drive_system", "2WD"]));