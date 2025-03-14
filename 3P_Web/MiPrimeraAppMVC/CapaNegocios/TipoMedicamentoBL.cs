using CapaDatos;
using CapaEntidad;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CapaNegocios
{
    public class TipoMedicamentoBL
    {
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
        }

        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombre)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.filtrarTipoMedicamento(nombre);  
        }

        public int guardarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS) {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.guardarTipoMedicamento(oTipoMedicamentoCLS);
        }

        public TipoMedicamentoCLS recuperarTipoMedicamento(int idTipoMedicamento) {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.recuperarTipoMedicamento(idTipoMedicamento);
        }
        public int eliminarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.eliminarTipoMedicamento(oTipoMedicamentoCLS);
        }

    }
}

