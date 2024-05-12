using System.Threading.Tasks;
using RailWaySystem.Models;

namespace RailWaySystem.Interfaces
{
    public interface IUserService
    {
        Task<User> AuthenticateUserAsync(string userId, string password);
    }
}
