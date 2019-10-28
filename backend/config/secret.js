const secrets = {
  dbUri: "mongodb+srv://brianferguson:dot.com@test1-tustf.mongodb.net/test"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
