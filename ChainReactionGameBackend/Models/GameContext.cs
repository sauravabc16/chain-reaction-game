using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ChainReactionGameBackend.Models
{
    public class GameContext
    {
        private readonly IMongoDatabase _database = null;

    public GameContext(IOptions<Settings> settings)
    {
        var client = new MongoClient(settings.Value.ConnectionString);
        if (client != null)
            _database = client.GetDatabase(settings.Value.Database);
    }

    public IMongoCollection<Player> Players
    {
        get { return _database.GetCollection<Player>("Player"); }
    }

    }
}