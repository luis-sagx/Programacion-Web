using System;
using Microsoft.Extensions.Configuration;


namespace CapaDatos
{
    public class CadenaDAL
    {
        public string cadena { get; set; }

        public CadenaDAL()
        {
            IConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            IConfigurationRoot root = builder.Build();
            cadena = root.GetConnectionString("cn");
        }
    }
}
