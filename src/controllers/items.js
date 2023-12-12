import ItemModel from '../models/item.js'




const GET_ITEMS_FOR_SALE = async (req, res) => {
    try {const items = await ItemModel.find();
    return res.status(200).json({items: items });
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: "Now working! "});
    }
};



const GET_ITEMS_BY_ID = async (req, res) => {
    const items = await ItemModel.findOne({_id: req.params.id});  /// reikia nurodyti,kad findOne
    return res.status(200).json({items: items });
};


// const GET_ITEMS_BY_ID = (req, res) => {
//     const itemForSale = itemsForSale.find((item) => item.id === Number(req.params.id));

//     if(itemForSale) {
//         return res.status(200).json({itemForSale: itemForSale});
//     }

//     return res
//     .status(404)
//     .json({message: `Items does not exist with ${req.params.id}`})
// };

const POST_ITEMS_FOR_SALE = async (req, res) => {
   try { const item = new ItemModel({       //cia apsirasyta validacija
        ...req.body
    })  

    const response = await item.save(); //issaugo duomenis DB
    
    return res.status(201).json({ item: response, message: "Item added!" });
} catch (err) {
    console.log(err)
    return res.status(500).json({message: "Now working! "});
}
};

const UPDATE_ITEM = async (req, res) => {
try {
const response = await ItemModel.updateOne (
    {_id: req.params.id},
    {...req.body}
);

return res.status(200).json({ status: "Updated", response: response});
}  catch (err) {
    console.log(err)
    return res.status(500).json({message: "Now working! "});
}

};

const DELETE_ITEM = async (req, res) => {
    try {
   const response = await ItemModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({ response: response, message: "Deleted!" });
    }  catch (err) {
        console.log(err)
        return res.status(500).json({message: "Now working! "});
    }
};



export { GET_ITEMS_FOR_SALE, GET_ITEMS_BY_ID, POST_ITEMS_FOR_SALE, UPDATE_ITEM, DELETE_ITEM };