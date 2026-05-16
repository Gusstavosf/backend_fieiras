import Errobase from "./ErroBase.js";

class NaoEncontrado extends Errobase {
    constructor(message: string = "Página não encontrada") {
        super(message, 404)
    }
}

export default NaoEncontrado;