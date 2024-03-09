const CarritoCompra = require('./index');

test('constructor inicializa el carrito vacío', () => {
    const carrito = new CarritoCompra();
    expect(carrito.carrito).toEqual([]);
});

test('agregarProducto() agrega un producto al carrito', () => {
    const carrito = new CarritoCompra();
    const scanner = { nombre: 'Scanner', precio: 80000};
    const celular = { nombre: 'Celular', precio: 200000};
    const laptop = { nombre: 'Laptop', precio:500000};
    const tablet = { nombre: 'Tablet', precio: 100000};


    carrito.agregarProducto(scanner);
    carrito.agregarProducto(celular);
    carrito.agregarProducto(laptop);
    carrito.agregarProducto(tablet);

    expect(carrito.carrito).toContain(scanner);
    expect(carrito.carrito).toContain(celular);
    expect(carrito.carrito).toContain(laptop);
    expect(carrito.carrito).toContain(tablet);
});

test('calcularTotal() calcula el total de tu compra', () => {
    const carrito = new CarritoCompra();
    const scanner = { nombre: 'Scanner', precio: 80000};
    const celular = { nombre: 'Celular', precio: 200000};
    const laptop = { nombre: 'Laptop', precio:500000};
    const tablet = { nombre: 'Tablet', precio: 100000};

    carrito.agregarProducto(scanner);
    carrito.agregarProducto(celular);
    carrito.agregarProducto(laptop);
    carrito.agregarProducto(tablet);

    expect(carrito.calcularTotal()).toBe(880000);

});

test('aplicarDescuento() aplicar un descuento al total de la compra', ()=> {
    const carrito = new CarritoCompra();
    const scanner = { nombre: 'Scanner', precio: 80000};
    const celular = { nombre: 'Celular', precio: 200000};
    const laptop = { nombre: 'Laptop', precio:500000};
    const tablet = { nombre: 'Tablet', precio: 100000};

    carrito.agregarProducto(scanner);
    carrito.agregarProducto(celular);
    carrito.agregarProducto(laptop);
    carrito.agregarProducto(tablet);

    expect(carrito.aplicarDescuento(35)).toBe( 572000);
});