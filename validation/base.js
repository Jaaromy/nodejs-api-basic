const baseSchema = {
  id: "/Base",
  type: "object",
  properties: {
    type: { type: "string", enum: ["coffee", "frozenFish"] },
    description: { type: "string" },
    created: { type: "string", format: "date-time" },
    mass: { type: "number" },
    expiry: { type: "string", format: "date-time" }
  },
  required: ["type", "description", "created", "mass", "expiry"]
};

module.exports = baseSchema;
