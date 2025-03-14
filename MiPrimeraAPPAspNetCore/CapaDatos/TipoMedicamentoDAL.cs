using CapaEntidad;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class TipoMedicamentoDAL : CadenaDAL
    {
        public List<TipoMedicamentoCLS> ListarTipoMedicamento()
        {
            List<TipoMedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        SqlDataReader dr = cmd.ExecuteReader();


                        if (dr != null)
                        {
                            TipoMedicamentoCLS otipoMedicamentoCLS;
                            lista = new List<TipoMedicamentoCLS>();
                            while (dr.Read())
                            {
                                otipoMedicamentoCLS = new TipoMedicamentoCLS();
                                otipoMedicamentoCLS.idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                otipoMedicamentoCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                otipoMedicamentoCLS.descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2);

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

        public List<TipoMedicamentoCLS> FiltrarTipoMedicamento(string nombre)
        {
            List<TipoMedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombretipomedicamento", nombre == null ? "" : nombre);
                        SqlDataReader dr = cmd.ExecuteReader();


                        if (dr != null)
                        {
                            TipoMedicamentoCLS otipoMedicamentoCLS;
                            lista = new List<TipoMedicamentoCLS>();
                            while (dr.Read())
                            {
                                otipoMedicamentoCLS = new TipoMedicamentoCLS();
                                otipoMedicamentoCLS.idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                otipoMedicamentoCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                otipoMedicamentoCLS.descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2);

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

        public int GuardarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        // Parámetros para el procedimiento almacenado
                        cmd.Parameters.AddWithValue("@iidtipomedicamento", oTipoMedicamentoCLS.idTipoMedicamento);
                        cmd.Parameters.AddWithValue("@nombre", oTipoMedicamentoCLS.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", oTipoMedicamentoCLS.descripcion);

                        // Ejecutar el procedimiento almacenado
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    // Loguear el error si es necesario
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
            return respuesta;
        }

        public TipoMedicamentoCLS RecuperarTipoMedicamento(int idTipoMedicamento)
        {
            TipoMedicamentoCLS otipoMedicamentoCLS = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidtipomedicamento", idTipoMedicamento);
                        SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.SingleResult);


                        if (dr != null)
                        {
                            int posId = dr.GetOrdinal("IIDTIPOMEDICAMENTO");
                            int posNombre = dr.GetOrdinal("NOMBRE");
                            int posDescripcion = dr.GetOrdinal("DESCRIPCION");

                            while (dr.Read())
                            {
                                otipoMedicamentoCLS = new TipoMedicamentoCLS();
                                otipoMedicamentoCLS.idTipoMedicamento = dr.IsDBNull(posId) ? 0 : dr.GetInt32(0);
                                otipoMedicamentoCLS.nombre = dr.IsDBNull(posNombre) ? "" : dr.GetString(1);
                                otipoMedicamentoCLS.descripcion = dr.IsDBNull(posDescripcion) ? "" : dr.GetString(2);

                            }
                            cn.Close();
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    otipoMedicamentoCLS = null;
                    throw;

                }
            }
            return otipoMedicamentoCLS;

        }

        public int EliminarTipoMedicamento(int idTipoMedicamento)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarTipoMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        // Parámetros para el procedimiento almacenado
                        cmd.Parameters.AddWithValue("@iidtipomedicamento", idTipoMedicamento);
                        // Ejecutar el procedimiento almacenado
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    // Loguear el error si es necesario
                    Console.WriteLine("Error: " + ex.Message);
                }
            }
            return respuesta;
        }



        }
}

