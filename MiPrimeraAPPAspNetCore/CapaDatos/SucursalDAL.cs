using CapaEntidad;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class SucursalDAL : CadenaDAL
    {
        public List<SucursalCLS> ListarSucursal()
        {
            List<SucursalCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            SucursalCLS sucursal;
                            lista = new List<SucursalCLS>();
                            while (dr.Read())
                            {
                                sucursal = new SucursalCLS();
                                sucursal.idSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                sucursal.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                sucursal.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);

                                lista.Add(sucursal);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    lista = null;
                    throw;
                }
            }
            return lista;
        }

        public List<SucursalCLS> FiltrarSucursal(SucursalCLS obj)
        {
            List<SucursalCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombresucursal", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);
                        SqlDataReader dr = cmd.ExecuteReader();


                        if (dr != null)
                        {
                            SucursalCLS otipoMedicamentoCLS;
                            lista = new List<SucursalCLS>();
                            while (dr.Read())
                            {
                                otipoMedicamentoCLS = new SucursalCLS();
                                otipoMedicamentoCLS.idSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                otipoMedicamentoCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                otipoMedicamentoCLS.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);

                                lista.Add(otipoMedicamentoCLS);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    lista = null;
                    throw;

                }
            }
            return lista;

        }

        public int GuardarSucursal(SucursalCLS obj)
        {
            int r = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidsucursal", obj.idSucursal);
                        cmd.Parameters.AddWithValue("@nombre", obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion);

                        // Pasar NULL explícitamente para @fotosucursal y @nombrefotosucursal
                        cmd.Parameters.Add("@fotosucursal", SqlDbType.VarBinary, -1).Value = DBNull.Value;
                        cmd.Parameters.Add("@nombrefotosucursal", SqlDbType.VarChar, 100).Value = DBNull.Value;

                        r = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    // Loguear el error para depuración
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
            return r;
        }

        public SucursalCLS RecuperarSucursal(int idSucursal)
        {
            SucursalCLS sucursal = new SucursalCLS();
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarSucursal ", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidsucursal", idSucursal);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            while (dr.Read())
                            {
                                sucursal.idSucursal = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                sucursal.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                sucursal.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                }
            }
            return sucursal;
        }

        public int EliminarSucursal(int idSucursal)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidsucursal", idSucursal);
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                }
            }
            return respuesta;
        }

        }
}
