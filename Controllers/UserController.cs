using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using RailWaySystem.Models;
using RailWaySystem.Interfaces;

namespace RailWaySystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet("{userId}/{pass}")]
        public async Task<ActionResult<User>> Get(string userId, string pass)
        {
            try
            {
                var user = await _service.AuthenticateUserAsync(userId, pass);

                if (user == null)
                {
                    return Unauthorized("Invalid credentials");
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}
