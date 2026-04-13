function homeStart(req, res){
    res.sendFile('home.html', {root: 'public'})
}

export {homeStart};