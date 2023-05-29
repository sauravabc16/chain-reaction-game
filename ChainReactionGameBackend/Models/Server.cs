using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChainReactionGameBackend.Models
{
    public class Server
    {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Name { get; set; }
    public string AdminPlayerId { get; set; }
    public List<string> PlayerIds { get; set; }
    public string GameId { get; set; }
    }
}