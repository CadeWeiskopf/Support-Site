class ApiRequests {
  constructor() {}

  async getCases() {
    return [
      {
        id: "string",
        guid: "string",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string",
        repGuid: "string",
        customerId: "string",
        customerGuid: "string",
      },
      {
        id: "string1",
        guid: "string1",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string1",
        repGuid: "string1",
        customerId: "string1",
        customerGuid: "string1",
      },
      {
        id: "string2",
        guid: "string2",
        dateCreated: new Date(),
        dateClosed: null,
        repId: "string2",
        repGuid: "string2",
        customerId: "string2",
        customerGuid: "string2",
      },
    ];
  }
}

export { ApiRequests };
