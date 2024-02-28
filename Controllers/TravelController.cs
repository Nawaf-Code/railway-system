using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RailWaySystem.Data;
using RailWaySystem.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RailWaySystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TravelController : ControllerBase
    {
        private readonly TravelContext _context; // Inject TravelContext via constructor

        public TravelController(TravelContext context)
        {
            _context = context;
        }

        [HttpGet("{origin}/{destination}")]
        public async Task<ActionResult<Travel[]>> Get(string origin, string destination)
        {
            var travels = await _context.Travels
                .Where(t => t.Origin == origin && t.Destination == destination)
                .ToArrayAsync();

            if (travels == null || travels.Length == 0)
            {
                return NotFound(); 
            }

            return travels;
        }
    }
}
