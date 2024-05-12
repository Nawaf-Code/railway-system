using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using RailWaySystem.Models;
using RailWaySystem.Interfaces;

namespace RailWaySystem.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserBookingController : ControllerBase
    {
        private readonly IUserBookingService _service;

        public UserBookingController(IUserBookingService service)
        {
            _service = service;
        }

        // POST: api/UserBooking/userId/travelId
        [HttpPost("{userId}/{TrainNumber}/{DateOfTravel}/{Origin}/{Destination}/{DepartureTime}/{TimeArrival}/{Duration}")]
        public async Task<ActionResult<string>> CreateUserBooking(
            string userId, string TrainNumber, string DateOfTravel, 
            string Origin, string Destination, string DepartureTime, 
            string TimeArrival, string Duration)
        {
            try
            {
                var userBooking = new UserBooking
                {
                    UserId = userId,
                    TrainNumber = TrainNumber,
                    DateOfTravel = DateOfTravel,
                    Origin = Origin,
                    Destination = Destination,
                    DepartureTime = DepartureTime,
                    TimeArrival = TimeArrival,
                    Duration = Duration
                };

                var result = await _service.CreateUserBookingAsync(userBooking);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}
