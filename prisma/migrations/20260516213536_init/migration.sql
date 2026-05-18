-- CreateEnum
CREATE TYPE "Status" AS ENUM ('nova', 'requisicao', 'morta', 'polida');

-- CreateTable
CREATE TABLE "armarios" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "largura" DECIMAL(10,2) NOT NULL,
    "espessura" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "armarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoque_fieiras" (
    "id" SERIAL NOT NULL,
    "id_armario" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "espessura_atual" DECIMAL(10,2),
    "largura_atual" DECIMAL(10,2),
    "utilizacao" INTEGER,
    "producao" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estoque_fieiras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "controle_fieiras" (
    "id" SERIAL NOT NULL,
    "ordem" INTEGER NOT NULL,
    "tipo_fio" TEXT NOT NULL,
    "tensao" INTEGER NOT NULL,
    "largura" DECIMAL(10,2) NOT NULL,
    "espessura" DECIMAL(10,2) NOT NULL,
    "armario_id" INTEGER NOT NULL,
    "data_inicio_ordem" TIMESTAMP(3) NOT NULL,
    "data_fim_ordem" TIMESTAMP(3) NOT NULL,
    "qtd_ordem" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "controle_fieiras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "estoque_fieiras" ADD CONSTRAINT "estoque_fieiras_id_armario_fkey" FOREIGN KEY ("id_armario") REFERENCES "armarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "controle_fieiras" ADD CONSTRAINT "controle_fieiras_armario_id_fkey" FOREIGN KEY ("armario_id") REFERENCES "armarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
