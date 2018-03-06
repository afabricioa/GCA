var express = require('express');
var router = express.Router();
var firebase = require('firebase');

var session;
var usuarioLogado = "off";

firebase.initializeApp({
  serviceAccount: "./gcaufpi-firebase-adminsdk-9j7nt-d6af6b168d",
  databaseURL: "https://gcaufpi.firebaseio.com/"
});

var usuarios = firebase.database().ref('users');
var associados = firebase.database().ref('associados');
var emailUser = usuarios.child('emailAdmin');

/* renderiza login page. */
router.get('/', function(req, res, next) {
  res.render('paginas/login', {resposta: 'deslogado'});
});

/* renderiza index page. */
router.get('/index', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/index', {usuario: usuarioLogado});
  }
});

/* renderiza index supervisor. */
router.get('/paginaSupervisor', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/paginaSupervisor', {usuario: usuarioLogado});
  }
});

/* renderiza index associado. */
router.get('/paginaAssociado', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/paginaAssociado', {usuario: usuarioLogado });
  }
});

/* renderiza info associado. */
router.get('/info', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/info', {usuario: usuarioLogado });
  }
});

//Cadastro de associado
/* renderiza pagina de cadastro */
router.get('/cadastraSupervisor', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/cadastraSupervisor', {usuario: usuarioLogado });
  }
});
/*
router.get('/addAssociado', function(req,res){
  res.render('cadastraAssociado');
});

router.post('/addAssociado', function(req,res){
  var nome = req.body.nome;
  var email = req.body.email;
  var senha1 = req.body.inputSenha1;
  var senha2 = req.body.inputSenha2;
  var telefone = req.body.inputTelefone;

  var uid = firebase.database().ref().child('associados').push().key;
  var associados = firebase.database().ref().child('associados');

  associados.orderByChild("email").equalTo(emailAdmin).once("value",snapshot => {
      const userData = snapshot.val();
      if (userData) {
          res.done('email cadastrado');
      }
      else {
        if(senha1 != senha2){
          res.done('senhas diferentes');

        }else{
          var data = {
              user_id: uid,
              email: email,
              senha1: senha1,
              telefone: telefone
            }

          var updates = {};
          updates['/associados/' + uid] = data;
          firebase.database().ref().update(updates);
        }
      }
  });
});/*


////////////////////////////////////////////////////////////////////////

/* renderiza pagina de associados. */
router.get('/listarAssociados', function(req, res, next) {
  res.render('paginas/listarAssociados', {usuario: usuarioLogado });
});

/* renderiza pagina de cadastrar membro da associacao. */
router.get('/cadastraMembroAssociacao', function(req, res, next) {
  res.render('paginas/cadastraMembroAssociacao', {usuario: usuarioLogado });
});

/* renderiza pagina de detalhes da associacao. */
router.get('/detalhesAssociacao', function(req, res, next) {
  res.render('paginas/detalhesAssociacao', {usuario: usuarioLogado });
});

/* renderiza pagina de associacao. */
router.get('/cadastraAssociacao', function(req, res, next) {
  res.render('paginas/cadastraAssociacao', {usuario: usuarioLogado });
});

//Cadastro de associado
/* renderiza pagina de listar associações*/
router.get('/listarAssociacoes', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/listarAssociacoes', {usuario: usuarioLogado });
  }
});


/* renderiza pagina de listar taxas*/
router.get('/listarTaxas', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/listarTaxas', {usuario: usuarioLogado });
  }
});

/* renderiza pagina de cadastrar taxa*/
router.get('/cadastraTaxa', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/cadastraTaxa', {usuario: usuarioLogado });
  }
});


/* Paginas de reunião */
/* renderiza pagina de listar reuniões*/
router.get('/listarReunioes', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/listarReunioes', {usuario: usuarioLogado });
  }
});

/* renderiza pagina de cadastrar reuniao*/
router.get('/cadastraReuniao', function(req, res, next) {
  if(usuarioLogado == "off"){
    res.render('paginas/login');
  }else{
    res.render('paginas/cadastraReuniao', {usuario: usuarioLogado });
  }
});

