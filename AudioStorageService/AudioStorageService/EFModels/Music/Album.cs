using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AudioStorageService.EFModels.Music
{
    public class Album
    {
        [Key]
        public int AlbumID;

        public string Name;
        public Artist Artist;
        public DateTime ReleaseDate;
        public virtual List<Song> Songs { get; set; }
    }
}
