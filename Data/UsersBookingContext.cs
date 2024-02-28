using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RailWaySystem.Models;

namespace RailWaySystem.Data
{
    public class UsersBookingContext : DbContext
    {   

        public UsersBookingContext(DbContextOptions<UsersBookingContext> options): base(options){

        }
        public DbSet<UsersBooking>? UsersBookings { get; set; }
    }
}