/* renderiza pagina de detalhes da reunião. */
router.get('/frequenciaReuniao', function(req, res, next) {
  res.render('paginas/frequenciaReuniao', {usuario: usuarioLogado });
});

/* renderiza pagina de detalhes da reunião. */
router.get('/detalhesReuniao', function(req, res, next) {
  res.render('paginas/detalhesReuniao', {usuario: usuarioLogado });
});



/* renderiza pagina de associacao para associado logado. */
router.get('/detalhesAssociacaoAssociado', function(req, res, next) {
  res.render('paginas/detalhesAssociacaoAssociado' , {usuario: usuarioLogado });
});

router.get('/reunioes', function(req, res, next) {
  res.render('paginas/reunioes' , {usuario: usuarioLogado });
});

router.get('/pagamentos', function(req, res, next) {
  res.render('paginas/pagamentos' , {usuario: usuarioLogado });
});

router.get('/pagamentoTaxa', function(req, res, next) {
  res.render('paginas/pagamentoTaxa' , {usuario: usuarioLogado });
});

/* renderiza pagina de cadastro de admin. */
router.get('/cadastraAdmin', function(req, res, next) {
  res.render('paginas/cadastraAdmin');
});

/*router.get('/',function(req,res){
  session = req.session;
  //Session set when user Request our app via URL
  if(session.email) {

    // This line check Session existence.
    //If it existed will do some action.

        res.render('index');
  }
  else {
      res.render('login');
  }
});*/

router.post('/',function(req,res){
  session = req.session;
  var alerta = "nada";
  usuarios.orderByChild("emailAdmin").equalTo(req.body.email).once("value",snapshot => {
      const userEmailAdm = snapshot.val();
      if (userEmailAdm) {
        usuarios.orderByChild("senha1").equalTo(req.body.senha).once("value",snapshot => {
          const userPwAdm = snapshot.val();
          if(userPwAdm){
            session.id = req.body.email;
            usuarioLogado = req.body.email;
            //res.end('done');
            res.render('paginas/index', {usuario: usuarioLogado, resposta: 'ok' });
          }else{
            res.render('paginas/login', {resposta: 'pw'});
          }
        });
      }else{
        associados.orderByChild("email").equalTo(req.body.email).once("value",snapshot => {
            const userEmailAss = snapshot.val();
            if (userEmailAss) {
              associados.orderByChild("senha1").equalTo(req.body.senha).once("value",snapshot => {
                const userPwAss = snapshot.val();
                if(userPwAss){
                  session.id = req.body.email;
                  usuarioLogado = req.body.email;
                  //res.end('done');

                  associados.orderByChild("email").equalTo(usuarioLogado).once("value",snapshot => {
                    snapshot.forEach(function (childSnapshot) {
                      var childData = childSnapshot.val();
                      if(childData.role == "supervisor"){
                        res.render('paginas/paginaSupervisor', {usuario: usuarioLogado });
                      }else if(childData.role == "associado"){
                        res.render('paginas/paginaAssociado', {usuario: usuarioLogado });
                      }
                    });
                  });
                }else{
                  res.render('paginas/login', {resposta: 'pw'});
                }
              });
            }else{
              res.render('paginas/login', {resposta: 'user'});
            }
        });
      }
  });
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
});

router.get('/logout',function(req,res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    }else{
      usuarioLogado = "off";
      res.render('paginas/login', {resposta: 'off'});
    }
  })
});

/*router.post('/cadastraAdmin',function(req,res){
  var uid = firebase.database().ref().child('users').push().key;
  var users = firebase.database().ref().child('users');

  users.orderByChild("emailAdmin").equalTo(req.body.email).once("value",snapshot => {
      const userData = snapshot.val();
      if (userData) {
          //res.done('email cadastrado!');
      }
      else {
        if(req.body.senha1 != req.body.senha2){
          //res.done('senhas diferentes!');

        }else{
          var data = {
              user_id: uid,
              emailAdmin: req.body.email,
              senha1: req.body.senha1
            }

          var updates = {};
          updates['/users/' + uid] = data;
          firebase.database().ref().update(updates);

        }
      }
    });
  });
//In this we are assigning email to sess.email variable.
//email comes from HTML page.*/

module.exports = router;
