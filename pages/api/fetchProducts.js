import products from "./products.json"

export default function handler(req, res) {
  if (req.method === "GET") {
    // Removing hashes to not give to buyers before payment
    const productsNoHashes = products.map((product) => {

      const { hash, filename, ...rest } = product;
      return rest;
    });

    res.status(200).json(productsNoHashes);  
  }
  else {
    res.status(405).send(`Method ${req.method} not allowed`);
  }
}