using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RailWaySystem.Data;
using RailWaySystem.Models;
using System.Threading.Tasks;

namespace RailWaySystem.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersBookingController : ControllerBase
    {
        private readonly UsersBookingContext _context;

        public UsersBookingController(UsersBookingContext context)
        {
            _context = context;
        }

        // POST: api/UserBooking/userId/travelId
        [HttpPost("{userId}/{TrainNumber}/{DateOfTravel}/{Origin}/{Destination}/{DepartureTime}/{TimeArrival}/{Duration}")]
        public async Task<ActionResult<UsersBooking>> CreateUsersBooking(string userId, string TrainNumber, string DateOfTravel, string Origin, string Destination, string DepartureTime, string TimeArrival, string Duration)
        {
            try{
            var usersBooking = new UsersBooking{
                UserId = userId,
                TrainNumber = TrainNumber,
                DateOfTravel = DateOfTravel,
                Origin = Origin,
                Destination = Destination,
                DepartureTime = DepartureTime,
                TimeArrival = TimeArrival,
                Duration = Duration

            };

            _context.UsersBookings.Add(usersBooking);
                await _context.SaveChangesAsync();

                return Ok("Booking created successfully.");
        }catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }

        [HttpGet("{userid}")]
        public async Task<ActionResult<UsersBooking[]>> Get(string userid){
            var travels = await _context.UsersBookings
                .Where(t => t.UserId == userid)
                .ToArrayAsync();

            if (travels == null || travels.Length == 0)
            {
                return NotFound(); 
            }

            return travels;
        }
    }
}
