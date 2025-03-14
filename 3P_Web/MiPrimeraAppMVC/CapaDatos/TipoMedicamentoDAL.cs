using CapaEntidad;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CapaDatos
{
    public class TipoMedicamentoDAL : CadenaDAL
    {
        public int guardarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamentoCLS)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    string consulta = "";
                    if (oTipoMedicamentoCLS.idTipoMedicamento > 0)
                    {
                        consulta = "UPDATE TipoMedicamento SET NOMBRE = @nombre, DESCRIPCION = @descripcion WHERE IIDTIPOMEDICAMENTO = @idTipoMedicamento";
                    }
                    else
                    {
                        consulta = "INSERT INTO TipoMedicamento(NOMBRE, DESCRIPCION, BHABILITADO) VALUES(@nombre, @descripcion, 1)";
                    }

                    using (SqlCommand cmd = new SqlCommand(consulta, cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Parameters.AddWithValue("@nombre", oTipoMedicamentoCLS.nombre);
                        cmd.Parameters.AddWithValue("@descripcion", oTipoMedicamentoCLS.descripcion);
                        if (oTipoMedicamentoCLS.idTipoMedicamento > 0)
                        {
                            cmd.Parameters.AddWithValue("@idTipoMedicamento", oTipoMedicamentoCLS.idTipoMedicamento);
                        }
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                }
            }
            return respuesta;
        }
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();

            using (SqlConnection cn = new SqlConnection(cadena)) 
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspListarTipoMedicamento", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                TipoMedicamentoCLS oTipoMedicamentoCLS = new TipoMedicamentoCLS
                                {
                                    idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                                    nombre = dr.IsDBNull(1) ? "" : dr.GetString(1),
                                    descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2)
                                };

                                lista.Add(oTipoMedicamentoCLS);
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

        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombre)
        {
            List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();

            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspFiltrarTipoMedicamento", cn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@nombretipomedicamento", nombre ?? "");

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                TipoMedicamentoCLS oTipoMedicamentoCLS = new TipoMedicamentoCLS
                                {
                                    idTipoMedicamento = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                                    nombre = dr.IsDBNull(1) ? "" : dr.GetString(1),
                                    descripcion = dr.IsDBNull(2) ? "" : dr.GetString(2)
                                };

                                lista.Add(oTipoMedicamentoCLS);
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

        public TipoMedicamentoCLS recuperarTipoMedicamento(int idTipoMedicamento)
        {
            TipoMedicamentoCLS oTipoMedicamentoCLS = null; 
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("select IIDTIPOMEDICAMENTO as idTipoMedicamento, NOMBRE, DESCRIPCION " +
                        "from TipoMedicamento where BHABILITADO=1 and IIDTIPOMEDICAMENTO = @iidtipomedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Parameters.AddWithValue("@iidtipomedicamento", idTipoMedicamento);
                        using (SqlDataReader drd = cmd.ExecuteReader(CommandBehavior.SingleResult))
                        {
                            if (drd != null) {
                                int posId = drd.GetOrdinal("idTipoMedicamento");
                                int posNombre = drd.GetOrdinal("NOMBRE");
                                int posDescripcion = drd.GetOrdinal("DESCRIPCION");
                                while (drd.Read())
                                {
                                    oTipoMedicamentoCLS = new TipoMedicamentoCLS
                                    {
                                        idTipoMedicamento = drd.IsDBNull(posId) ? 0 : drd.GetInt32(0),
                                        nombre = drd.IsDBNull(posNombre) ? "" : drd.GetString(1),
                                        descripcion = drd.IsDBNull(posDescripcion) ? "" : drd.GetString(2)
                                    };
                                }
                            }
                            cn.Close();
                        }
                    }
                }
                catch (Exception)
                {
                    oTipoMedicamentoCLS = null;
                    cn.Close();
                }
            }
            return oTipoMedicamentoCLS;
        }

        public int eliminarTipoMedicamento(TipoMedicamentoCLS oTipoMedicamento)
        {
            int rpta = 0;
            using (SqlConnection cn = new SqlConnection(cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("UPDATE TipoMedicamento SET BHABILITADO = 0 WHERE IIDTIPOMEDICAMENTO = @idTipoMedicamento", cn))
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.Parameters.AddWithValue("@idTipoMedicamento", oTipoMedicamento.idTipoMedicamento);

                        rpta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception)
                {
                    rpta = 0;
                    throw;
                }
            }
            return rpta;
        }


    }
}
