using System.Collections.Generic;
using System.Threading.Tasks;
using RailWaySystem.Models;

namespace RailWaySystem.Data
{
    public interface ITravelRepository
    {
        Task<IEnumerable<Travel>> GetTravelsByRouteAsync(string origin, string destination);
    }
}
