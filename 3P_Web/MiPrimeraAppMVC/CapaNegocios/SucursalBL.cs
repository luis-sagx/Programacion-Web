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
    }
}
