using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AudioStorageService.DI;
using AudioStorageService.EFModels;
using Hangfire;
using Microsoft.AspNetCore.Mvc;
using AudioStorageService.LocalStorage;

namespace AudioStorageService.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly KerooshaSettings _serverSettings;
        private readonly MusicContext _musicContext;

        public ValuesController(KerooshaSettings serverSettings, MusicContext musicContext)
        {
            _serverSettings = serverSettings;
            _musicContext = musicContext;
        }
        
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            BackgroundJob.Enqueue(() => new LocalMusicLibrary(_musicContext).ScanFolder());
            return new string[]
            {
                _serverSettings.First(x => x.key == "version").value
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "cock";
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
