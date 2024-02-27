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
        private static readonly IEnumerable<Travels> Travels = new[]{
            new Travels{Id=1, Origin="Dammam", Destination="Hufuf", Duration="2:00", DepartureTime="17:00", TimeArrival="19:30",  Price= 55.99},
            new Travels{Id=2, Origin="Dammam", Destination="Hufuf", Duration="2:00", DepartureTime="17:00", TimeArrival="20:00",  Price= 55.99},
            new Travels{Id=3, Origin="Dammam", Destination="Hufuf", Duration="2:00", DepartureTime="12:00", TimeArrival="15:00",  Price= 55.99},
            new Travels{Id=4, Origin="Dammam", Destination="Hufuf", Duration="2:00", DepartureTime="8:00", TimeArrival="11:00",  Price= 55.99},
            new Travels{Id=5, Origin="Riyadh", Destination="Dammam", Duration="3:30", DepartureTime="15:30", TimeArrival="19:00", Price=85.99},
            new Travels{Id=6, Origin="Riyadh", Destination="Dammam", Duration="3:30", DepartureTime="11:30", TimeArrival="15:00", Price=85.99},
            new Travels{Id=7, Origin="Riyadh", Destination="Dammam", Duration="3:30", DepartureTime="8:00", TimeArrival="11:30", Price=75.99},
            new Travels{Id=8, Origin="Dammam", Destination="Riyadh", Duration="3:00", DepartureTime="8:00", TimeArrival="11:00",  Price=75.99},
            new Travels{Id=9, Origin="Dammam", Destination="Riyadh", Duration="3:30", DepartureTime="15:30", TimeArrival="19:00", Price=85.99},
            new Travels{Id=10, Origin="Hufuf", Destination="Dammam", Duration="2:00", DepartureTime="11:30", TimeArrival="1:30", Price=45.99},
            new Travels{Id=11, Origin="Hufuf", Destination="Dammam", Duration="2:00", DepartureTime="8:00", TimeArrival="10:00", Price=45.99},
            new Travels{Id=12, Origin="Hufuf", Destination="Dammam", Duration="2:00", DepartureTime="5:00", TimeArrival="7:00", Price=45.99},
            new Travels{Id=13, Origin="Hufuf", Destination="Riyadh", Duration="3:00", DepartureTime="5:00", TimeArrival="8:00", Price=75.99},
            new Travels{Id=14, Origin="Hufuf", Destination="Riyadh", Duration="3:00", DepartureTime="9:00", TimeArrival="12:00", Price=75.99},
            new Travels{Id=15, Origin="Hufuf", Destination="Riyadh", Duration="3:00", DepartureTime="14:30", TimeArrival="17:00", Price=75.99},
            new Travels{Id=16, Origin="Hufuf", Destination="Riyadh", Duration="3:00", DepartureTime="18:00", TimeArrival="21:00", Price=75.99},
            new Travels{Id=5, Origin="Riyadh", Destination="Hufuf", Duration="3:30", DepartureTime="15:30", TimeArrival="19:00", Price=85.99},
            new Travels{Id=6, Origin="Riyadh", Destination="Hufuf", Duration="3:30", DepartureTime="11:30", TimeArrival="15:00", Price=85.99},
            new Travels{Id=5, Origin="Riyadh", Destination="Hufuf", Duration="3:30", DepartureTime="15:30", TimeArrival="19:00", Price=85.99},
        };

        [HttpGet("{origin}/{destination}")]
        public Travels[] Get(String origin, String destination){
            
            Travels[] travels = Travels.Where(i => (i.Origin == origin) && (i.Destination == destination) ).ToArray();
            return travels;
    }
    }

}