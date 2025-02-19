using CapaDatos;
using CapaEntidad;

namespace CapaNegocios
{
    public class TipoMedicamentoBL
    {
        public List<TipoMedicamento> listarTipoMedicamento()
        {
            TipoMedicamentoDAL obj = new TipoMedicamentoDAL();
            return obj.listarTipoMedicamento();
        }
    }
}
