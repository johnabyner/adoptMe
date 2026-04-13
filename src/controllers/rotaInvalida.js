function rotaInvalida(req, res){
    res.status(404).json({
        error: "page not founded"
    });
}

export {rotaInvalida};