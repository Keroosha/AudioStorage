﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AudioStorageService.DI;
using AudioStorageService.EFModels;
using AudioStorageService.EFModels.Music;
using AudioStorageService.LocalStorage;
using Hangfire;
using Hangfire.PostgreSql;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace AudioStorageService
{
    public class Startup
    {


        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var dbString = new KerooshaSettings().First(x => x.key == "DbString").value;

            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });

            services.AddTransient<KerooshaSettings>();
            services.AddHangfire(configuration =>
            {
                configuration.UseStorage(new PostgreSqlStorage(dbString));
            });

            services.AddEntityFrameworkNpgsql().AddDbContext<MusicContext>(options =>
            {
                options.UseNpgsql(dbString);
            });

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => { builder.AllowAnyOrigin(); });
            app.UseMvc();
            app.UseHangfireServer();

           //Adding auto-migrate cuz docker
           //<TODO>Replace this hack!</TODO>
            Thread.Sleep(5000);
            try
            {
                var musicContext = serviceProvider.GetService<MusicContext>();
                musicContext.Database.Migrate();

                BackgroundJob.Enqueue(() => new LocalMusicLibrary(musicContext).ScanFolder());
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
