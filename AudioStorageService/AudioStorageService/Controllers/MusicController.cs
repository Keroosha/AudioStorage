using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AudioStorageService.EFModels;
using AudioStorageService.EFModels.Music;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TagLib.Riff;

namespace AudioStorageService.Controllers
{
    [Produces("application/json")]
    [Route("api/Music")]
    public class MusicController : Controller
    {
        private readonly MusicContext _musicContext;
        
        public MusicController(MusicContext musicContext)
        {
            _musicContext = musicContext;
        }
        
        [HttpGet("Artists")]
        public DbSet<Artist> Artists()
        {
            return _musicContext.Artists;
        }
        
        [HttpGet("Albums")]
        public DbSet<Album> Albums(string artist)
        {
            return _musicContext.Albums;
        }

        [HttpGet("Album/{album}")]
        public List<Song> SongsByAlbum(string album)
        {
            var findedAlbum = _musicContext.Albums
                            .FirstOrDefault(x => x.Name == album)
                        ?? new Album
                        {
                            Songs = new List<Song>()
                        };
            
            return findedAlbum.Songs;
        }
    }
}