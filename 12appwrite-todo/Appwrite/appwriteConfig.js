import { Client, Account, Databases} from 'appwrite';

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67dab2d5000818b98838");

export const account = new Account(client);


// we also need to create a database object ...
export const databases = new Databases(client, "67dab3bb0024d3089edc");