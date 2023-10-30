using Microsoft.AspNetCore.Mvc;

namespace CoolCleanApp.Controllers
{
    public class ProfileWebApiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
