using System.Data.SqlClient;
using System.Data;
using CapaEntidad;

namespace CapaDatos
{
    public class LaboratorioDAL : CadenaDAL
    {
        public List<Laboratorio> listarLaboratorios()
        {
            List<Laboratorio> lista = new List<Laboratorio>();

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarLaboratorio", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                Laboratorio laboratorio = new Laboratorio
                                {
                                    iidLaboratorio = dr.GetInt32(0),
                                    nombre = dr.GetString(1),
                                    direccion = dr.GetString(2),
                                    personaContacto = dr.GetString(3)
                                };

                                lista.Add(laboratorio);
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

        public List<Laboratorio> filtrarLaboratorios(Laboratorio obj)
        {
            List<Laboratorio> lista = new List<Laboratorio>();

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarLaboratorio", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombre", obj.nombre == null ? "" : obj.nombre);
                        cmd.Parameters.AddWithValue("@direccion", obj.direccion == null ? "" : obj.direccion);
                        cmd.Parameters.AddWithValue("@personacontacto", obj.personaContacto == null ? "" : obj.personaContacto);

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                Laboratorio laboratorio = new Laboratorio
                                {
                                    iidLaboratorio = dr.GetInt32(0),
                                    nombre = dr.GetString(1),
                                    direccion = dr.GetString(2),
                                    personaContacto = dr.GetString(3)
                                };

                                lista.Add(laboratorio);
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
    }
}
