using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class MedicamentoDAL : CadenaDAL
    {
        public int guardarMedicamento(Medicamento oMedicamento)
        {
            int rpta = 0;
            try
            {
                using (SqlConnection cn = new SqlConnection(cadena))
                {
                    SqlCommand cmd = new SqlCommand("uspGuardarMedicamento", cn);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@iidmedicamento", oMedicamento.idMedicamento);
                    cmd.Parameters.AddWithValue("@codigo", oMedicamento.codigo);
                    cmd.Parameters.AddWithValue("@nombremedicamento", oMedicamento.nombreMedicamento);
                    cmd.Parameters.AddWithValue("@iidlaboratorio", oMedicamento.idLaboratorio);
                    cmd.Parameters.AddWithValue("@iidtipomedicamento", oMedicamento.idTipoMedicamento);
                    cmd.Parameters.AddWithValue("@usomedicamento", oMedicamento.usoMedicamento);
                    cmd.Parameters.AddWithValue("@contenido", oMedicamento.contenido);

                    cn.Open();
                    rpta = cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error al guardar el medicamento: " + ex.Message);
            }
            return rpta;
        }


        public List<Medicamento> listarMedicamentos()
        {
            List<Medicamento> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        SqlDataReader dr = cmd.ExecuteReader();


                        if (dr != null)
                        {
                            Medicamento omedicamentoCLS;
                            lista = new List<Medicamento>();
                            int posIdMedicamento = dr.GetOrdinal("IIDMEDICAMENTO");
                            int posCodigo = dr.GetOrdinal("CODIGO");
                            int posNombreMedicamento = dr.GetOrdinal("NOMBREMEDICAMENTO");
                            int posTipoMedicamento = dr.GetOrdinal("TIPO_MEDICAMENTO");
                            int posNombreLaboratorio = dr.GetOrdinal("NOMBRE_LABORATORIO");
                            int posUsoMedicamento = dr.GetOrdinal("USOMEDICAMENTO");
                            int posContenido = dr.GetOrdinal("CONTENIDO");
                            while (dr.Read())
                            {
                                omedicamentoCLS = new Medicamento();
                                omedicamentoCLS.idMedicamento = dr.IsDBNull(posIdMedicamento) ? 0 : dr.GetInt32(posIdMedicamento);
                                omedicamentoCLS.codigo = dr.IsDBNull(posCodigo) ? "" : dr.GetString(posCodigo);
                                omedicamentoCLS.nombreMedicamento = dr.IsDBNull(posNombreMedicamento) ? "" : dr.GetString(posNombreMedicamento);
                                omedicamentoCLS.nombreTipoMedicamento = dr.IsDBNull(posTipoMedicamento) ? "" : dr.GetString(posTipoMedicamento);
                                omedicamentoCLS.nombreLaboratorio = dr.IsDBNull(posNombreLaboratorio) ? "" : dr.GetString(posNombreLaboratorio);
                                omedicamentoCLS.usoMedicamento = dr.IsDBNull(posUsoMedicamento) ? "" : dr.GetString(posUsoMedicamento);
                                omedicamentoCLS.contenido = dr.IsDBNull(posContenido) ? "" : dr.GetString(posContenido);

                                lista.Add(omedicamentoCLS);
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

        public List<Medicamento> filtrarMedicamentos(Medicamento obj)
        {
            List<Medicamento> lista = new List<Medicamento>();
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarMedicamento", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@idmedicamento", obj.idMedicamento);
                        cmd.Parameters.AddWithValue("@nombre", obj.nombreMedicamento ?? "");
                        cmd.Parameters.AddWithValue("@idlaboratorio", obj.idLaboratorio);
                        cmd.Parameters.AddWithValue("@idtipomedicamento", obj.idTipoMedicamento);

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                Medicamento medicamento = new Medicamento
                                {
                                    idMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                                    nombreMedicamento = dr.IsDBNull(1) ? "" : dr.GetString(1),
                                    nombreLaboratorio = dr.IsDBNull(2) ? "" : dr.GetString(2),
                                    nombreTipoMedicamento = dr.IsDBNull(3) ? "" : dr.GetString(3)
                                };
                                lista.Add(medicamento);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    lista = null;
                    Console.WriteLine("Error en filtrarMedicamentos: " + ex.Message);
                    throw;
                }
            }
            return lista;
        }

        public Medicamento recuperarMedicamento(int idMedicamento)
        {
            Medicamento oMedicamento = null;
            try
            {
                using (SqlConnection cn = new SqlConnection(cadena))
                {
                    SqlCommand cmd = new SqlCommand("SELECT IIDMEDICAMENTO, CODIGO, NOMBREMEDICAMENTO, IIDLABORATORIO, IIDTIPOMEDICAMENTO, USOMEDICAMENTO, CONTENIDO FROM Medicamento WHERE IIDMEDICAMENTO = @id", cn);
                    cmd.Parameters.AddWithValue("@id", idMedicamento);
                    cn.Open();

                    SqlDataReader dr = cmd.ExecuteReader();

                    if (dr.Read())
                    {
                        oMedicamento = new Medicamento();
                        oMedicamento.idMedicamento = dr.GetInt32(0);
                        oMedicamento.codigo = dr.GetString(1);               // VARCHAR
                        oMedicamento.nombreMedicamento = dr.GetString(2);    // VARCHAR
                        oMedicamento.idLaboratorio = dr.GetInt32(3);         // INT
                        oMedicamento.idTipoMedicamento = dr.GetInt32(4);     // INT
                        oMedicamento.usoMedicamento = dr.GetString(5);       // VARCHAR
                        oMedicamento.contenido = dr.GetString(6);            // VARCHAR
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error al recuperar el medicamento: " + ex.Message);
            }
            return oMedicamento;
        }


        public int eliminarMedicamento(Medicamento oMedicamento)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarMedicamento", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidmedicamento", oMedicamento.idMedicamento);
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    respuesta = 0;
                    Console.WriteLine("Error en eliminarMedicamento: " + ex.Message);
                    throw;
                }
            }
            return respuesta;
        }
    }
}