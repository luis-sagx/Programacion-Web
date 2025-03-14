using CapaNegocio;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class TipoMedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<TipoMedicamentoCLS> ListarTipoMedicamento()
        {
            TipoMedicamentoBL tipoMedicamentoBL = new TipoMedicamentoBL();
            return tipoMedicamentoBL.ListartipoMedicamento();
        }

        public List<TipoMedicamentoCLS> FiltrartipoMedicamento(string nombre)
        {
            TipoMedicamentoBL tipoMedicamentoBL = new TipoMedicamentoBL();
            return tipoMedicamentoBL.FiltrartipoMedicamento(nombre);
        }

        public int GuardarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.GuardarTipoMedicamento(oTipoMedicamentoCLS);
        }

        public TipoMedicamentoCLS RecuperarTipoMedicamento(int idTipoMedicamento)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.RecuperarTipoMedicamento(idTipoMedicamento);
        }

        public int EliminarTipoMedicamento(int idTipoMedicamento)
        {
            TipoMedicamentoBL obj = new TipoMedicamentoBL();
            return obj.EliminarTipoMedicamento(idTipoMedicamento);
        }
    }
}
