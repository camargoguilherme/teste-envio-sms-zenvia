function sendSMS(){

  var mensagem;
  var telefone;
  var confirmacao;

  mensagem = document.getElementById("mensagem").value;
  telefone = document.getElementById("telefone").value;
  confirmacao = document.getElementById("check").value;

  //alert(mensagem +' | ' + telefone + ' | ' + confirmacao);

  zenvia(mensagem, telefone);
}

function zenvia(mensagem, telefone){

  var request = new XMLHttpRequest();

  request.open('POST', 'https://api-rest.zenvia360.com.br/services/send-sms');

  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'Basic YWRtaW46YWRtaW4=');
  request.setRequestHeader('Accept', 'application/json');

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

  var body = {
    'sendSmsRequest': {
      'from': '5543984231673',
      'to': '55' + telefone,
      'schedule': '2014-08-22T14:55:00',
      'msg': mensagem,
      'callbackOption': 'NONE',
      'id': '002',
      'aggregateId': '1111',
      'flashSms': true
    }
  };
  //console.log(body);
  request.send(JSON.stringify(body));
}