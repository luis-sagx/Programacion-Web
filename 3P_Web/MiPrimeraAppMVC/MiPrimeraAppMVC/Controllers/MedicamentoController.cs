using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CapaEntidad;
using CapaNegocios;

namespace MiPrimeraAppMVC.Controllers
{
    public class MedicamentoController : Controller
    {
        // GET: MedicamentoController
        public ActionResult Index()
        {
            return View();
        }

        public List<Medicamento> listarMedicamentos()
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.listarMedicamentos();
        }

        public List<Medicamento> filtrarMedicamentos(Medicamento oMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.filtrarMedicamentos(oMedicamento);
        }

        public int guardarMedicamento(Medicamento oMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.guardarMedicamento(oMedicamento);
        }


        public Medicamento recuperarMedicamento(int iidMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.recuperarMedicamento(iidMedicamento);
        }

        public int eliminarMedicamento(Medicamento oMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.eliminarMedicamento(oMedicamento);
        }
    }
}
