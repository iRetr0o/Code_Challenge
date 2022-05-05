const Reader = require("../../lib/utils/reader");

describe("Prueba del reader", () => {
    test("Comprobando lectura de archivo .JSON", () => {
        const visualPartners = Reader.readJsonFile("visualpartners.json");
        expect(visualPartners[0].name).toBe("Warren");
    });
});