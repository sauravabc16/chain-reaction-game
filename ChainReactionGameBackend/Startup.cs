using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MongoDB.Driver;
using ChainReactionGameBackend.Models;
using Microsoft.Extensions.Options;

namespace ChainReactionGameBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<Settings>(
                options =>
                {
                    options.ConnectionString = Configuration.GetSection("MongoDB:ConnectionString").Value;
                    options.Database = Configuration.GetSection("MongoDB:Database").Value;
                });
            services.AddSingleton<IMongoClient, MongoClient>(
                _ => new MongoClient(Configuration.GetSection("MongoDB:ConnectionString").Value));

            // Add GameContext as a service
            services.AddSingleton<GameContext>(sp => new GameContext(sp.GetRequiredService<IOptions<Settings>>()));

            // Add controllers
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
