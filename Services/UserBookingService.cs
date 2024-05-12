using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RailWaySystem.Data;
using RailWaySystem.Models;
using RailWaySystem.Interfaces;

namespace RailWaySystem.Services
{
    public class UserBookingService : IUserBookingService
    {
        private readonly UserBookingContext _context;

        public UserBookingService(UserBookingContext context)
        {
            _context = context;
        }

        public async Task<string> CreateUserBookingAsync(UserBooking booking)
        {
            _context.UserBookings.Add(booking);
            await _context.SaveChangesAsync();
            return "Booking created successfully.";
        }
    }
}
