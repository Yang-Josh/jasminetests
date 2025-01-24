import { Cube_Var } from "../Cube_Var.js";
describe ("The volume is", function(){
    it("test length of 5", function(){
        let Length = 5;
        let Volume = Cube_Var(Length);
        console.log (`${Length} metres is a volume of ${Volume}`);
        expect(Volume.toFixed(2)). toBe ("15625");
        });
});