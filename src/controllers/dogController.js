function getAllDogs(req, res){
    res.send('hi, this is a test');
}
function postDog(req, res){
    console.log('deu certo?')
    res.send(req.body);
};

function getDog(req, res){}
function putDog(req, res){};
function patchDog(req, res){};

export {getAllDogs, getDog, postDog, putDog, patchDog};