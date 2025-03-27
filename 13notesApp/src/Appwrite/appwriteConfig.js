import { Client, Databases, ID } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1") // Appwrite endpoint
      .setProject("67e43a4a002c3a285f8e"); // Project ID yahan paste karo

const databases = new Databases(client);

export { client, databases, ID };
