using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace practica1.Controllers
{
    public class MedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
