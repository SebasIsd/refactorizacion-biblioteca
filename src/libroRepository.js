   const libros = [
       { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", estado: "D", usuario: "" },
       { id: 2, titulo: "Design Patterns", autor: "Erich Gamma", estado: "D", usuario: "" },
       { id: 3, titulo: "Refactoring", autor: "Martin Fowler", estado: "P", usuario: "Juan" }
   ];
   const ESTADO_DISPONIBLE = "D";
   const ESTADO_PRESTADO = "P";

   function buscarPorId(id) {
       return libros.find(libro => libro.id === id);
   }
   function obtenerTodos() {
       return libros;
   }
   module.exports = { buscarPorId, obtenerTodos, ESTADO_DISPONIBLE, ESTADO_PRESTADO };