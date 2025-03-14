using CapaDatos;
using CapaEntidad;
using CapaNegocios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAppMVC.Controllers
{
    public class LaboratorioController : Controller
    {
        // GET: LaboratorioController
        public ActionResult Index()
        {
            return View();
        }

        public List<Laboratorio> listarLaboratorios()
        {
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.listarLaboratorios();
        }

        public List<Laboratorio> filtrarLaboratorios(Laboratorio objLaboratorio)
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.filtrarLaboratorios(objLaboratorio);
        }

        public int guardarLaboratorio(Laboratorio oLaboratorioCLS)
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.guardarLaboratorio(oLaboratorioCLS);
        }

        public Laboratorio recuperarLaboratorio(int idLaboratorio)
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.recuperarLaboratorio(idLaboratorio);
        }

        public int eliminarLaboratorio(Laboratorio objLaboratorio)
        {
            LaboratorioBL obj = new LaboratorioBL();
            return obj.eliminarLaboratorio(objLaboratorio);
        }
    }
}
