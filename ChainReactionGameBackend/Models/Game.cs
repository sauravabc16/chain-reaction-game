using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChainReactionGameBackend.Models
{
    public class Game
    {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string ServerId { get; set; }
    public List<string> PlayerIds { get; set; }
    public string CurrentPlayerId { get; set; }
    // you can define the GameGrid as a 2D array or a more complex structure depending on your game rules
    public string[,] GameGrid { get; set; }
    public bool IsGameOver { get; set; }
    }
}