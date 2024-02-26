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
        public string? Origin {get; set;}
        public string? Destination {get; set;}
        public string? DepartureTime {get; set;}
        public string? TimeArrival {get; set;}

        public string? Duration {get; set;}
        public double Price {get; set;}
        
    }
}