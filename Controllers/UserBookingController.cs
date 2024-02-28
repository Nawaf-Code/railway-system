using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RailWaySystem.Data;
using RailWaySystem.Models;
using System.Threading.Tasks;

namespace RailWaySystem.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserBookingController : ControllerBase
    {
        private readonly UserBookingContext _context;

        public UserBookingController(UserBookingContext context)
        {
            _context = context;
        }

        // POST: api/UserBooking/userId/travelId
        [HttpPost("{userId}/{TrainNumber}/{DateOfTravel}/{Origin}/{Destination}/{DepartureTime}/{TimeArrival}/{Duration}")]
        public async Task<ActionResult<UserBooking>> CreateUserBooking(string userId, string TrainNumber, string DateOfTravel, string Origin, string Destination, string DepartureTime, string TimeArrival, string Duration)
        {
            try{
            var userBooking = new UserBooking{
                UserId = userId,
                TrainNumber = TrainNumber,
                DateOfTravel = DateOfTravel,
                Origin = Origin,
                Destination = Destination,
                DepartureTime = DepartureTime,
                TimeArrival = TimeArrival,
                Duration = Duration

            };

            _context.UserBookings.Add(userBooking);
                await _context.SaveChangesAsync();

                return Ok("Booking created successfully.");
        }catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}
