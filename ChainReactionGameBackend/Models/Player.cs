using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChainReactionGameBackend.Models
{
    public class Player
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Name { get; set; }
    public string Color { get; set; }
    public string ServerId { get; set; }
    public bool IsAdmin { get; set; }
}
}