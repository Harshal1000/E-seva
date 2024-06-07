const express = require("express");
const bodyParser = require("body-parser");

const { getProfileItem, ProfileItem } = require("./data/profile");

const { getServiceItem, serviceItem } = require("./data/services");

const { getStoredItems, storeItems } = require("./data/item");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/services", async (req, res) => {
  const serviceItem = await getServiceItem();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ services: serviceItem });
});

app.get("/services/:id", async (req, res) => {
  const serviceItem = await getServiceItem();
  const item = serviceItem.find((item) => item.id === req.params.id);

  res.json({ item });
});

app.post("/services", async (req, res) => {
  const existingItems = await getServiceItem();
  const serviceData = req.body;
  const newItem = {
    ...serviceData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await serviceItem(updatedItems);
  res
    .status(201)
    .json({ message: "Stored new item at services", item: newItem });
});

app.get("/profile1", async (req, res) => {
  const ProfileItem = await getProfileItem();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ profile: ProfileItem });
});

app.get("/profile1/:id", async (req, res) => {
  const ProfileItem = await getProfileItem();
  const item = ProfileItem.find((item) => item.id === req.params.id);

  res.json({ item });
});

app.post("/profile1", async (req, res) => {
  const existingItems = await getProfileItem();
  const ProfileData = req.body;
  const newItem = {
    ...ProfileData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await ProfileItem(updatedItems);
  res.status(201).json({ message: "Stored new item profile1", item: newItem });
});

app.get("/items", async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

app.get("/items/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post("/items", async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  console.log(itemData);
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: "Stored new item.", item: itemData });
});

app.listen(8082);
