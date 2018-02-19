using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Newtonsoft.Json;


namespace AudioStorageService.DI
{
    public struct JsonSetting
    {
        public string key;
        public string value;
    }

    public class KerooshaSettings : ICollection<JsonSetting>, IQueryable<JsonSetting>
    {
        private readonly List<JsonSetting> _settings;

        public KerooshaSettings()
        {
            using (var stream = new StreamReader("settings.json"))
            {
                var text = stream.ReadToEnd();
                _settings = JsonConvert.DeserializeObject<List<JsonSetting>>(text);
            }
        }

        //ICollection/IQueryable autogen

        public int Count => _settings.Count;

        public bool IsReadOnly => ((ICollection<JsonSetting>)_settings).IsReadOnly;

        public Type ElementType => _settings.AsQueryable().ElementType;

        public Expression Expression => _settings.AsQueryable().Expression;

        public IQueryProvider Provider => _settings.AsQueryable().Provider;

        public void Add(JsonSetting item)
        {
            _settings.Add(item);
        }

        public void Clear()
        {
            _settings.Clear();
        }

        public bool Contains(JsonSetting item)
        {
            return _settings.Contains(item);
        }

        public void CopyTo(JsonSetting[] array, int arrayIndex)
        {
            _settings.CopyTo(array, arrayIndex);
        }

        public IEnumerator<JsonSetting> GetEnumerator()
        {
            return ((ICollection<JsonSetting>)_settings).GetEnumerator();
        }

        public bool Remove(JsonSetting item)
        {
            return _settings.Remove(item);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return ((ICollection<JsonSetting>)_settings).GetEnumerator();
        }
    }
}
