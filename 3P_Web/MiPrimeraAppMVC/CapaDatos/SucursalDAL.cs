using CapaEntidad;
using System;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class SucursalDAL : CadenaDAL
    {
        public List<Sucursal> listarSucursales()
        {
            List<Sucursal> lista = new List<Sucursal>();

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarSucursal", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                Sucursal sucursal = new Sucursal
                                {
                                    iidSucursal = dr.GetInt32(0),
                                    nombre = dr.GetString(1),
                                    direccion = dr.GetString(2)
                                };

                                lista.Add(sucursal);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    lista = null;
                    throw;
                }
            }
            return lista;
        }

        public List<Sucursal> filtrarSucursales(Sucursal obj)
        {
            List<Sucursal> lista = new List<Sucursal>();

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursal", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@nombre", obj.nombre ?? "");
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion ?? "");

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                Sucursal sucursal = new Sucursal
                                {
                                    iidSucursal = dr.GetInt32(0),
                                    nombre = dr.GetString(1),
                                    direccion = dr.GetString(2)
                                };

                                lista.Add(sucursal);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    lista = null;
                    throw;
                }
            }
            return lista;
        }

    }
}
