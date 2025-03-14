using CapaEntidad;
using System;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class SucursalDAL : CadenaDAL
    {
        public int guardarSucursal(Sucursal oSucursal)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    string consulta;

                    if (oSucursal.iidSucursal > 0)
                    {
                        // Actualizar sucursal
                        consulta = "UPDATE Sucursal SET NOMBRE = @nombre, DIRECCION = @direccion WHERE IIDSUCURSAL = @iidSucursal";
                    }
                    else
                    {
                        // Insertar nueva sucursal
                        consulta = "INSERT INTO Sucursal(NOMBRE, DIRECCION, BHABILITADO) VALUES(@nombre, @direccion, 1)";
                    }

                    using (SqlCommand cmd = new SqlCommand(consulta, cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@nombre", oSucursal.nombre ?? (object)DBNull.Value);
                        cmd.Parameters.AddWithValue("@direccion", oSucursal.direccion ?? (object)DBNull.Value);

                        // Si es una actualización, agregar el parámetro del ID
                        if (oSucursal.iidSucursal > 0)
                        {
                            cmd.Parameters.AddWithValue("@iidSucursal", oSucursal.iidSucursal);
                        }

                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    respuesta = 0;
                    Console.WriteLine("Error en guardarSucursal: " + ex.Message);
                    throw;
                }
            }
            return respuesta;
        }

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
                                    iidSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                                    nombre = dr.IsDBNull(1) ? "" : dr.GetString(1),
                                    direccion = dr.IsDBNull(2) ? "" : dr.GetString(2)
                                };

                                lista.Add(sucursal);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    lista = null;
                    Console.WriteLine("Error en listarSucursales: " + ex.Message);
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
                                    iidSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                                    nombre = dr.IsDBNull(1) ? "" : dr.GetString(1),
                                    direccion = dr.IsDBNull(2) ? "" : dr.GetString(2)
                                };

                                lista.Add(sucursal);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    lista = null;
                    Console.WriteLine("Error en filtrarSucursales: " + ex.Message);
                    throw;
                }
            }
            return lista;
        }

        public Sucursal recuperarSucursal(int iidSucursal)
        {
            Sucursal oSucursal = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT IIDSUCURSAL, NOMBRE, DIRECCION FROM Sucursal WHERE BHABILITADO = 1 AND IIDSUCURSAL = @iidSucursal", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@iidSucursal", iidSucursal);
                        using (SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.SingleResult))
                        {
                            if (dr.Read())
                            {
                                oSucursal = new Sucursal
                                {
                                    iidSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                                    nombre = dr.IsDBNull(1) ? "" : dr.GetString(1),
                                    direccion = dr.IsDBNull(2) ? "" : dr.GetString(2)
                                };
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    oSucursal = null;
                    Console.WriteLine("Error en recuperarSucursal: " + ex.Message);
                    throw;
                }
            }
            return oSucursal;
        }

        public int eliminarSucursal(Sucursal obj)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("UPDATE Sucursal SET BHABILITADO = 0 WHERE IIDSUCURSAL = @iidSucursal", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@iidSucursal", obj.iidSucursal);
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    respuesta = 0;
                    Console.WriteLine("Error en eliminarSucursal: " + ex.Message);
                    throw;
                }
            }
            return respuesta;
        }
    }
}