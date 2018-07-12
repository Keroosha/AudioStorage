using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AudioStorageService.EFModels;
using AudioStorageService.EFModels.Music;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;


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
        public IIncludableQueryable<Artist, List<Album>> Artists()
        {
            return _musicContext.Artists.Include(x => x.Albums);
        }
        
        [HttpGet("Albums")]
        public IIncludableQueryable<Album, Artist> Albums()
        {
            return _musicContext.Albums.Include(x => x.Artist);
        }

        [HttpGet("Album/{albumId}")]
        public List<Song> Album(int albumId)
        {
            var findedAlbum = _musicContext.Albums
            .Include(x => x.Songs)
            .Include(x => x.Artist)
            .FirstOrDefault(x => x.Id == albumId)
            ?? new Album
            {
                Songs = new List<Song>()
            };

            return findedAlbum.Songs;
        }

        [HttpGet("Song/{id}")]
        public IActionResult Song(int id)
        {
            var song = _musicContext.Songs.FirstOrDefault(x => x.Id == id);
            var path = String.Empty;

            if (song == null)
            {
                return NotFound();
            }
            else
            {
                path = song.Path;
            }

            return File(new FileStream(path, FileMode.Open), "audio/mpeg;");
        }
    }
}