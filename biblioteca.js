//Crear un array de objetos llamado kibros que contenga al menos 10 libros, cada libro debe teenr las siguientes propiedades
//id(numero), titulo(strig), autor(string), año(numerico), genero(string), disponibilidad(booleano)

// Array de libros
const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Ficción", disponible: false },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, genero: "Ficción", disponible: true },
    { id: 3, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", anio: 1985, genero: "Ficción", disponible: false },
    { id: 4, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Ciencia Ficción", disponible: true },
    { id: 5, titulo: "La casa de los espíritus", autor: "Isabel Allende", anio: 1982, genero: "Ficción", disponible: true },
    { id: 6, titulo: "El túnel", autor: "Ernesto Sabato", anio: 1948, genero: "Ficción", disponible: false },
    { id: 7, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", anio: 1981, genero: "Ficción", disponible: true },
    { id: 8, titulo: "Fahrenheit 451", autor: "Ray Bradbury", anio: 1953, genero: "Ciencia Ficción", disponible: false },
    { id: 9, titulo: "El principito", autor: "Antoine de Saint-Exupéry", anio: 1943, genero: "Ficción", disponible: true },
    { id: 10, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", anio: 2001, genero: "Ficción", disponible: true }
];

// Array de usuarios
const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", librosPrestados: [] },
    { id: 2, nombre: "María López", email: "maria.lopez@example.com", librosPrestados: [] },
    { id: 3, nombre: "Carlos García", email: "carlos.garcia@example.com", librosPrestados: [] },
    { id: 4, nombre: "Ana Martínez", email: "ana.martinez@example.com", librosPrestados: [] },
    { id: 5, nombre: "Luis Fernández", email: "luis.fernandez@example.com", librosPrestados: [] }
];

console.log("libros que se registraron")
console.table(libros);
console.log("usuarios que se registraron")
console.table(usuarios);


function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, anio, genero, disponible: true };
    libros.push(nuevoLibro);
    return nuevoLibro; // Retornar el nuevo libro
}

// Llama a la función y guarda el resultado
const libroAgregado = agregarLibro(11, "El alquimista", "Paulo Coelho", 1988, "Ficción");
//nuevo libro agregado
console.log("el libro agregado es: ");

// Imprimir el libro agregado
console.table(libros);


// Función para buscar un libro por título, autor o género
function buscarLibro(criterio, valor) {
    return libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
}


// Función para ordenar libros por título o año usando bubble sort
function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - 1 - i; j++) {
            if (criterio === "titulo" && libros[j][criterio] > libros[j + 1][criterio]) {
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
            } else if (criterio === "anio" && libros[j][criterio] > libros[j + 1][criterio]) {
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
            }
        }
    }
}

// Ordenar libros por título y mostrarlos
ordenarLibros("titulo");
console.log("Libros ordenados por título:");
console.table(libros);

// Ordenar libros por año y mostrarlos
ordenarLibros("anio");
console.log("Libros ordenados por año:");
console.table(libros);


// Función para borrar un libro
function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);
    if (index !== -1) {
        libros.splice(index, 1);
    }
}
//impirmiendo y llamado a la funcion donde se elimina el libro
console.log(borrarLibro(1));
console.log("libros borrados:")
console.table(libros);



// Función para buscar un libro por título, autor o género
function buscarLibro(criterio, valor) {
    return libros.filter(libro => libro[criterio].toLowerCase().includes(valor.toLowerCase()));
}
//imprimiendo y llamado a la funcion donde se busca el libro
console.table(buscarLibro("titulo","1984"));
console.table(buscarLibro("autor","Gabriel García Márquez"));
console.table(buscarLibro("genero","Ciencia Ficción"));

//3. Gestión de Usuarios
// Función para agregar un usuario
function agregarUsuario(nombre, email) {
    const id = usuarios.length + 1;
    const nuevoUsuario = { id, nombre, email, librosPrestados: [] };
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
}
//imprimiendo y llamado a la funcion donde se agrega el usuario
console.log(agregarUsuario("Carlos", "carlos@example.com"));
console.log("usuarios agregados:")
console.table(usuarios);

//Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
function mostrarTodosLosUsuarios() {
    return usuarios;
}
//imprimiendo y llamado a la funcion donde se muestra todos los usuarios
console.log(mostrarTodosLosUsuarios());
console.log("usuarios mostrados:")
console.table(usuarios);

//Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email === email);
}
//imprimiendo y llamado a la funcion donde se busca el usuario
console.log(buscarUsuario("carlos@example.com"));
console.log("usuario buscado:")
console.table(buscarUsuario("carlos@example.com"));

//Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email === email);
}
//imprimiendo y llamado a la funcion donde se busca el usuario
console.log(buscarUsuario("carlos@example.com"));
console.log("usuario buscado:")
console.table(buscarUsuario("carlos@example.com"));


//Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario(nombre, email) {
    const usuarioIndex = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
    if (usuarioIndex !== -1) {
        usuarios.splice(usuarioIndex, 1);
        return true;
    }
    return false;
}
//imprimiendo y llamado a la funcion donde se borra el usuario
console.log(borrarUsuario("Carlos", "carlos@example.com"));
console.log("usuarios borrados:")
console.table(usuarios);

//4. Sistema de Préstamos
//Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario. Luego mostrar que libro se prestó y a que usuario.
function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);

    if (libro && usuario) {
        if (libro.disponible) {
            libro.disponible = false;
            usuario.librosPrestados.push(libro);
            console.log(`Se ha prestado el libro "${libro.titulo}" al usuario "${usuario.nombre}".`);
        } else {
            console.log("El libro ya está prestado.");
        }
    } else {
        console.log("Libro o usuario no encontrado.");
    }
}
//imprimiendo y llamado a la funcion donde se presta el libro
prestarLibro(1, 1);
console.log("libros prestados:")
console.table(usuarios[0].librosPrestados);

//Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);

    if (libro && usuario) {
        const libroIndex = usuario.librosPrestados.findIndex(libro => libro.id === idLibro);
        if (libroIndex !== -1) {
            libro.disponible = true;
            usuario.librosPrestados.splice(libroIndex, 1);
            console.log(`Se ha devuelto el libro "${libro.titulo}" al usuario "${usuario.nombre}".`);
        } else {
            console.log("El libro no está en la lista de libros prestados.");
        }
    } else {
        console.log("Libro o usuario no encontrado.");
    }
}
//imprimiendo y llamado a la funcion donde se devuelve el libro
devolverLibro(1, 1);
console.log("libros prestados:")
console.table(usuarios[3].librosPrestados);

//5. Reportes
//Crear una función generarReporteLibros() que utilice métodos avanzados de arrays
// (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
//Cantidad total de libros.
//Cantidad de libros prestados.
//Cantidad de libros por género.
//Libro más antiguo y más nuevo.
//Libros por autor.
function generarReporteLibros() {
    const totalLibros = libros.length;
    const librosPrestados = libros.filter(libro => libro.disponible === false).length;
    const librosPorGenero = libros.reduce((acc, libro) => {
        const genero = libro.genero;
        if (!acc[genero]) {
            acc[genero] = 1;
        } else {
            acc[genero]++;
        }
        return acc;
    }, {});

    const libroMasAntiguo = libros.reduce((acc, libro) => {
        if (acc === null || libro.anio < acc.anio) {
            return libro;
        }
        return acc;
    }, null);

    const libroMasNuevo = libros.reduce((acc, libro) => {
        if (acc === null || libro.anio > acc.anio) {
            return libro;
        }
        return acc;
    }, null);

    const librosPorAutor = libros.reduce((acc, libro) => {
        const autor = libro.autor;
        if (!acc[autor]) {
            acc[autor] = [];
        }
        acc[autor].push(libro);
        return acc;
    }, {});

// Imprimir el reporte en la consola
    console.log("Reporte de libros:");
    console.log("Cantidad total de libros:", totalLibros);
    console.log("Cantidad de libros prestados:", librosPrestados);
    console.log("Cantidad de libros por género:");
    console.table(librosPorGenero);
    console.log("Libro más antiguo:", libroMasAntiguo);
    console.log("Libro más nuevo:", libroMasNuevo);
    console.log("Libros por autor:");
    console.table(librosPorAutor);
}

//6. Identificación Avanzada de libros
//Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. Además la función debe excluir aquellos títulos que
//contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante.
function librosConPalabrasEnTitulo(libros) {
    const librosConPalabras = libros.filter(libro => {
        const titulo = libro.titulo.toLowerCase();
        const palabras = titulo.split(' ');
        return palabras.length > 1 && !/[^a-zA-Z\s]/.test(titulo);
    });
// Imprimirlos libros con el titulo con mas palabras
    console.log("Libros con más de una palabra en el título:");
    console.table(librosConPalabras);
}

