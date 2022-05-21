// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let encrypt = (key) => Object.keys(key);

  let { params, query, headers, body, state } = req;

  if (req.params) {
  }
  if (req.query) {
  }

  if (req.headers) {
  }
  let inventory = async (id) =>
    await fetch(`/api/inventory/${id}`)
      .then((r) => r.json())
      .catch((e) => e)
      .then((b) => Object.values(b));

  res.status(200).json({
    device: {
      type: 1,
      manufactuer: 'hp',
      serail: '*******0923',
      model: {
        key: 'Boh-WAP9AR',
        title: 'Matebook D 15',
      },
      inventory: 'none',
      year: 2020,
      place: '',

      inventory: {},
    },
  });
};
