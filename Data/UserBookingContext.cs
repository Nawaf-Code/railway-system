using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RailWaySystem.Models;

namespace RailWaySystem.Data
{
    public class UserBookingContext : DbContext
    {   

        public UserBookingContext(DbContextOptions<UserBookingContext> options): base(options){

        }
        public DbSet<UserBooking>? UserBookings { get; set; }
    }
}