using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RailWaySystem.ClientApp.Models;

namespace RailWaySystem.Controllers
{
    [ApiController] //to indicate it is an api controller for handlling http request
    [Route("[controller]")]
    public class TravelController: ControllerBase
    {
        private static readonly IEnumerable<Travel> Travels = new[]{
            new Travel{Id=1, FromLocation="dammam", ToLocation="ahsa", Duration="2:30", Price=65.99},
            new Travel{Id=2, FromLocation="dammam", ToLocation="ryadh", Duration="3:00", Price=75.99},
            new Travel{Id=3, FromLocation="ahsa", ToLocation="ryadh", Duration="3:30", Price=85.99},
        };

        [HttpGet("{id:int}")]
        public Travel[] Get(int id){
            
            Travel[] travels = Travels.Where(i => i.Id == id).ToArray();
            return travels;
    }
    }

}