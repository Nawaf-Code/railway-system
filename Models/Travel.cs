using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RailWaySystem.ClientApp.Models
{
    public class Travel
    {
        public int Id {get; set;}
        //public DateOnly Date {get; set;}
        public string? FromLocation {get; set;}
        public string? ToLocation {get; set;}

        public string? Duration {get; set;}
        public double Price {get; set;}
        
    }
}