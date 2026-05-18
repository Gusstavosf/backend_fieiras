/*
  Warnings:

  - You are about to drop the `controle_requisicao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "controle_requisicao" DROP CONSTRAINT "controle_requisicao_id_armario_fkey";

-- DropTable
DROP TABLE "controle_requisicao";

-- CreateTable
CREATE TABLE "requisicao" (
    "id" SERIAL NOT NULL,
    "id_armario" INTEGER NOT NULL,
    "qtd_estoque_atual" INTEGER NOT NULL,
    "qtd_requisicao" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requisicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requisicao_posicao" (
    "id" SERIAL NOT NULL,
    "id_requisicao" INTEGER NOT NULL,
    "id_fieira" INTEGER NOT NULL,

    CONSTRAINT "requisicao_posicao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "requisicao" ADD CONSTRAINT "requisicao_id_armario_fkey" FOREIGN KEY ("id_armario") REFERENCES "armarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisicao_posicao" ADD CONSTRAINT "requisicao_posicao_id_requisicao_fkey" FOREIGN KEY ("id_requisicao") REFERENCES "requisicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requisicao_posicao" ADD CONSTRAINT "requisicao_posicao_id_fieira_fkey" FOREIGN KEY ("id_fieira") REFERENCES "estoque_fieiras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
