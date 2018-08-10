module.exports = {
    add_pet: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { pet_name, species_id, pet_age } = req.body;
        // console.log('create')
        // console.log(req.body)
        dbInstance.add_pet([pet_name, species_id, pet_age])
            .then(() => {
                dbInstance.view_pets().then(pets => {
                    res.status(200).send(pets)
                })
            }).catch((e) => { console.log(e); res.status(500).send("Couldn't get add_pet") });
    },
    view_pets: (req, res, next) => {
        const dbInstance = req.app.get('db');
        // console.log(req.body)
        dbInstance.view_pets()
            .then((pets) => res.status(200).send(pets))
            .catch((e) => { console.log(e); res.status(500).send("Couldn't get view_pets") });
    },
    update_pet: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { pet_name, pet_age } = req.body;
        const { id } = req.params;
        // console.log(req.body)
        dbInstance.change_pet([pet_name, pet_age, id])
            .then(() => {
                dbInstance.view_pets().then(pets => {
                    res.status(200).send(pets)
                })
            }).catch((e) => { console.log(e); res.status(500).send("Couldn't get update_pet") });
    },
    delete_pet: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        dbInstance.remove_pet([id])
            .then(() => {
                dbInstance.view_pets().then(pets => {
                    res.status(200).send(pets)
                })
            }).catch((e) => { console.log(e); res.status(500).send("Couldn't get remove_pet") });
    }
};