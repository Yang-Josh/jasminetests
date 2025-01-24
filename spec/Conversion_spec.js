import { Km_to_Mi } from "../Km_to_Mi.js";
describe("test conversion", function(){
    it("test 150 km", function(){
let Kilometers = 150;
let Miles = Km_to_Mi(Kilometers);
console.log (`${Kilometers} Km is ${Miles} Mi`);
expect(Miles.toFixed(2)). toBe ("93.23");
});

it ("tests 70 km", function(){
let Kilometers = 70;
let Miles = Km_to_Mi(Kilometers);
console.log (`${Kilometers} Km is ${Miles} Mi`);
expect(Miles.toFixed(2)). toBe("43.51");
});
});