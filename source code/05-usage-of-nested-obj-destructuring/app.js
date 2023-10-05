const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Exampleville",
    zipCode: "12345",
  },
  contact: {
    email: "john@example.com",
    phone: "+1234567890",
  },
};

const {
  name,
  address: { street, city, zipCode },
  contact: { email, phone },
} = person;

// - - - - - 

const order = {
  orderId: "987654",
  customer: {
    name: "Alice Smith",
    address: {
      street: "456 Elm St",
      city: "Sampletown",
      zipCode: "54321",
    },
  },
  items: [
    { id: "item1", name: "Widget", price: 10 },
    { id: "item2", name: "Gadget", price: 20 },
    { id: "item3", name: "Doodad", price: 15 },
  ],
};

const {
  orderId,
  customer: {
    name: customerName,
    address: { street, city, zipCode },
  },
  items: [
    { id: item1Id, name: item1Name, price: item1Price },
    { id: item2Id, name: item2Name, price: item2Price },
    { id: item3Id, name: item3Name, price: item3Price },
  ],
} = order;

// - - - - - 

const company = {
  name: "TechCo",
  location: {
    city: "TechCity",
    state: "TechState",
    country: "TechLand",
  },
  employees: [
    { id: "emp1", name: "Employee 1", role: "Developer" },
    { id: "emp2", name: "Employee 2", role: "Designer" },
    { id: "emp3", name: "Employee 3", role: "Manager" },
  ],
};

const {
  name: companyName,
  location: { city, state, country },
  employees: [
    { id: emp1Id, name: emp1Name, role: emp1Role },
    { id: emp2Id, name: emp2Name, role: emp2Role },
    { id: emp3Id, name: emp3Name, role: emp3Role },
  ],
} = company;
