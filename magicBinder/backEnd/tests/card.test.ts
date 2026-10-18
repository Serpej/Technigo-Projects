import request from "supertest";
import mongoose, { HydratedDocument } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { describe, it, expect, beforeAll, afterEach, afterAll, beforeEach } from "vitest";
import { app } from "../app";
import { Card } from "../models/Card";
import { User, IUser } from "../models/User";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await Card.deleteMany({});
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});



describe("POST /cards", () => {

  let user: HydratedDocument<IUser>;

  beforeEach(async () => {
    user = await User.create({
      name: "validTestName",
      email: "validTestEmail@test.com",
      password: "validTestPassword123",
    });
  });

  const cardBody = {
    "id": "cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c",
    "oracle_id": "4457ed35-7c10-48c8-9776-456485fdf070",
    "name": "Lightning Bolt",
    "uri": "https://api.scryfall.com/cards/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c",
    "scryfall_uri": "https://scryfall.com/card/3ed/162/lightning-bolt?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_updated_at": "2026-10-13T06:22:25Z",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg?1791872545",
      "normal": "https://cards.scryfall.io/normal/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg?1791872545",
      "large": "https://cards.scryfall.io/large/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg?1791872545",
      "png": "https://cards.scryfall.io/png/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.png?1791872545",
      "art_crop": "https://cards.scryfall.io/art_crop/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg?1791872545",
      "border_crop": "https://cards.scryfall.io/border_crop/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg?1791872545",
      "thumb": "https://cards.scryfall.io/thumb/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.webp?1791872545",
      "grid": "https://cards.scryfall.io/grid/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.webp?1791872545",
      "display": "https://cards.scryfall.io/display/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.webp?1791872545",
      "art": "https://cards.scryfall.io/art/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.webp?1791872545",
      "crop": "https://cards.scryfall.io/crop/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.webp?1791872545",
      "jpeg": "https://cards.scryfall.io/normal/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg?1791872545"
    },
    "mana_cost": "{R}",
    "cmc": 1.0,
    "type_line": "Instant",
    "oracle_text": "Lightning Bolt deals 3 damage to any target.",
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "banned",
      "timeless": "legal",
      "gladiator": "legal",
      "pioneer": "not_legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "oathbreaker": "legal",
      "standardbrawl": "not_legal",
      "brawl": "legal",
      "competitivebrawl": "legal",
      "alchemy": "not_legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "legal",
      "premodern": "legal",
      "predh": "legal",
      "tlr": "legal"
    },
    "games": [
      "paper"
    ],
    "reserved": false,
    "game_changer": false,
    "foil": false,
    "nonfoil": true,
    "finishes": [
      "nonfoil"
    ],
    "reprint": true,
    "variation": false,
    "set_id": "45a69797-8adf-468e-a4e1-ba81fd9d66ac",
    "set": "3ed",
    "set_name": "Revised Edition",
    "set_type": "core",
    "set_uri": "https://api.scryfall.com/sets/45a69797-8adf-468e-a4e1-ba81fd9d66ac",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A3ed&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/3ed?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A4457ed35-7c10-48c8-9776-456485fdf070&unique=prints",
    "rarity": "common",
    "border_color": "white",
    "frame": "1993",
    "full_art": false,
    "edhrec_rank": 157,
    "prices": {
      "usd": "2.35",
      "usd_foil": null,
      "usd_etched": null,
      "eur": "2.42",
      "eur_foil": null,
      "tix": null
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=1303&printed=false",
      "tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Farticles&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Farticles%3FproductLineName%3Dmagic%26q%3DLightning%2BBolt",
      "tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Fdecks&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fdecks%3FproductLineName%3Dmagic%26q%3DLightning%2BBolt",
      "edhrec": "https://edhrec.com/route/?cc=Lightning+Bolt"
    },
    "purchase_uris": {
      "tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F1479%3Fpage%3D1",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products?idProduct=5689&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Lightning+Bolt&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
  };

  it("Returns a 201 and a successfull message when user posts a new card", async () => {

    //Arrange

    //Act
    const response = await request(app)
      .post("/cards")
      .set("Authorization", `Bearer ${user.accessToken}`)
      .send(cardBody);

    //Assert
    expect(response.status).toBe(201);

    expect(response.body).toMatchObject({
      success: true,
      message: "Card created",
      name: cardBody.name,
      id: cardBody.id
    });
  });

  it("A user posting the same card twice returns a 409 and a relevant message, while only one document gets posted.", async () => {
  
  //Arrange
  await request(app)
    .post("/cards")
    .set("Authorization", `Bearer ${user.accessToken}`)
    .send(cardBody);

  //Act
  const RepostedCard = await request(app)
    .post("/cards")
    .set("Authorization", `Bearer ${user.accessToken}`)
    .send(cardBody);
  const numOfDocuments = await Card.countDocuments();
  //Assert
  expect(RepostedCard.status).toBe(409);

  expect(RepostedCard.body).toMatchObject({
    success: true,
    message: "Card already exists",
    name: cardBody.name,
    id: cardBody.id,
  });

  expect(numOfDocuments).toBe(1)

  });
});
