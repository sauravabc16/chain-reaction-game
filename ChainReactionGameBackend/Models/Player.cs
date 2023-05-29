using MongoDB.Bson;

namespace ChainReactionGameBackend.Models
{
    public class Player
    {
    public ObjectId Id { get; set; }
    public string Name { get; set; }
    public string Color { get; set; }
    }
}