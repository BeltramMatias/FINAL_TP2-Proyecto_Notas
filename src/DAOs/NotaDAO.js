let notasDB = [];

const NotaDAO = {
    agregarNota: (nota) => { 
        notasDB.push(nota); 
    },

    obtenerNotas: () => notasDB,

    agruparPorAlumno: () => {
        const resultado = {}; 

        notasDB.forEach(nota => {
            const key = `${nota.nombre} ${nota.apellido}`;
            if (!resultado[key]) {
                resultado[key] = { 
                    nombre: nota.nombre, 
                    apellido: nota.apellido, 
                    notas: [] 
                };
            }
            resultado[key].notas.push(nota.nota);
        });

        return Object.values(resultado);
    },

    estadisticas: () => {
        const resultado = {};

        notasDB.forEach(nota => {
            const key = `${nota.nombre} ${nota.apellido}`;

            if (!resultado[key]) {
                resultado[key] = { 
                    suma: 0, 
                    cantidad: 0, 
                    minima: nota.nota, 
                    maxima: nota.nota 
                };
            }
 
            resultado[key].cantidad++;
            resultado[key].suma += nota.nota;
            resultado[key].minima = Math.min(resultado[key].minima, nota.nota);
            resultado[key].maxima = Math.max(resultado[key].maxima, nota.nota);
        });

        return Object.keys(resultado).map(key => {
            const [nombre, apellido] = key.split(' ');
            const { suma, cantidad, minima, maxima } = resultado[key];
            return {
                nombre,
                apellido,
                promedio: (suma / cantidad).toFixed(2),
                cantidad,
                minima,
                maxima
            };
        });
    },

    estadisticasGeneral: () => {
        let sumaTotal = 0;
        let cantidadTotal = 0;

        if (notasDB.length === 0) {
            return { promedioGeneral: 0, cantidadTotal: 0 };
        }

        notasDB.forEach(nota => {
            sumaTotal += nota.nota;
            cantidadTotal++;
        });

        const promedioGeneral = (sumaTotal / cantidadTotal).toFixed(2);

        return { promedioGeneral, cantidadTotal };
    }
};

export default NotaDAO;
