using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAppMVC.Controllers
{
    public class MedicamentoController : Controller
    {
        // GET: MedicamentoController
        public ActionResult Index()
        {
            return View();
        }

        // GET: MedicamentoController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: MedicamentoController/Create
        public ActionResult Create()
        {
            return View();
        }


        // POST: MedicamentoController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: MedicamentoController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: MedicamentoController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: MedicamentoController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: MedicamentoController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
