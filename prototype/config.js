exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/alphaNote-prototype';
exports.PORT = process.env.PORT || 3000;
