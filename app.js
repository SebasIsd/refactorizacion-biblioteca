// bibliotecaService.js
// Refactorización aplicando Clean Code (Actividad 3)
// Nota: la separación en carpetas/módulos y la eliminación de duplicación
// se abordan en las Actividades 4 y 5. Aquí solo se mejora legibilidad,
// nombres, comentarios y comparaciones, sin alterar el comportamiento.

const libros = [
    {
        id: 1,
        titulo: "Clean Code",
        autor: "Robert C. Martin",
        estado: "D",
        usuario: ""
    },
    {
        id: 2,
        titulo: "Design Patterns",
        autor: "Erich Gamma",
        estado: "D",
        usuario: ""
    },
    {
        id: 3,
        titulo: "Refactoring",
        autor: "Martin Fowler",
        estado: "P",
        usuario: "Juan"
    }
];

function buscarLibro(textoBusqueda) {

    let seEncontroAlgunLibro = false;

    for (let i = 0; i < libros.length; i++) {

        const coincideEnTitulo = libros[i].titulo.toLowerCase().includes(textoBusqueda.toLowerCase());
        const coincideEnAutor = libros[i].autor.toLowerCase().includes(textoBusqueda.toLowerCase());

        if (coincideEnTitulo || coincideEnAutor) {

            console.log(
                libros[i].id +
                " - " +
                libros[i].titulo +
                " - " +
                libros[i].autor
            );

            if (libros[i].estado === "D") {
                console.log("Disponible");
            } else {
                console.log("Prestado");
            }

            seEncontroAlgunLibro = true;
        }
    }

    if (seEncontroAlgunLibro === false) {
        console.log("No se encontraron libros");
    }
}

function consultarDisponibilidad(id) {

    let libroEncontrado = null;

    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            libroEncontrado = libros[i];
        }
    }

    if (libroEncontrado === null) {

        console.log("Libro no encontrado");

    } else {

        if (libroEncontrado.estado === "D") {

            console.log(
                "El libro " +
                libroEncontrado.titulo +
                " está disponible"
            );

        } else {

            console.log(
                "El libro " +
                libroEncontrado.titulo +
                " está prestado a " +
                libroEncontrado.usuario
            );
        }
    }
}

function prestarLibro(id, nombreUsuario) {

    let libro = null;

    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            libro = libros[i];
        }
    }

    if (libro === null) {

        console.log("Libro no encontrado");

    } else {

        if (nombreUsuario === null || nombreUsuario === "") {

            console.log("Debe ingresar el nombre del usuario");

        } else {

            if (libro.estado === "D") {

                libro.estado = "P";
                libro.usuario = nombreUsuario;

                console.log(
                    "El libro " +
                    libro.titulo +
                    " fue prestado correctamente a " +
                    nombreUsuario
                );

            } else {

                console.log(
                    "No se puede prestar el libro porque ya está prestado"
                );
            }
        }
    }
}

function devolverLibro(id) {

    let libro = null;

    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            libro = libros[i];
        }
    }

    if (libro === null) {

        console.log("Libro no encontrado");

    } else {

        if (libro.estado === "P") {

            console.log(
                "Devolución realizada. Libro: " +
                libro.titulo +
                ". Usuario anterior: " +
                libro.usuario
            );

            libro.estado = "D";
            libro.usuario = "";

        } else {

            console.log(
                "El libro no puede devolverse porque ya está disponible"
            );
        }
    }
}

function listarLibros() {

    console.log("---------- BIBLIOTECA ----------");

    for (let i = 0; i < libros.length; i++) {

        console.log(
            libros[i].id +
            " | " +
            libros[i].titulo +
            " | " +
            libros[i].autor +
            " | " +
            libros[i].estado
        );
    }

    console.log("-------------------------------");
}


// PRUEBAS MANUALES (mismo comportamiento que el original)

listarLibros();

console.log("\nBUSCAR:");
buscarLibro("Clean");

console.log("\nDISPONIBILIDAD:");
consultarDisponibilidad(1);

console.log("\nPRESTAR:");
prestarLibro(1, "Carlos");

console.log("\nDISPONIBILIDAD DESPUÉS DEL PRÉSTAMO:");
consultarDisponibilidad(1);

console.log("\nDEVOLVER:");
devolverLibro(1);

console.log("\nESTADO FINAL:");
consultarDisponibilidad(1);