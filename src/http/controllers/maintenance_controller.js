import Maintenance from "../../database/models/maintenance_model.js";

export const store = async (req, res) => {
  try {
    const { workshop, vehicle, services, date, total_cost } = req.body;

    const content = await Maintenance.create({
      workshop,
      vehicle,
      services,
      date,
      total_cost,
    });

    res.status(201).json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const index = async (req, res) => {
  try {
    const filter = {
      user: {
        $in: [...req.user.following, req.user._id],
      },
    };

    const content = await Maintenance.find(filter).exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Maintenance.findById(req.params.id)
    .populate("workshop")
    .populate("vehicle")
    .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const user = req.user._id;
    const { text } = req.body;

    const content = await Maintenance.findOneAndUpdate(
      {
        _id: req.params.id,
        user,
      },
      { text }
    ).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const user = req.user._id;

    const content = await Maintenance.findOneAndDelete({
      _id: req.params.id,
      user,
    }).exec();

    if (content) {
      res.json(content);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};