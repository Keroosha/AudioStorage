using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AudioStorageService.EFModels.Music
{
    public class Artist
    {
        [Key] public int Id { get; set; }
        public string Name { get; set; }

        public virtual List<Album> Albums { get; set; }
        public virtual List<Song> Songs { get; set; }
    }
}
