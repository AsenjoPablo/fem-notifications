import { Post, User } from "./types";
import { v4 as uuid } from "uuid";

export const Users: User[] = [
  {
    id: "1",
    name: "Susan",
    avatar_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
  },
  {
    id: "2",
    name: "John",
    avatar_url:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
  },
  {
    id: "3",
    name: "Mark",
    avatar_url:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80",
  },
];

export const Messages: string[] = [
  `
    Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.[1] Immune factors and immune-modulating components in milk contribute to milk immunity. Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system, and thus reduces the risk of many diseases. Milk contains many nutrients, including protein and lactose.[2]
    As an agricultural product, dairy milk is collected from farm animals. In 2011, dairy farms produced around 730 million tonnes (800 million short tons) of milk[3] from 260 million dairy cows.[4] India is the world's largest producer of milk and the leading exporter of skimmed milk powder, but it exports few other milk products.[5][6] Because there is an ever-increasing demand for dairy products within India, it could eventually become a net importer of dairy products.[7] New Zealand, Germany and the Netherlands are the largest exporters of milk products.[8] The US CDC recommends that children over the age of 12 months should have two servings of dairy milk products a day.[9]
    More than six billion people worldwide consume milk and milk products, and between 750 and 900 million people live in dairy-farming households.[10]
    `,
  "Hey man hope everything is good, will I see you soon? Hope you can still play basketball!",
  "Are you free later tonight?",
  "Hey! How was work today?",
  "I'm visiting aunt May later this week as well",
  "I don't think you can do that right now",
  "Hello, I am interested in your car",
  "I will fix that soon",
];

export const Posts: Post[] = [
  // "How to swim",
  // "How to become a better programmer",
  // "The reason why you are here",
  // "Making money 101",
  // "I'm looking for a lot of money",
  // "How did you learn?",
  // "Looking for more information about certain vegetables",
  {
    id: uuid(),
    title: "How to swim",
    link: "",
    image_url:
      "https://images.unsplash.com/photo-1664142121279-310b88f053f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
];
