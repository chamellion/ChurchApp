const Registry = require('../wmodel/ChurchRegistry');

exports.addChurchMember = async (req, res)=>{
    try {
        const member = await Registry.create(req.body);
        res.status(201).json(member);
    }catch (e) {
        console.log(e);
    }
}

exports.findChurchMembers = async (req, res)=>{
    try {
        const member = await Registry.find();
        res.status(200).json(member);
    }catch (error){
        console.log(error);
    }
}

exports.findChurchMembersByID = async (req, res) => {
    try {
        const id = req.params.id;
        const member = await Registry.findById({_id: id});
        res.status(200).json(member);
    } catch (error) {
        console.log(error);
    }
}

exports.updateChurchMemberData = async (req, res)=>{
        const id = req.params.id;
        await Registry.
                        findByIdAndUpdate({_id:id}, res.body, { new : true}, (err, member)=>{
            if (err) console.log(err)

            res.status(200).json(member)
        })

}

exports.deleteChurchMemberDataByID = async (req, res)=>{
    try {
        const id = req.params.id
        await Registry.findByIdAndRemove({_id:id}, null,(err, mem)=>{
            if (err) console.log(err)

            res.status(200).json(mem)
        })
    }catch (error){
        console.log(error)
    }
}