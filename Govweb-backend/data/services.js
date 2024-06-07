const fs = require("node:fs/promises");

async function getServiceItem() {
  const rawFileContent = await fs.readFile("services.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const serviceItem = data.services ?? [];
  return serviceItem;
}

function serviceItem(services) {
  return fs.writeFile(
    "services.json",
    JSON.stringify({ services: services || [] })
  );
}
exports.getServiceItem = getServiceItem;
exports.serviceItem = serviceItem;
