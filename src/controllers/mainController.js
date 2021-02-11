module.exports = {
    index: function(req, res, next) {
        res.render('index',{
            css:'../assets/css/style.css',
            title: 'Home'           
        })
    }
    
}