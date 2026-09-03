const repository = require('./libroRepository');

function consultarDisponibilidad(id) {
    const libro = repository.buscarPorId(id);
    if (!libro) return { exito: false, mensaje: "Libro no encontrado" };
    const disponible = libro.estado === repository.ESTADO_DISPONIBLE;
    return { exito: true, mensaje: disponible ? `El libro ${libro.titulo} está disponible` : `El libro ${libro.titulo} está prestado a ${libro.usuario}` };
}

function prestarLibro(id, nombreUsuario) {
    if (!nombreUsuario || nombreUsuario.trim() === "") return { exito: false, mensaje: "Debe ingresar el nombre del usuario" };
    const libro = repository.buscarPorId(id);
    if (!libro) return { exito: false, mensaje: "Libro no encontrado" };
    if (libro.estado === repository.ESTADO_PRESTADO) return { exito: false, mensaje: "No se puede prestar el libro porque ya está prestado" };

    libro.estado = repository.ESTADO_PRESTADO;
    libro.usuario = nombreUsuario;
    return { exito: true, mensaje: `El libro ${libro.titulo} fue prestado correctamente a ${nombreUsuario}` };
}

function devolverLibro(id) {
    const libro = repository.buscarPorId(id);
    if (!libro) return { exito: false, mensaje: "Libro no encontrado" };
    if (libro.estado === repository.ESTADO_DISPONIBLE) return { exito: false, mensaje: "El libro no puede devolverse porque ya está disponible" };

    const usuarioAnterior = libro.usuario;
    libro.estado = repository.ESTADO_DISPONIBLE;
    libro.usuario = "";
    return { exito: true, mensaje: `Devolución realizada. Libro: ${libro.titulo}. Usuario anterior: ${usuarioAnterior}` };
}

module.exports = { consultarDisponibilidad, prestarLibro, devolverLibro };