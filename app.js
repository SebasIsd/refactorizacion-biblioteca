const service = require('./src/bibliotecaService');
const repository = require('./src/libroRepository');

function listarLibros() {
    console.log("---------- BIBLIOTECA ----------");
    repository.obtenerTodos().forEach(libro => {
        const estadoTexto = libro.estado === repository.ESTADO_DISPONIBLE ? "Disponible" : "Prestado";
        console.log(`${libro.id} | ${libro.titulo} | ${libro.autor} | ${estadoTexto}`);
    });
    console.log("-------------------------------");
}

function buscarLibro(textoBusqueda) {
    const resultados = repository.obtenerTodos().filter(libro =>
        libro.titulo.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
        libro.autor.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    if (resultados.length === 0) {
        console.log("No se encontraron libros");
        return;
    }
    resultados.forEach(libro => {
        const estadoTexto = libro.estado === repository.ESTADO_DISPONIBLE ? "Disponible" : "Prestado";
        console.log(`${libro.id} - ${libro.titulo} - ${libro.autor}\n${estadoTexto}`);
    });
}

console.log("1. LISTAR:"); listarLibros();
console.log("2. Buscar existente:"); buscarLibro("Clean");
console.log("\n3. Buscar inexistente:"); buscarLibro("Harry");
console.log("\n4. Prestar disponible:"); console.log(service.prestarLibro(2, "Maria").mensaje);
console.log("\n5. Prestar ya prestado:"); console.log(service.prestarLibro(2, "Pedro").mensaje);
console.log("\n6. Devolver prestado:"); console.log(service.devolverLibro(2).mensaje);
console.log("\n7. Devolver disponible:"); console.log(service.devolverLibro(2).mensaje);