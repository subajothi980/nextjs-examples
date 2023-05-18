export default function handler(req,res){
    res.setPreviewData({name:'Subashini Jothilingam'});
    //res.end('preview enabled');
    res.redirect(req.query.redirect);
}