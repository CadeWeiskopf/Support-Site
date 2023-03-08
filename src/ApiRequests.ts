import { User } from "./interfaces/User";

class ApiRequests {
  constructor() {
    if (!process.env.REACT_APP_API_URL) {
      throw Error(`Missing environment variables`);
    }
  }

  async login(email: string, password: string): Promise<User | null> {
    console.log(`login`);
    if (!process.env.REACT_APP_API_URL) {
      throw Error(`Missing environment variables`);
    }
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok || response.status !== 200) {
      throw Error(`Bad request/response.`);
    }
    const data = await response.json();
    return data;
  }

  async getCases() {
    return [
      {
        id: "string",
        guid: "string",
        number: "1",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string",
        repGuid: "string",
        customerId: "string",
        customerGuid: "string",
        status: "open",
      },
      {
        id: "string1",
        guid: "string1",
        number: "2",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string1",
        repGuid: "string1",
        customerId: "string1",
        customerGuid: "string1",
        status: "open",
      },
      {
        id: "string2",
        guid: "string2",
        number: "3",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string2",
        repGuid: "string2",
        customerId: "string2",
        customerGuid: "string2",
        status: "open",
      },
      {
        id: "string",
        guid: "string",
        number: "4",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string",
        repGuid: "string",
        customerId: "string",
        customerGuid: "string",
        status: "open",
      },
      {
        id: "string1",
        guid: "string1",
        number: "5",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string1",
        repGuid: "string1",
        customerId: "string1",
        customerGuid: "string1",
        status: "open",
      },
      {
        id: "string2",
        guid: "string2",
        number: "6",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string2",
        repGuid: "string2",
        customerId: "string2",
        customerGuid: "string2",
        status: "open",
      },
      {
        id: "string",
        guid: "string",
        number: "7",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string",
        repGuid: "string",
        customerId: "string",
        customerGuid: "string",
        status: "open",
      },
      {
        id: "string1",
        guid: "string1",
        number: "8",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string1",
        repGuid: "string1",
        customerId: "string1",
        customerGuid: "string1",
        status: "open",
      },
      {
        id: "string2",
        guid: "string2",
        number: "9",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string2",
        repGuid: "string2",
        customerId: "string2",
        customerGuid: "string2",
        status: "open",
      },
      {
        id: "string",
        guid: "string",
        number: "10",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string",
        repGuid: "string",
        customerId: "string",
        customerGuid: "string",
        status: "open",
      },
      {
        id: "string1",
        guid: "string1",
        number: "11",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string1",
        repGuid: "string1",
        customerId: "string1",
        customerGuid: "string1",
        status: "open",
      },
      {
        id: "string2",
        guid: "string2",
        number: "12",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string2",
        repGuid: "string2",
        customerId: "string2",
        customerGuid: "string2",
        status: "open",
      },
    ];
  }
}

export { ApiRequests };
