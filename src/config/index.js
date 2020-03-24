const client = {
  source: "frontend-v2",
  version: "v1.1.3"
};

module.exports = {
  version: client.version,
  api: {
    submitParams: client
  },
  cdn: {
    global: "https://penguin-stats.s3.ap-southeast-1.amazonaws.com"
  }
}