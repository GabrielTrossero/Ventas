using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WSVenta.Models;
using WSVenta.Models.Response;
using WSVenta.Models.Request;

namespace WSVenta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (VentaRealContext db = new VentaRealContext())
                {
                    var lista = db.Cliente.OrderByDescending(d => d.Id).ToList();
                    oRespuesta.Exito = 1;
                    oRespuesta.Data = lista;
                }
            }
            catch(System.Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }

            return Ok(oRespuesta);
        }


        [HttpPost]
        public IActionResult Add(ClientRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (VentaRealContext db = new VentaRealContext())
                {
                    Cliente oCliente = new Cliente();
                    oCliente.Nombre = oModel.Nombre;
                    db.Cliente.Add(oCliente);
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                }
            }
            catch (System.Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }

            return Ok(oRespuesta);
        }


        [HttpPut]
        public IActionResult Update(ClientRequest oModel)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (VentaRealContext db = new VentaRealContext())
                {
                    Cliente oCliente = db.Cliente.Find(oModel.Id);
                    oCliente.Nombre = oModel.Nombre;
                    db.Entry(oCliente).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                }
            }
            catch (System.Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }

            return Ok(oRespuesta);
        }


        [HttpDelete("{Id}")]
        public IActionResult Delete(long Id)
        {
            Respuesta oRespuesta = new Respuesta();
            try
            {
                using (VentaRealContext db = new VentaRealContext())
                {
                    Cliente oCliente = db.Cliente.Find(Id);
                    db.Remove(oCliente);
                    db.SaveChanges();
                    oRespuesta.Exito = 1;
                }
            }
            catch (System.Exception ex)
            {
                oRespuesta.Exito = 0;
                oRespuesta.Mensaje = ex.Message;
            }

            return Ok(oRespuesta);
        }
    }

}
