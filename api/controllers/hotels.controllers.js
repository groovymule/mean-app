const hotelData = require('../data/hotel-data.json')

module.exports.hotelsGetAll = function(req, res) {
  console.log("Get the hotels");
  console.log(req.query);

  // Default query string values
  let offset = 0;
  let count = 5;


  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }


  // Sets up pagination
  const returnData = hotelData.slice(offset, offset + count);

  res
    .status(200)
    .json(returnData);
};
module.exports.hotelsGetOne = function(req, res) {
  const hotelId = req.params.hotelId;
  const thisHotel = hotelData[hotelId];
  console.log("Get hotelId", hotelId);
  res
    .status(200)
    .json(thisHotel);
};

module.exports.hotelsAddOne = function(req, res) {
  console.log("POST new hotel");
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};
