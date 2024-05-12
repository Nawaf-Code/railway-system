using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RailWaySystem.Data;
using RailWaySystem.Models;
using RailWaySystem.Interfaces;

namespace RailWaySystem.Services
{
    public class UserService : IUserService
    {
        private readonly UserContext _context;

        public UserService(UserContext context)
        {
            _context = context;
        }

        public async Task<User> AuthenticateUserAsync(string userId, string password)
        {
            return await _context.Users
                .FirstOrDefaultAsync(u => u.UserId == userId && u.Password == password);
        }
    }
}
