using CapaNegocio;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class SucursalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public List<SucursalCLS> ListarSucursal()
        {
            SucursalBL obj = new SucursalBL();
            return obj.ListarSucursal();
        }


        public List<SucursalCLS> FiltrarSucursal(SucursalCLS objSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.FiltrarSucursal(objSucursal);
        }

        public int GuardarSucursal(SucursalCLS objSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.GuardarSucursal(objSucursal);
        }

        public SucursalCLS RecuperarSucursal(int idSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.RecuperarSucursal(idSucursal);
        }
        public int EliminarSucursal(int idSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.EliminarSucursal(idSucursal);
        }
    }
}
