using CapaDatos;
using CapaEntidad;
using CapaNegocios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimeraAppMVC.Controllers
{
    public class SucursalController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public List<Sucursal> listarSucursales()
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.listarSucursales();
        }

        public List<Sucursal> filtrarSucursales(Sucursal objSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.filtrarSucursales(objSucursal);
        }
        public int guardarSucursal(Sucursal oSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.guardarSucursal(oSucursal);
        }

        public Sucursal recuperarSucursal(int iidSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.recuperarSucursal(iidSucursal);
        }

        public int eliminarSucursal(Sucursal oSucursal)
        {
            SucursalBL obj = new SucursalBL();
            return obj.eliminarSucursal(oSucursal);
        }

    }
}
