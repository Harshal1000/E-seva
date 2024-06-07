const fs = require("node:fs/promises");

async function getProfileItem() {
  const rawFileContent = await fs.readFile("profile.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const ProfileItem = data.profile ?? [];
  return ProfileItem;
}

function ProfileItem(profile) {
  return fs.writeFile(
    "profile.json",
    JSON.stringify({ profile: profile || [] })
  );
}

exports.getProfileItem = getProfileItem;
exports.ProfileItem = ProfileItem;