//7. Cálculos Estadísticos
//Obtener un array con los años de publicación de todos los libros.
//Calcular el promedio de los años de publicación.
//Encontrar el año de publicación más frecuente.
//Calcular la diferencia en años entre el libro más antiguo y el más nuevo. 
// Para este punto es recomendable usar el objeto Math().
function estadisticasLibros(libros) {
    const añosPublicacion = libros.map(libro => libro.anio);
    const promedio = añosPublicacion.reduce((acc, anio) => acc + anio, 0) / añosPublicacion.length;
    const añoMasFrecuente = añosPublicacion.reduce((acc, anio) => (añoMasFrecuente === null || anio > acc) ? anio : acc, null);
    const diferenciaAnios = Math.max(...añosPublicacion) - Math.min(...añosPublicacion);

    //todos las estadisticas de los libros
    console.log("Años de publicación de todos los libros:");
    console.table(añosPublicacion);
    console.log("Promedio de años de publicación:");
    console.log(promedio);
    console.log("Año de publicación más frecuente:");
    console.log(añoMasFrecuente);
    console.log("Diferencia en años entre el libro más antiguo y el más nuevo:");
    console.table(diferenciaAnios);
}

//8. Manejo de Cadenas
//Crear una función normalizarDatos() que utilice métodos de strings para:
//Convertir todos los títulos a mayúsculas.
//Eliminar espacios en blanco al inicio y final de los nombres de autores.
//Formatear los emails de los usuarios a minúsculas.
//Retornar un nuevo array con los datos normalizados.
function normalizarDatos(libros, usuarios) {
    const librosNormalizados = libros.map(libro => ({
        ...libro,
        titulo: libro.titulo.toUpperCase(),
        autor: libro.autor.trim().toLowerCase()
    }));

    const usuariosNormalizados = usuarios.map(usuario => ({
        ...usuario,
        nombre: usuario.nombre.trim().toLowerCase(),
        email: usuario.email.toLowerCase()
    }));

    return { libros: librosNormalizados, usuarios: usuariosNormalizados };
}

//9. Interfaz de Usuario por Consola
//Implementar una función menuPrincipal() que muestre un menú de opciones al usuario 
//y permita interactuar con el sistema utilizando prompt().
//El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar 
//estructuras de control (if, switch, ciclos) para manejar la lógica de cada opción.

function menuPrincipal() {
    let opcion;

    do {
        console.log("Menú Principal:");
        console.log("1. Administrar Usuarios");
        console.log("2. Administrar Libros");
        console.log("3. Prestar Libro");
        console.log("4. Devolver Libro");
        console.log("5. Salir");

        opcion = prompt("Seleccione una opción:");

        switch (opcion) {
            case "1":
                administrarUsuarios();
                break;
            case "2":
                administrarLibros();
                break;
            case "3":
                prestarLibro();
                break;
            case "4":
                devolverLibro();
                break;
            case "5":
                console.log("¡Hasta luego!");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== "5");
}

function menuAdministrarUsuarios() {
    let opcion;

    do {
        console.log("Menú de Administración de Usuarios:");
        console.log("1. Agregar Usuario");
        console.log("2. Eliminar Usuario");
        console.log("3. Modificar Usuario");
        console.log("4. Ver Usuarios");
        console.log("5. Volver al Menú Principal");

        opcion = prompt("Seleccione una opción:");

        switch (opcion) {
            case "1":
                agregarUsuario();
                break;
            case "2":
                eliminarUsuario();
                break;
            case "3":
                modificarUsuario();
                break;
            case "4":
                verUsuarios();
                break;
            case "5":
                console.log("Volviendo al Menú Principal...");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== "5");
}

function menuAdministrarLibros() {
    let opcion;

    do {
        console.log("Menú de Administración de Libros:");
        console.log("1. Agregar Libro");
        console.log("2. Eliminar Libro");
        console.log("3. Modificar Libro");
        console.log("4. Ver Libros");
        console.log("5. Volver al Menú Principal");

        opcion = prompt("Seleccione una opción:");

        switch (opcion) {
            case "1":
                agregarLibro();
                break;
            case "2":
                eliminarLibro();
                break;
            case "3":
                modificarLibro();
                break;
            case "4":
                verLibros();
                break;
            case "5":
                console.log("Volviendo al Menú Principal...");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== "5");
}

      



























