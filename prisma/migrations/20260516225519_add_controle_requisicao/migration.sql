-- CreateTable
CREATE TABLE "controle_requisicao" (
    "id_requisicao" SERIAL NOT NULL,
    "id_armario" INTEGER NOT NULL,
    "qtd_estoque_atual" INTEGER NOT NULL,
    "qtd_requisicao" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "controle_requisicao_pkey" PRIMARY KEY ("id_requisicao")
);

-- AddForeignKey
ALTER TABLE "controle_requisicao" ADD CONSTRAINT "controle_requisicao_id_armario_fkey" FOREIGN KEY ("id_armario") REFERENCES "armarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
