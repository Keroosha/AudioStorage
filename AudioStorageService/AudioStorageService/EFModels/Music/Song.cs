﻿using System.ComponentModel.DataAnnotations;

namespace AudioStorageService.EFModels.Music
{
    public class Song
    {   
        [Key]
        public int SongID { get; set; }

        public string Name { get; set; }
        public Artist Artist { get; set; }
        public Album Album { get; set; }
    }
}
