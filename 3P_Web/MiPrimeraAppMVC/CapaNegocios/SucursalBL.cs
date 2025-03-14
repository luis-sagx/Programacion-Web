using CapaDatos;
using CapaEntidad;

namespace CapaNegocios
{
    public class SucursalBL
    {
        public List<Sucursal> listarSucursales()
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.listarSucursales();
        }

        public List<Sucursal> filtrarSucursales(Sucursal objSucursal)
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.filtrarSucursales(objSucursal);
        }
        public int guardarSucursal(Sucursal oSucursal)
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.guardarSucursal(oSucursal);
        }

        public Sucursal recuperarSucursal(int iidSucursal)
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.recuperarSucursal(iidSucursal);
        }

        public int eliminarSucursal(Sucursal oSucursal)
        {
            SucursalDAL obj = new SucursalDAL();
            return obj.eliminarSucursal(oSucursal);
        }
    }
}
