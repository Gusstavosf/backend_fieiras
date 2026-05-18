import Errobase from "./ErroBase.js";

class RequisicaoIncorreta extends Errobase {
  detalhes?: { campo: string; mensagem: string }[];

  constructor(mensagem: string = "Requisição incorreta", detalhes?: { campo: string; mensagem: string }[]) {
    super(mensagem, 400, detalhes);
    this.name = "RequisicaoIncorreta";
  }
}

export default RequisicaoIncorreta;