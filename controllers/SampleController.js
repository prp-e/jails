const SampleController = {
    getIndex: (req, res) => {
        try {
            res.render('sample'); 
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

}

module.exports = SampleController