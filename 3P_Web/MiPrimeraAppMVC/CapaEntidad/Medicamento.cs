using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidad
{
    public class Medicamento
    {
        public int idMedicamento { get; set; }
        public string codigo { get; set; }

        public string nombreMedicamento { get; set; }
        public int idLaboratorio { get; set; }
        public int idTipoMedicamento { get; set; }
        public string usoMedicamento { get; set; }
        public string contenido { get; set; }
        public string nombreLaboratorio { get; set; } 
        public string nombreTipoMedicamento { get; set; }
    }
}
