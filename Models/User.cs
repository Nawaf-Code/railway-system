using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RailWaySystem.Models
{
    public class User
    {
        public int Id {get; set;} //primary key
        public required string? UserId {get; set;}
        public required string? Password {get; set;}
        public required string? Email {get; set;}
        public string? Fname {get; set;}
        public string? Lname {get; set;}
    }
}