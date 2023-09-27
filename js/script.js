let informacionPersonal =
{
    nombre: "Carlos",
    apellido: "Ramos",
    alias: "Charly",
    edad: 24,
    esEstudiante: true,
    pasatiempos: ["Jugar basquetball", "Armar rompecabezas", "Jugar videojuegos", "Hacer ejercicio", "Programar", "Leer"],
    peliculasFavoritas: ["Ready player one", "el precio del mañana", "kung fu panda 1"],
    contactos:
    {
    redes: "@crono_zs",
    correo: "cdmx2393@amerike.edu.mx",
    cel: "55-89-84-65-21"
    } ,
    libros: [
        {
            titulo: "El codigo del heroe",
            autor: "William H. McRaven",
            editorial: "Booket",
            traductor: "Susana Olivares",
            numeroDePaginas: 176,
            paisDeOrigen: "Estados Unidos",
            tematica: ["Auto-ayuda", "Crecimiento personal", "Estilo de vida", "Superacion"],
            fechaDePublicacion: "10 de junio de 2021",
            disponibleParaCompra: true,
            sintesis: "Diez cualidades para convertirte en el héroe de tu propia vida.\n Del autor del bestseller internacional Hazte la cama.\nLa perseverancia de un médico rebelde que cambió la historia de la medicina moderna, el perdón de un padre que perdió a sus hijos durante un operativo liderado por McRaven y la esperanza del autor cuando enfermó de leucemia.\nEstas y otras historias demuestran que nuestra valentía radica en cómo afrontamos el día a día y nos sobreponemos a las adversidades.No se trata de poderes sobrehumanos, sino de las lecciones precisas para que todos seamos capaces de hacer cosas extraordinarias. Este es un merecido homenaje a los héroes reales y la guía perfecta para cualquiera que desee superar sus límites, predicar con el ejemplo y alcanzar sus más grandes sueños.\nWilliam H. McRaven, autor del bestseller Hazte la cama y quien ha motivado a millones de personas a cambiar sus hábitos, ahora nos invita a adoptar las diez virtudes que nos convierten en héroes y heroínas de nuestra propia vida.",
            impresinDeDatos: function() {
                console.log(`Titulo: ${this.titulo}`)
                console.log(`Autor: ${this.autor}`)
                console.log(`Editorial: ${this.editorial}`)
                console.log(`Traductora: ${this.traductor}`)
                console.log(`Número de páginas: ${this.numeroDePaginas}`)
                console.log(`Pais de origen: ${this.paisDeOrigen}`)
                console.log(`Tematica: ${this.tematica[0]}`)
                console.log(`Tematica: ${this.tematica[1]}`)
                console.log(`Tematica: ${this.tematica[2]}`)
                console.log(`Tematica: ${this.tematica[3]}`)
                console.log(`Fecha de publicacion: ${this.fechaDePublicacion}`)
                console.log(`Disponible para compra: ${this.disponibleParaCompra}`)
                console.log(`Sintesis: ${this.sintesis}`)
            },
            
        },
        {
            titulo: "Y colorin colorado este cuento aun no ha acabado",
            autor: "Odin Dupeyron",
            editorial: "Decidente",
            traductor: "Odin Dupeyro",
            paisDeOrigen: "México",
            tematica: ["Auto-ayuda", "Crecimiento personal", "Estilo de vida", "Superacion"],
            fechaDePublicacion: "2001",
            disponibleParaCompra: true,
            sintesis: "Una extraordinaria historia que nos habla de la vida de los miedos escondidos que nos paralizan, y del deseo de ser libres. Nos habla de la importancia de conocerse a uno mismo, de indagar en el pasado y de entender quiénes somos y de dónde venimos para saber así a dónde vamos.\n\nAlejado del tan conocido libro de superación personal, éste no pretende enseñar actitudes o formas que quizá se deban o que quizá no se deban de tener. No es, de ninguna manera, un cúmulo de frases trilladas ligadas por una historia trivial. Este libro nos habla de la condición humana, de las decisiones que se van tomando a lo largo de la historia que es la vida y de las resolución más importante en la existencia, la de vivir intensamente a pesar de todo. Entre una princesa, un dragón, un príncipe azul, hadas y gnomos, el lector encuentra reflejada alguna parte de su vida. Mientras te hace reír a carcajadas, y también llorar, te lleva de la mano a una experiencia de lectura completamente diferente.\n\nY colorín colorado este cuento aún no se ha acabado nos habla de las finales y los eternos comenzares de la vida. De los viejos círculos que se cierran y de los nuevos círculos que se abren, de todas las posibilidades, de todos los principios y de todos los finales que hay en el transcurso de la existencia humana, y por sobre todo esto, de la importancia que tiene vivir la vida... ¡hasta el final!",
            impresinDeDatos: function() {
                console.log(`Titulo: ${this.titulo}`)
                console.log(`Autor: ${this.autor}`)
                console.log(`Editorial: ${this.editorial}`)
                console.log(`Traductora: ${this.traductor}`)
                console.log(`Pais de origen: ${this.paisDeOrigen}`)
                console.log(`Tematica: ${this.tematica[0]}`)
                console.log(`Tematica: ${this.tematica[1]}`)
                console.log(`Tematica: ${this.tematica[2]}`)
                console.log(`Tematica: ${this.tematica[3]}`)
                console.log(`Fecha de publicacion: ${this.fechaDePublicacion}`)
                console.log(`Disponible para compra: ${this.disponibleParaCompra}`)
                console.log(`Sintesis: ${this.sintesis}`)
                }
            },
            {
                titulo: "el señor de las moscas",
                autor: "William Golding",
                editorial: "Alianza Editorial",
                paisDeOrigen: "Inglaterra",
                fechaDePublicacion: "18 de septiembre de 1954",
                disponibleParaCompra: true,
                sintesis: "Un avión que transporta a unos estudiantes británicos se estrella durante una guerra a causa de una fuerte tormenta, estrellándose contra una isla desierta en donde los únicos supervivientes son los niños pasajeros, quienes se ven obligados a sobrevivir sin ningún adulto pues el único adulto era el piloto del avión y murió en el accidente. La ausencia de normas y límites hacen que la lógica y la serenidad de los jóvenes vayan desapareciendo al dejar paso a la faceta más salvaje del ser humano, provocando que la utopía insular de Ralph, Piggy, Jack y los demás no tarde en transformarse en un caos gobernado por la locura, la lucha de poder y la muerte.",
                impresinDeDatos: function() {
                    console.log(`Titulo: ${this.titulo}`)
                    console.log(`Autor: ${this.autor}`)
                    console.log(`Editorial: ${this.editorial}`)
                    console.log(`Pais de origen: ${this.paisDeOrigen}`)
                    console.log(`Fecha de publicacion: ${this.fechaDePublicacion}`)
                    console.log(`Disponible para compra: ${this.disponibleParaCompra}`)
                    console.log(`Sintesis: ${this.sintesis}`)
                    }
                }

    ],
    saludo: function() {
    console.log(`Hola: ${this.nombre} ${this.apellido} de alias ${this.alias} de ${this.edad} años de edad.`);
    },
    impresionDeDatos: function() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Alias: ${this.alias}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Es estudiante: ${this.esEstudiante}`);
    console.log(`Pasatiempo: ${this.pasatiempos[0]}`);
    console.log(`Pasatiempo: ${this.pasatiempos[1]}`);
    console.log(`Pasatiempo: ${this.pasatiempos[2]}`);
    console.log(`Pasatiempo: ${this.pasatiempos[3]}`);
    console.log(`Pasatiempo: ${this.pasatiempos[4]}`);
    console.log(`Pasatiempo: ${this.pasatiempos[5]}`);
    console.log(`Pelicula favorita 1: ${this.peliculasFavoritas[0]}`);
    console.log(`Pelicula favorita 2: ${this.peliculasFavoritas[1]}`);
    console.log(`Pelicula favorita 3: ${this.peliculasFavoritas[2]}`);
    console.log(`Redes: ${this.contactos.redes}`);
    console.log(`Correo: ${this.contactos.correo}`);
    console.log(`Cel: ${this.contactos.cel}`);
    }
}

informacionPersonal.saludo();
informacionPersonal.impresionDeDatos();
informacionPersonal.libros[0].impresinDeDatos();
informacionPersonal.libros[1].impresinDeDatos();
informacionPersonal.libros[2].impresinDeDatos();