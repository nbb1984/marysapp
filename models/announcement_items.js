// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;
// Create the Note schema
var AnnouncementSchema = new Schema({
  announcementMessage: { 
  	type: String 
  }
});
// Remember, Mongoose will automatically save the ObjectIds of the searches
// These ids are referred to in the Article model
// Create the Note model with the NoteSchema
var Announcement = mongoose.model("Announcement", AnnouncementSchema);
// Export the Note model
module.exports = Announcement;



