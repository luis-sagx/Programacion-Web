using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaDatos;
using CapaEntidad;

namespace CapaNegocios
{
    public class LaboratorioBL
    {
        public List<Laboratorio> listarLaboratorios()
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.listarLaboratorios();
        }

        public List<Laboratorio> filtrarLaboratorios(Laboratorio objLaboratorio)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.filtrarLaboratorios(objLaboratorio);
        }

        public int guardarLaboratorio(Laboratorio oLaboratorioCLS)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.guardarLaboratorio(oLaboratorioCLS);
        }

        public Laboratorio recuperarLaboratorio(int idLaboratorio)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.recuperarLaboratorio(idLaboratorio);
        }

        public int eliminarLaboratorio(Laboratorio objLaboratorio)
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.eliminarLaboratorio(objLaboratorio);
        }

    }
}
