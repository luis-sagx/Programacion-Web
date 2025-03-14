using CapaEntidad;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class LaboratorioDAL : CadenaDAL
    {
        public List<LaboratorioCLS> ListarLaboratorio()
        {
            List<LaboratorioCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        SqlDataReader dr = cmd.ExecuteReader();

                        if (dr != null)
                        {
                            LaboratorioCLS laboratorio;
                            lista = new List<LaboratorioCLS>();
                            while (dr.Read())
                            {
                                laboratorio = new LaboratorioCLS();
                                laboratorio.idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                laboratorio.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                laboratorio.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                laboratorio.personaContacto = dr.IsDBNull(3) ? "" : dr.GetString(3);
                                laboratorio.numeroContacto = dr.IsDBNull(4) ? "" : dr.GetString(4);

                                lista.Add(laboratorio);
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

        public List<LaboratorioCLS> FiltrarLaboratorio(LaboratorioCLS obj)
        {
             List<LaboratorioCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        cmd.Parameters.AddWithValue("@nombre", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", obj.personaContacto == null ? "" : obj.personaContacto);
                        cmd.Parameters.AddWithValue("@numerocontacto", obj.numeroContacto == null ? "" : obj.numeroContacto);

                        SqlDataReader dr = cmd.ExecuteReader();


                        if (dr != null)
                        {
                            LaboratorioCLS olaboratorioCLS;
                            lista = new List<LaboratorioCLS>();
                            while (dr.Read())
                            {
                                olaboratorioCLS = new LaboratorioCLS();
                                olaboratorioCLS.idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                olaboratorioCLS.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                olaboratorioCLS.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                olaboratorioCLS.personaContacto = dr.IsDBNull(3) ? "" : dr.GetString(3);
                                olaboratorioCLS.numeroContacto = dr.IsDBNull(4) ? "" : dr.GetString(4);

                                lista.Add(olaboratorioCLS);
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

        public int GuardarLaboratorio(LaboratorioCLS obj)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idlaboratorio", obj.idLaboratorio);
                        cmd.Parameters.AddWithValue("@nombre", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", obj.personaContacto == null ? "" : obj.personaContacto);
                        cmd.Parameters.AddWithValue("@numerocontacto", obj.numeroContacto == null ? "" : obj.numeroContacto);
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    respuesta = 0;
                    throw;
                }
            }
            return respuesta;
        }

        public LaboratorioCLS RecuperarLaboratorio(int idLaboratorio) {
            LaboratorioCLS laboratorio = new LaboratorioCLS();

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspRecuperarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidlaboratorio", idLaboratorio);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            while (dr.Read())
                            {
                                laboratorio.idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0);
                                laboratorio.nombre = dr.IsDBNull(1) ? "" : dr.GetString(1);
                                laboratorio.direccion = dr.IsDBNull(2) ? "" : dr.GetString(2);
                                laboratorio.personaContacto = dr.IsDBNull(3) ? "" : dr.GetString(3);
                                laboratorio.numeroContacto = dr.IsDBNull(4) ? "" : dr.GetString(4);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                }
            }
            return laboratorio;
        }

        public int EliminarLaboratorio(int idLaboratorio)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarLaboratorio", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id", idLaboratorio);
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
