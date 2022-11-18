using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WSVenta.Models;

namespace WSVenta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            using(VentaRealContext db = new VentaRealContext())
            {
                var lista = db.Cliente.ToList();
                return Ok(lista);
            }
        }
    }
}
