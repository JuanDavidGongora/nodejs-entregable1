import Zod from "zod";


const createRepairSchema = Zod.object({
    date: Zod.date().required(),
    motorsNumber: Zod.number().required(),
    description: Zod.string().required(),
  });
  
  export const createRepair = async (req, res) => {
    try {
      const { date, motorsNumber, description } = req.body;
  
      // Validar los datos de entrada
      const result = createRepairSchema.validate(req.body);
  
      if (result.errors) {
        return res.status(400).json({
          errors: result.errors,
        });
      }
  
      // Crear la reparación
      const repair = await repair.create({
        date,
        motorsNumber,
        description,
      });
  
      return res.status(201).json(repair);
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Something went wrong",
      });
    }
  };