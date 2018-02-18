using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AudioStorageService.DI;
using Microsoft.AspNetCore.Mvc;

namespace AudioStorageService.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly KerooshaSettings _serverSettings;

        public ValuesController(KerooshaSettings serverSettings)
        {
            _serverSettings = serverSettings;
        }
        
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[]
            {
                _serverSettings.First(x => x.key == "version").value
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
