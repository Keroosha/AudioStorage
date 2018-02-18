using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AudioStorageService.EFModels.Music;
using Microsoft.EntityFrameworkCore;

namespace AudioStorageService.EFModels
{
    public class MusicContext : DbContext
    {
        public MusicContext(DbContextOptions<MusicContext> options) : base(options)
        {
            
        }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Song> Songs { get; set; }
    }
}
