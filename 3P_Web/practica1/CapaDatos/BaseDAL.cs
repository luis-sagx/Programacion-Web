using Microsoft.Extensions.Configuration;
using System;
using System.Data.SqlClient;
using System.IO;

namespace CapaDatos
{
    public class BaseDAL
    {
        protected string ObtenerCadenaConexion()
        {
            try
            {
                IConfigurationBuilder builder = new ConfigurationBuilder();
                builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
                var root = builder.Build();
                return root.GetConnectionString("cn");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error al obtener la cadena de conexión: " + ex.Message);
                return string.Empty;
            }
        }
    }
}
