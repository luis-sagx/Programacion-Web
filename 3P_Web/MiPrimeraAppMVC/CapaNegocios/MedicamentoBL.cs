using System;
using System.Collections.Generic;
using CapaDatos;
using CapaEntidad;

namespace CapaNegocios
{
    public class MedicamentoBL
    {
        public int guardarMedicamento(Medicamento oMedicamento)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.guardarMedicamento(oMedicamento);
        }

        public List<Medicamento> listarMedicamentos()
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.listarMedicamentos();
        }

        public List<Medicamento> filtrarMedicamentos(Medicamento oMedicamento)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.filtrarMedicamentos(oMedicamento);
        }

        public Medicamento recuperarMedicamento(int iidMedicamento)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.recuperarMedicamento(iidMedicamento);
        }

        public int eliminarMedicamento(Medicamento oMedicamento)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.eliminarMedicamento(oMedicamento);
        }
    }
}
