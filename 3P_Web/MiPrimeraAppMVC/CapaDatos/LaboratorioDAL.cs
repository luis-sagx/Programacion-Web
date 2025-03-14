using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using CapaEntidad;

namespace CapaDatos
{
    public class LaboratorioDAL : CadenaDAL
    {
        public int guardarLaboratorio(Laboratorio oLaboratorio)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    string consulta;

                    if (oLaboratorio.idLaboratorio > 0)
                    {
                        consulta = "UPDATE Laboratorio SET NOMBRE = @nombre, DIRECCION = @direccion, PERSONACONTACTO = @personaContacto, NUMEROCONTACTO = @numeroContacto WHERE IIDLABORATORIO = @idLaboratorio";
                    }
                    else
                    {
                        consulta = "INSERT INTO Laboratorio(NOMBRE, DIRECCION, PERSONACONTACTO, NUMEROCONTACTO, BHABILITADO) VALUES(@nombre, @direccion, @personaContacto, @numeroContacto, 1)";
                    }

                    using (SqlCommand cmd = new SqlCommand(consulta, cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@nombre", oLaboratorio.nombre ?? (object)DBNull.Value);
                        cmd.Parameters.AddWithValue("@direccion", oLaboratorio.direccion ?? (object)DBNull.Value);
                        cmd.Parameters.AddWithValue("@personaContacto", oLaboratorio.personaContacto ?? (object)DBNull.Value);
                        cmd.Parameters.AddWithValue("@numeroContacto", oLaboratorio.numeroContacto ?? (object)DBNull.Value);

                        // Se agrega este parámetro solo si es una actualización
                        if (oLaboratorio.idLaboratorio > 0)
                        {
                            cmd.Parameters.AddWithValue("@idLaboratorio", oLaboratorio.idLaboratorio);
                        }

                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    respuesta = 0;
                    Console.WriteLine("Error en guardarLaboratorio: " + ex.Message);
                    throw;
                }
            }
            return respuesta;
        }


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
                                    idLaboratorio = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                                    nombre = dr.IsDBNull(1) ? "" : dr.GetString(1),
                                    direccion = dr.IsDBNull(2) ? "" : dr.GetString(2),
                                    personaContacto = dr.IsDBNull(3) ? "" : dr.GetString(3),
                                    numeroContacto = dr.IsDBNull(4) ? "" : dr.GetString(4),
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
                                    idLaboratorio = dr.GetInt32(0),
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
        public Laboratorio recuperarLaboratorio(int idLaboratorio)
        {
            Laboratorio oLaboratorio = null;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT IIDLABORATORIO, NOMBRE, DIRECCION, PERSONACONTACTO, NUMEROCONTACTO FROM Laboratorio WHERE BHABILITADO = 1 AND IIDLABORATORIO = @idLaboratorio", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@idLaboratorio", idLaboratorio);
                        using (SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult))
                        {
                            if (drd.Read())
                            {
                                oLaboratorio = new Laboratorio
                                {
                                    idLaboratorio = drd.GetInt32(0),
                                    nombre = drd.GetString(1),
                                    direccion = drd.GetString(2),
                                    personaContacto = drd.GetString(3),
                                    numeroContacto = drd.GetString(4)
                                };
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    oLaboratorio = null;
                    throw;
                }
            }
            return oLaboratorio;
        }

        public int eliminarLaboratorio(Laboratorio oLaboratorio)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("UPDATE Laboratorio SET BHABILITADO = 0 WHERE IIDLABORATORIO = @idLaboratorio", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@idLaboratorio", oLaboratorio.idLaboratorio);
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    respuesta = 0;
                    Console.WriteLine("Error en eliminarLaboratorio: " + ex.Message);
                    throw;
                }
            }
            return respuesta;
        }

    }
}
