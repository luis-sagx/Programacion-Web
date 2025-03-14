using CapaDatos;
using CapaEntidad;
using System.Reflection.Metadata.Ecma335;

namespace CapaNegocio
{
    public class SucursalBL
    {
        public List<SucursalCLS> ListarSucursal()
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.ListarSucursal();
        }

        public List<SucursalCLS> FiltrarSucursal(SucursalCLS sucursalCLS)
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.FiltrarSucursal(sucursalCLS);
        }

        public int GuardarSucursal(SucursalCLS sucursalCLS)
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.GuardarSucursal(sucursalCLS);
        }

        public SucursalCLS RecuperarSucursal(int idSucursal)
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.RecuperarSucursal(idSucursal);
        }

        public int EliminarSucursal(int idSucursal)
        {
            SucursalDAL sucursalDAL = new SucursalDAL();
            return sucursalDAL.EliminarSucursal(idSucursal);
        }
    }
}