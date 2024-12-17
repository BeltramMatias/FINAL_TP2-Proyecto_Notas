import NotaDAO from '../DAOs/NotaDAO.js';

let currentId = 0;

const NotaController = {
    registrarNota: (req, res) => {
        try {
            const { nombre, apellido, nota } = req.body;

            if (!nombre || !apellido || nota < 0 || nota > 10) {
                return res.status(400).json({ errorMsg: "Datos inválidos" });
            }

            const nuevaNota = { id: ++currentId, nombre, apellido, nota };

            NotaDAO.agregarNota(nuevaNota);

            res.status(201).json(nuevaNota);
        } catch (error) {
            console.error("Error al registrar la nota:", error);
            res.status(500).json({ errorMsg: "Error al registrar la nota", error });
        }
    },

    listarNotas: (req, res) => {
        try {
            const notas = NotaDAO.obtenerNotas();
            res.json(notas);
        } catch (error) {
            console.error("Error al listar las notas:", error);
            res.status(500).json({ errorMsg: "Error al listar las notas", error });
        }
    },

    listarNotasAgrupadas: (req, res) => {
        try {
            const agrupadas = NotaDAO.agruparPorAlumno();
            res.json(agrupadas);
        } catch (error) {
            console.error("Error al listar las notas agrupadas:", error);
            res.status(500).json({ errorMsg: "Error al listar las notas agrupadas", error });
        }
    },

    estadisticas: (req, res) => {
        try {
            const promedio = NotaDAO.estadisticas();
            res.json(promedio);
        } catch (error) {
            console.error("Error al obtener las estadísticas:", error);
            res.status(500).json({ errorMsg: "Error al obtener las estadísticas", error });
        }
    },

    estadisticasGeneral: (req, res) => {
        try {
            const promedioCurso = NotaDAO.estadisticasGeneral();
            res.json(promedioCurso);
        } catch (error) {
            console.error("Error al obtener las estadísticas del curso:", error);
            res.status(500).json({ errorMsg: "Error al obtener las estadísticas del curso", error });
        }
    }
};

export default NotaController;
