using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using e_portfolio.Models;
using Microsoft.EntityFrameworkCore;

namespace e_portfolio.Data
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(DbContextOptions<ProjectContext> options)
            : base(options)
        {
        }
        public DbSet<Project> Projects { get; set; }


    }
}
