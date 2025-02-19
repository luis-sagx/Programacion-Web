using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class TipoMedicamentoDAL : BaseDAL
    {
        public List<TipoMedicamento> listarTipoMedicamento()
        {
            List<TipoMedicamento> lista = new List<TipoMedicamento>();

            try
            {
                string cadenaDato = ObtenerCadenaConexion();
                using (SqlConnection cn = new SqlConnection(cadenaDato))
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT IIDTIPOMEDICAMENTO, NOMBRE, DESCRIPCION FROM TipoMedicamento WHERE BHABILITADO = 1", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;

                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                TipoMedicamento medicamento = new TipoMedicamento
                                {
                                    idTipoMedicamento = dr.GetInt32(0),
                                    nombre = dr.GetString(1),
                                    descripcion = dr.GetString(2)
                                };
                                lista.Add(medicamento);
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
