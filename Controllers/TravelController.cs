using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using RailWaySystem.Models;
using RailWaySystem.Services;

namespace RailWaySystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TravelController : ControllerBase
    {
        private readonly ITravelService _service;

        public TravelController(ITravelService service)
        {
            _service = service;
        }

        [HttpGet("{origin}/{destination}")]
        public async Task<ActionResult<Travel[]>> Get(string origin, string destination)
        {
            var travels = await _service.GetTravelsAsync(origin, destination);

            if (travels == null || !travels.Any())
            {
                return NotFound();
            }

            return Ok(travels);
        }
    }
}
