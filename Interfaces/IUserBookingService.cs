using System.Threading.Tasks;
using RailWaySystem.Models;

namespace RailWaySystem.Interfaces
{
    public interface IUserBookingService
    {
        Task<string> CreateUserBookingAsync(UserBooking booking);
    }
}
