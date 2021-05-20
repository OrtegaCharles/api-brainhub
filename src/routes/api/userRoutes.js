const router = require('express').Router();
const { User } = require('../../database')
const { body, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (e) {
        console.log(e)
        res.json({ error: e });
    }
});

router.post('/',
    body('email').isEmail().withMessage('Invalid email'),
    async (req, res) => {

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.array()[0].msg });
            }
            await User.create(req.body);
            res.json({ message: 'User created successfully' });
        }
        catch (e) {
            console.log(e)
            res.json({ error: e });
        }
    });

router.put('/:id',
    body('email').isEmail().withMessage('Invalid email'),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.array()[0].msg });
            }

            await User.update(req.body, {
                where: { id: req.params.id }
            });
            res.json({ message: 'Actualizado correctamente.' });
        }
        catch (e) {
            console.log(e)
            res.json({ error: e });
        }
    });

router.delete('/:id', async (req, res) => {
    try {
        await User.destroy({
            where: { id: req.params.id }
        });
        res.json({ message: 'Eliminado correctamente.' });
    } catch (e) {
        console.log(e)
        res.json({ error: e });
    }
});

module.exports = router;