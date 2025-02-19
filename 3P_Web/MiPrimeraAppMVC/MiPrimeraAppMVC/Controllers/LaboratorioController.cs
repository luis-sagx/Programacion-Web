using CapaDatos;
using CapaEntidad;
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
            LaboratorioDAL obj = new LaboratorioDAL();
            return obj.filtrarLaboratorios(objLaboratorio);
        }
    }
}
