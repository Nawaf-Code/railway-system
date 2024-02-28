using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RailWaySystem.Models;

namespace RailWaySystem.Data
{
    public class TravelContext : DbContext
    {   

        public TravelContext(DbContextOptions<TravelContext> options): base(options){

        }
        public DbSet<Travel>? Travels { get; set; }
    }
}