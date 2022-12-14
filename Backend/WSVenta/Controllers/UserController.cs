using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WSVenta.Models.Request;
using WSVenta.Models.Response;
using WSVenta.Service;

namespace WSVenta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService=userService;
        }

        [HttpPost("login")] //para acceder sería api/user/login
        public IActionResult Autentificar([FromBody] AuthRequest model)
        {
            Respuesta respuesta = new Respuesta();

            var userResponse = _userService.Auth(model);

            if(userResponse == null)
            {
                respuesta.Exito = 0;
                respuesta.Mensaje = "Usuario o contraseña incorrecta";
                return BadRequest(respuesta);
            }
            else
            {
                respuesta.Exito = 1;
                respuesta.Data = userResponse;
            }

            return Ok(respuesta);
        }
    }
}
