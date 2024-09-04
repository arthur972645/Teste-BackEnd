// teste.js
import { listaDeFrutar , areaQuadrado } from "./aula_01/index.js";  // Importa a função corretamente
test("verificar se tem genipapo", () => {
    expect(listaDeFrutar()).toContain("Genipapo");  // Verifica se contém "Genipapo"
});


test("Verificar área do quadrado", () => {
    expect(areaQuadrado(10)).toBe(100)
    expect(areaQuadrado(5)).toBe(25)
    expect(areaQuadrado(20)).toBe(400)
})

test("Compara strings",() => {
    //se o negocio dentro do expect seja igual ao que ta dentro do toBe
    expect("arthur").toBe("arthur")
    expect("arthur").not.toBe("alves")
    //
    expect("arthur").toEqual("alves")
})

test("verificar se tem genipapo", () => {
    expect(listaDeFrutar()).toContain("Genipapo");
});

