using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace e_portfolio.Models
{
    public class Project
    {
        public int ID { get; set; }
        [DisplayName("Project")]
        public string Name { get; set; }
        public string Description { get; set; }
        [DisplayName("Repositoy")]
        public string URL { get; set; }
    }
}
