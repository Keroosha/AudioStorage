using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AudioStorageService.DI;
using AudioStorageService.EFModels;
using AudioStorageService.EFModels.Music;

namespace AudioStorageService.LocalStorage
{
    public class LocalMusicLibrary
    {
        private readonly KerooshaSettings _appSettings;
        private readonly MusicContext _musicContext;

        public LocalMusicLibrary(MusicContext musicContext)
        {
            _appSettings = new KerooshaSettings();
            _musicContext = musicContext;
        }
        
        /// <summary>
        /// Делает поиск по папке(не рекурсивно!)
        /// Выполнять только в фоне, процесс тяжёлый!
        /// </summary>
        public void ScanFolder()
        {
            var folderPath = _appSettings.First(x => x.key == "ScanFolder").value;
            foreach (var filePath in Directory.GetFiles(folderPath,"*.mp3"))
            {
                var mp3File = TagLib.File.Create(filePath);
                var artist = _musicContext.Artists.FirstOrDefault(x => x.Name == mp3File.Tag.Performers.First())
                    ?? new Artist()
                    {
                        Name = mp3File.Tag.Performers.FirstOrDefault(),
                    };
                var album = _musicContext.Albums.FirstOrDefault(x => x.Name == mp3File.Tag.Album)
                    ?? new Album()
                    {
                        Name = mp3File.Tag.Album,
                        Artist = artist,
                        ReleaseDate = new DateTime(Int32.Parse(mp3File.Tag.Year.ToString()), 1, 1)
                    };
                var song = new Song()
                {
                    Name = mp3File.Tag.Title,
                    Album = album,
                    Artist = artist,
                    Path = filePath
                };
                _musicContext.Songs.Add(song);
                _musicContext.SaveChanges();
            }
        }
    }
}

