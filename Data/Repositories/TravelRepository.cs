using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RailWaySystem.Models;

namespace RailWaySystem.Data
{
    public class TravelRepository : ITravelRepository
    {
        private readonly TravelContext _context;

        public TravelRepository(TravelContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Travel>> GetTravelsByRouteAsync(string origin, string destination)
        {
            return await _context.Travels
                .Where(t => t.Origin == origin && t.Destination == destination)
                .ToArrayAsync();
        }
    }
}
