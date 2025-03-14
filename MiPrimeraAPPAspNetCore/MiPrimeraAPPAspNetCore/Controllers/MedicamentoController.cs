using CapaNegocio;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class MedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public List<MedicamentoCLS> ListarMedicamento()
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.ListarMedicamento();
        }

        public int GuardarMedicamento(MedicamentoCLS objMed)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.GuardarMedicamento(objMed);
        }

        public MedicamentoCLS RecuperarMedicamento(int idMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.RecuperarMedicamento(idMedicamento);
        }

        public int EliminarMedicamento(int idMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.EliminarMedicamento(idMedicamento);
        }

        }
}
