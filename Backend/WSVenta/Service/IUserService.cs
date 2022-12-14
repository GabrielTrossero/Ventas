using WSVenta.Models.Request;
using WSVenta.Models.Response;

namespace WSVenta.Service
{
    public interface IUserService
    {
        UserResponse Auth(AuthRequest model);
    }
}
