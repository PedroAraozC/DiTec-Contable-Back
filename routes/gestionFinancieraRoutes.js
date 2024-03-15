const { Router } = require("express");
const auth = require("../middlewares/auth");
const verifyRole = require("../middlewares/verifyRole");
const { listarAnexos, agregarAnexo, editarAnexo, borrarAnexo, listarFinalidades, agregarFinalidad, editarFinalidad, borrarFinalidad, listarFunciones, agregarFuncion, editarFuncion, borrarFuncion, listarItems, agregarItem, editarItem, borrarItem, listarPartidas, agregarPartida, editarPartida, borrarPartida, listarEjercicios, agregarEjercicio, editarEjercicio, borrarEjercicio, listarTiposDeMovimientos, listarOrganismos, agregarExpediente, listarPartidasConCodigo, obtenerDetPresupuestoPorItemYpartida } = require("../controllers/gestionFinancieraControllers");
const router = Router();

router.get("/anexo/listar", listarAnexos);
router.post("/anexo/alta", agregarAnexo)
router.put("/anexo/editar/:id",editarAnexo)
router.delete("/anexo/borrar", borrarAnexo)

router.get("/funcion/listar", listarFunciones);
router.post("/funcion/alta", agregarFuncion)
router.put("/funcion/editar/:id",editarFuncion)
router.delete("/funcion/borrar", borrarFuncion)

router.get("/finalidad/listar", listarFinalidades);
router.post("/finalidad/alta", agregarFinalidad)
router.put("/finalidad/editar/:id",editarFinalidad)
router.delete("/finalidad/borrar", borrarFinalidad)

router.get("/ejercicio/listar", listarEjercicios);
router.post("/ejercicio/alta", agregarEjercicio)
router.put("/ejercicio/editar/:id",editarEjercicio)
router.delete("/ejercicio/borrar", borrarEjercicio)

router.get("/item/listar", listarItems);
router.post("/item/alta", agregarItem)
router.put("/item/editar/:id",editarItem)
router.delete("/item/borrar", borrarItem)

router.get("/partida/listar", listarPartidas);
router.get("/partida/listarConCodigo", listarPartidasConCodigo);
router.post("/partida/alta", agregarPartida)
router.put("/partida/editar/:id",editarPartida)
router.delete("/partida/borrar", borrarPartida)

router.get("/tipoDeMovimiento/listar", listarTiposDeMovimientos);

router.get("/organismo/listar", listarOrganismos);

router.post("/expediente/alta",agregarExpediente)

router.get("/detPresupuesto/obtenerPorItemYPartida", obtenerDetPresupuestoPorItemYpartida)

module.exports = router;