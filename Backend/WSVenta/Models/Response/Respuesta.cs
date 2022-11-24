namespace WSVenta.Models.Response
{
    /**
     * Clase molde para todas las respuestas
     */
    public class Respuesta
    {
        public int Exito { get; set; }
        public string Mensaje { get; set; } 
        public object Data { get; set; }
    }
}
