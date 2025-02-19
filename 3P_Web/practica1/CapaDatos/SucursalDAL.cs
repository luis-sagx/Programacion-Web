using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class SucursalDAL : BaseDAL
    {
        public List<Sucursal> listarSucursales()
        {
            List<Sucursal> lista = new List<Sucursal>();

            try
            {
                string cadenaDato = ObtenerCadenaConexion();
                using (SqlConnection cn = new SqlConnection(cadenaDato))
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
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }

            return lista;
        }
    }
}
