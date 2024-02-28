using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RailWaySystem.Models
{
    public class UsersBooking
    {
        public int Id { get; set; }
        
        public string? UserId { get; set; } 
        
        public string? TrainNumber { get; set; } 

        public string? DateOfTravel {get; set;}
        public string? Origin {get; set;}
        public string? Destination {get; set;}
        public string? DepartureTime {get; set;}
        public string? TimeArrival {get; set;}

        public string? Duration {get; set;}
    }
}