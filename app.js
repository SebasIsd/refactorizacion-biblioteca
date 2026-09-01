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
   console.log("\n2. BUSCAR:"); buscarLibro("Clean");
   console.log("\n3. DISPONIBILIDAD (Antes):"); console.log(service.consultarDisponibilidad(1).mensaje);
   console.log("\n4. PRESTAR:"); console.log(service.prestarLibro(1, "Carlos").mensaje);
   console.log("\n5. PRESTAR DE NUEVO (Debe fallar):"); console.log(service.prestarLibro(1, "Ana").mensaje);
   console.log("\n6. DEVOLVER:"); console.log(service.devolverLibro(1).mensaje);
   console.log("\n7. DISPONIBILIDAD (Después):"); console.log(service.consultarDisponibilidad(1).mensaje);