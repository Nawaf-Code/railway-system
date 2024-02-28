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
    public class UserController : ControllerBase
    {
        private readonly UserContext _context;

        public UserController(UserContext context)
        {
            _context = context;
        }

        [HttpGet("{userid}/{pass}")]
public async Task<ActionResult<User>> Get(string userid, string pass)
{
    var user = await _context.Users
        .FirstOrDefaultAsync(t => t.UserId == userid && t.Password == pass);

    if(user == null)
    {
        return Unauthorized("Invalid credentials");
    }

    return Ok(user);
}
    }
}
