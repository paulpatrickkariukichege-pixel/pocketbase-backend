// Migration to create all required collections
migrate((db) => {
  // Create app_users collection
  const appUsers = new Collection({
    name: "app_users",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
  });
  
  appUsers.fields.add(new TextField({
    name: "username",
    required: true,
  }));
  appUsers.fields.add(new SelectField({
    name: "role",
    required: true,
    values: ["admin", "staff"],
  }));
  appUsers.fields.add(new TextField({
    name: "password_hash",
    required: true,
  }));
  appUsers.fields.add(new NumberField({
    name: "created_at",
    required: true,
  }));
  appUsers.fields.add(new NumberField({
    name: "updated_at",
    required: true,
  }));
  
  dao.saveCollection(appUsers);
  
  // Create inventory_items collection
  const inventory = new Collection({
    name: "inventory_items",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
  });
  inventory.fields.add(new TextField({ name: "name", required: true }));
  inventory.fields.add(new TextField({ name: "compatibility", required: false }));
  inventory.fields.add(new NumberField({ name: "buying_price", required: true }));
  inventory.fields.add(new NumberField({ name: "target_selling_price", required: true }));
  inventory.fields.add(new NumberField({ name: "quantity", required: true }));
  inventory.fields.add(new NumberField({ name: "created_at", required: true }));
  inventory.fields.add(new NumberField({ name: "updated_at", required: true }));
  dao.saveCollection(inventory);
  
  // Create mechanics collection
  const mechanics = new Collection({
    name: "mechanics",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
  });
  mechanics.fields.add(new TextField({ name: "name", required: true }));
  mechanics.fields.add(new TextField({ name: "phone", required: false }));
  mechanics.fields.add(new NumberField({ name: "created_at", required: true }));
  mechanics.fields.add(new NumberField({ name: "updated_at", required: true }));
  dao.saveCollection(mechanics);
  
  // Create sales collection
  const sales = new Collection({
    name: "sales",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
  });
  sales.fields.add(new TextField({ name: "cashier_id", required: true }));
  sales.fields.add(new TextField({ name: "mechanic_id", required: false }));
  sales.fields.add(new NumberField({ name: "total_amount", required: true }));
  sales.fields.add(new NumberField({ name: "commission_paid", required: false }));
  sales.fields.add(new NumberField({ name: "sale_date", required: true }));
  sales.fields.add(new NumberField({ name: "synced", required: false }));
  sales.fields.add(new SelectField({ name: "payment_method", required: false, values: ["cash","mpesa","split","pending"] }));
  sales.fields.add(new TextField({ name: "mpesa_code", required: false }));
  sales.fields.add(new NumberField({ name: "cash_amount", required: false }));
  sales.fields.add(new NumberField({ name: "mpesa_amount", required: false }));
  sales.fields.add(new SelectField({ name: "payment_status", required: false, values: ["paid","pending"] }));
  sales.fields.add(new NumberField({ name: "created_at", required: true }));
  sales.fields.add(new NumberField({ name: "updated_at", required: true }));
  dao.saveCollection(sales);
  
  // Create sale_items collection
  const saleItems = new Collection({
    name: "sale_items",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
  });
  saleItems.fields.add(new TextField({ name: "sale_id", required: true }));
  saleItems.fields.add(new TextField({ name: "item_id", required: true }));
  saleItems.fields.add(new NumberField({ name: "quantity", required: true }));
  saleItems.fields.add(new NumberField({ name: "buying_price", required: true }));
  saleItems.fields.add(new NumberField({ name: "target_selling_price", required: true }));
  saleItems.fields.add(new NumberField({ name: "actual_sold_price", required: true }));
  saleItems.fields.add(new NumberField({ name: "created_at", required: true }));
  saleItems.fields.add(new NumberField({ name: "updated_at", required: true }));
  dao.saveCollection(saleItems);
  
  // Create cash_logs collection
  const cashLogs = new Collection({
    name: "cash_logs",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: "",
  });
  cashLogs.fields.add(new TextField({ name: "sale_id", required: false }));
  cashLogs.fields.add(new TextField({ name: "mechanic_id", required: false }));
  cashLogs.fields.add(new NumberField({ name: "amount", required: true }));
  cashLogs.fields.add(new SelectField({ name: "type", required: true, values: ["commission","cash_in","cash_out"] }));
  cashLogs.fields.add(new TextField({ name: "description", required: false }));
  cashLogs.fields.add(new NumberField({ name: "created_at", required: true }));
  dao.saveCollection(cashLogs);
}, "init_db");
