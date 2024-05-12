using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RailWaySystem.Models;

namespace RailWaySystem.Services
{
    public interface ITravelService
    {
        Task<IEnumerable<Travel>> GetTravelsAsync(string origin, string destination);
    }

    public class TravelService : ITravelService
    {
        private readonly ITravelRepository _repository;

        public TravelService(ITravelRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Travel>> GetTravelsAsync(string origin, string destination)
        {
            var travels = await _repository.GetTravelsByRouteAsync(origin, destination);
            return travels ?? Enumerable.Empty<Travel>();
        }
    }
}
